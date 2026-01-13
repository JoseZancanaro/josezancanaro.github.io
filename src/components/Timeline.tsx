import { useLanguage } from '../contexts/LanguageContext';

const timelineEvents = [
  { year: 2022, index: 0 },
  { year: 2022, index: 1 },
  { year: 2023, index: 2 },
  { year: 2023, index: 3 },
  { year: 2024, index: 4 },
];

export default function Timeline() {
  const { t } = useLanguage();
  // Agrupar eventos por ano
  const eventsByYear = timelineEvents.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {} as Record<number, typeof timelineEvents>);

  // Ordenar anos em ordem decrescente
  const years = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {years.map((year) => (
            <div key={year} className="relative">
              {/* Bloco do ano */}
              <div className="relative border-l-2 border-zinc-300 pl-6">
                {/* Ano */}
                <div className="pt-1 mb-4">
                  <h2 className="text-2xl font-playfair font-bold text-zinc-800">
                    {year}
                  </h2>
                </div>

                {/* Eventos do ano */}
                <div className="space-y-4 pl-0">
                  {eventsByYear[year].map((event, index) => (
                    <div key={index} className="pb-4 last:pb-0">
                      <p className="text-xs font-lora font-medium text-zinc-500 mb-1">
                        {t(`timeline.items.${event.index}.date`)}
                      </p>
                      <h3 className="text-lg font-playfair font-semibold mb-2 text-zinc-800">
                        {t(`timeline.items.${event.index}.title`)}
                      </h3>
                      <p className="text-sm font-lora text-zinc-600 leading-relaxed">
                        {t(`timeline.items.${event.index}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  