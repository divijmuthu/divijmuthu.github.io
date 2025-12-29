import Image from "next/image";
import { MediaReview } from "@/data/content";

interface MediaReviewCardProps {
  review: MediaReview;
  span?: 1 | 2 | 3;
}

export default function MediaReviewCard({ review, span = 3 }: MediaReviewCardProps) {
  const spanClass = span === 3 
    ? "lg:col-span-3" 
    : span === 2 
    ? "lg:col-span-2" 
    : "lg:col-span-1";
  
  const isFullWidth = span === 3;
  const iconSize = isFullWidth ? "w-20 h-20" : "w-16 h-16";
  const textSize = isFullWidth ? "text-base" : "text-sm";

  return (
    <div className={`flex gap-4 p-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-lg hover:bg-white hover:shadow-md transition-all ${spanClass}`}>
      {/* Icon/Image - Left side */}
      <div className={`flex-shrink-0 ${iconSize}`}>
        {review.icon ? (
          <div className="relative overflow-hidden rounded-lg shadow-sm w-full h-full">
            <Image
              src={review.icon}
              alt={review.title}
              width={isFullWidth ? 80 : 64}
              height={isFullWidth ? 80 : 64}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center shadow-sm ${iconSize}`}>
            <span className={isFullWidth ? "text-3xl" : "text-2xl"}>🎬</span>
          </div>
        )}
      </div>

      {/* Content - Right side */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className={`${isFullWidth ? "text-lg" : "text-base"} font-semibold text-slate-900`}>
            {review.title}
          </h3>
          {review.rating && (
            <span className={`${isFullWidth ? "text-base" : "text-sm"} font-medium text-slate-600 flex-shrink-0`}>
              {review.rating}/10
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className={`${isFullWidth ? "text-xs" : "text-xs"} px-2 py-0.5 bg-slate-200 text-slate-700 rounded`}>
            {review.type}
          </span>
          {review.date && (
            <span className={`${isFullWidth ? "text-xs" : "text-xs"} text-slate-500`}>{review.date}</span>
          )}
        </div>
        <p className={`${textSize} text-slate-700 leading-relaxed`}>
          {review.review}
        </p>
      </div>
    </div>
  );
}

