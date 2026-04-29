import Image from "next/image";
import { FileText } from "lucide-react";
import { TechnicalBook } from "@/data/content";

interface TechnicalBookCardProps {
  book: TechnicalBook;
  span?: 1 | 2 | 3;
}

/** Renders short notes: lines with "- ", "* ", or "•" become a bullet list. */
function InlineNotes({ text, className }: { text: string; className: string }) {
  const lines = text.split("\n");
  const blocks: { type: "ul" | "p"; content: string[] }[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = () => {
    if (bulletBuffer.length) {
      blocks.push({ type: "ul", content: [...bulletBuffer] });
      bulletBuffer = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets();
      continue;
    }
    const m = line.match(/^\s*[-*•]\s+(.+)$/);
    if (m) {
      bulletBuffer.push(m[1]);
    } else {
      flushBullets();
      blocks.push({ type: "p", content: [trimmed] });
    }
  }
  flushBullets();

  return (
    <div className={className}>
      {blocks.map((block, i) =>
        block.type === "ul" ? (
          <ul key={i} className="list-disc pl-5 space-y-0.5 my-1 first:mt-0">
            {block.content.map((item, j) => (
              <li key={j} className="pl-0.5">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="mb-1 last:mb-0">
            {block.content[0]}
          </p>
        )
      )}
    </div>
  );
}

export default function TechnicalBookCard({ book, span = 3 }: TechnicalBookCardProps) {
  const spanClass =
    span === 3 ? "lg:col-span-3" : span === 2 ? "lg:col-span-2" : "lg:col-span-1";

  const isFullWidth = span === 3;
  const iconSize = isFullWidth ? "w-20 h-20" : "w-16 h-16";
  const textSize = isFullWidth ? "text-base" : "text-sm";

  const hasNotes = Boolean(book.notes?.trim());
  const hasPdf = Boolean(book.notesUrl);
  const showPlaceholder = !hasNotes && !hasPdf;

  return (
    <div
      className={`flex gap-4 p-4 bg-[var(--sidebar-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-lg hover:brightness-105 hover:shadow-md transition-all ${spanClass}`}
    >
      <div className={`flex-shrink-0 ${iconSize}`}>
        {book.icon ? (
          <div className="relative overflow-hidden rounded-lg shadow-sm w-full h-full bg-white p-1.5">
            <Image
              src={book.icon}
              alt={book.title}
              width={isFullWidth ? 80 : 64}
              height={isFullWidth ? 80 : 64}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center shadow-sm ${iconSize}`}
          >
            <span className={isFullWidth ? "text-3xl" : "text-2xl"}>📘</span>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className={`${isFullWidth ? "text-lg" : "text-base"} font-semibold text-foreground`}
          >
            {book.title}
          </h3>
        </div>
        {book.date && (
          <p className={`${isFullWidth ? "text-xs" : "text-xs"} text-foreground/80 mb-2`}>
            {book.date}
          </p>
        )}
        <p className={`text-xs font-medium uppercase tracking-wide text-foreground/60 mb-1`}>
          Notes
        </p>

        {hasPdf && (
          <a
            href={book.notesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 ${textSize} font-medium text-foreground underline decoration-[var(--border-color)] underline-offset-2 hover:opacity-80 mb-2`}
          >
            <FileText className="w-4 h-4 flex-shrink-0" aria-hidden />
            {book.notesUrlLabel ?? "View notes (PDF)"}
          </a>
        )}

        {hasNotes && (
          <div
            className={`${textSize} text-foreground leading-relaxed min-h-0 ${
              hasPdf ? "mt-1" : "min-h-[2.5rem]"
            }`}
          >
            <InlineNotes text={book.notes!.trim()} className="whitespace-pre-wrap" />
          </div>
        )}

        {showPlaceholder && (
          <p className={`${textSize} text-foreground/45 italic min-h-[2.5rem]`}>
            Add notes in content, or set notesUrl to a PDF in /public/notes/
          </p>
        )}
      </div>
    </div>
  );
}
