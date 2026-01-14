import { useLanguage } from '../contexts/LanguageContext';

type TimelineItem = {
  year: number;
  date: string;
  title: string;
  description: string;
};

export default function Timeline() {
  const { t, tArray } = useLanguage();

  const items = tArray('timeline.items') as TimelineItem[] || [];

  // Agrupar itens por ano
  const itemsByYear = items.reduce<Record<number, TimelineItem[]>>(
    (acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    },
    {}
  );

  // Ordenar anos (decrescente)
  const years = Object.keys(itemsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="mt-12">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-6 max-w-3xl w-full">
          {/* Conteúdo */}
          <div className="w-full">
            {years.map((year, yearIndex) => (
              <div key={year} className="w-full">
                {/* Ano */}
                <h3 className="text-3xl font-playfair font-semibold text-teste2 mb-4">
                  {year}
                </h3>

                {/* Eventos do ano */}
                <div className="flex flex-col gap-6">
                  {itemsByYear[year].map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <p className="text-sm font-lora font-medium text-teste3">
                        {item.date}
                      </p>

                      <h4 className="text-lg font-playfair font-semibold text-teste2">
                        {item.title}
                      </h4>

                      <p className="text-base font-lora text-teste3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Separador entre anos */}
                {yearIndex < years.length - 1 && (
                  <div className="border-t border-teste4 mt-6 pt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
