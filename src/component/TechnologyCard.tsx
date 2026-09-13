interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
  onRemove,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-9 h-9 object-contain"
        />

        <span className="text-xs bg-pink-50 text-pink-500 px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      <h3 className="font-bold text-slate-900 mt-4">
        {technology.name}
      </h3>

    


      <p className="text-xs text-slate-500 mt-2 leading-5 min-h-10">
        {technology.description}
      </p>

      
      <div className="flex items-center justify-between mt-4 text-xs gap-2">
        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
          {technology.category}
        </span>

        <span className="text-slate-500">{technology.difficulty}</span>

        <span className="text-slate-600 flex items-center gap-1">
          <span className="text-yellow-400 text-base">★</span>
          {technology.rating}
        </span>
      </div>



      {isAdded ? (
        <button
          onClick={() => onRemove(technology.id)}
          className="w-full mt-4 py-2 rounded-lg text-sm font-medium bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          Remove from Stack
        </button>
      ) : (
        <button
          onClick={() => onAdd(technology)}
          className="w-full mt-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Add to Stack
        </button>
      )}
    </div>
  );
};

export default TechnologyCard;
