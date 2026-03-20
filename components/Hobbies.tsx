interface Hobby {
  name: string;
  description?: string;
}

interface HobbiesProps {
  hobbies: string[] | Hobby[];
}

export default function Hobbies({ hobbies }: HobbiesProps) {
  // Handle both string array and object array
  const hobbyList = hobbies.map((hobby) =>
    typeof hobby === "string" ? { name: hobby } : hobby
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {hobbyList.map((hobby, idx) => (
        <div
          key={idx}
          className="p-5 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-lg hover:brightness-105 transition-colors"
        >
          <h3 className="text-base font-semibold text-foreground mb-2">
            {hobby.name}
          </h3>
          {hobby.description && (
            <p className="text-sm text-foreground leading-relaxed">
              {hobby.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

