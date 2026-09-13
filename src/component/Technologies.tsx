import { FaTrash } from "react-icons/fa";

import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

import technologiesData from "../data/Technology.json";

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

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technologies
  useEffect(() => {
    setTechnologies(technologiesData);
    setLoading(false);
  }, []);

 // Add technology
const handleAdd = (technology: Technology) => {
  // Check if the same technology is already added
  const alreadyAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    alert(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedTechnologies((previous) => [
    ...previous,
    technology,
  ]);
};


  const handleRemove = (id: string) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-slate-500">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the Technologies
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>


        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((technology) => (
              <TechnologyCard
  key={technology.id}
  technology={technology}
  isAdded={selectedTechnologies.some(
    (item) => item.id === technology.id
  )}
  onAdd={handleAdd}
  onRemove={handleRemove}  
/>
            ))}
          </div>


          <div className="bg-white border border-slate-200 rounded-xl p-4 h-fit lg:sticky lg:top-24">
            <h3 className="font-bold text-slate-900">
              Your Stack
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              {selectedTechnologies.length}{" "}
              {selectedTechnologies.length === 1
                ? "Technology"
                : "Technologies"}{" "}
              Selected
            </p>


            <div className="mt-4 space-y-2">
              {selectedTechnologies.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm text-slate-400">
                    Your stack is empty
                  </p>

                  <p className="text-xs text-slate-300 mt-1">
                    Add technologies to get started
                  </p>
                </div>
              ) : (
                selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between border border-slate-200 rounded-lg p-3"
                  >

                    <div className="flex items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-7 h-7 object-contain"
                      />

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {technology.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
  onClick={() => handleRemove(technology.id)}
  className="text-slate-400 hover:text-red-500 transition"
  aria-label={`Remove ${technology.name}`}
>
  <FaTrash size={16} />
</button>
                  </div>
                ))
              )}
            </div>

            {/* Remove All */}
            <button
              onClick={handleRemoveAll}
              disabled={selectedTechnologies.length === 0}
              className="w-full mt-5 py-2 rounded-lg border border-red-300 text-red-500 text-sm hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
