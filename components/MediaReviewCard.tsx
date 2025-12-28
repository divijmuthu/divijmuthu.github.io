import Image from "next/image";
import { MediaReview } from "@/data/content";

interface MediaReviewCardProps {
  review: MediaReview;
}

export default function MediaReviewCard({ review }: MediaReviewCardProps) {
  return (
    <div className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
      {/* Icon/Image - Left side */}
      <div className="flex-shrink-0 w-16 h-16">
        {review.icon ? (
          <Image
            src={review.icon}
            alt={review.title}
            width={64}
            height={64}
            className="w-full h-full object-cover rounded"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-slate-200 rounded flex items-center justify-center">
            <span className="text-2xl">🎬</span>
          </div>
        )}
      </div>

      {/* Content - Right side */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-slate-900">
            {review.title}
          </h3>
          {review.rating && (
            <span className="text-sm font-medium text-slate-600 flex-shrink-0">
              {review.rating}/10
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 bg-slate-200 text-slate-700 rounded">
            {review.type}
          </span>
          {review.date && (
            <span className="text-xs text-slate-500">{review.date}</span>
          )}
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          {review.review}
        </p>
      </div>
    </div>
  );
}

