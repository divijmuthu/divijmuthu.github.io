interface SectionHeadingProps {
  children: React.ReactNode;
}

function LeftRuleArrow() {
  return (
    <svg viewBox="0 0 28 16" className="section-rule__arrow" aria-hidden>
      <line className="section-rule__line" x1="28" y1="8" x2="13" y2="8" />
      <path
        className="section-rule__head"
        d="M 13 8 L 1 8 M 1 8 L 7.5 2.8 L 13 8 L 7.5 13.2 Z"
      />
    </svg>
  );
}

function RightRuleArrow() {
  return (
    <svg viewBox="0 0 28 16" className="section-rule__arrow" aria-hidden>
      <line className="section-rule__line" x1="0" y1="8" x2="15" y2="8" />
      <path
        className="section-rule__head"
        d="M 15 8 L 27 8 M 27 8 L 20.5 2.8 L 15 8 L 20.5 13.2 Z"
      />
    </svg>
  );
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-foreground">{children}</h2>
      <div className="section-rule mt-3" aria-hidden>
        <LeftRuleArrow />
        <span className="section-rule__stretch" />
        <span className="section-rule__dot" />
        <span className="section-rule__stretch" />
        <RightRuleArrow />
      </div>
    </div>
  );
}
