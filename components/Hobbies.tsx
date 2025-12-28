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
          className="p-5 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            {hobby.name}
          </h3>
          {hobby.description && (
            <p className="text-sm text-slate-600 leading-relaxed">
              {hobby.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

