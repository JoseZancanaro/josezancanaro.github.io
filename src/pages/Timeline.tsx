import { useLanguage } from '../contexts/LanguageContext';
import renderFormattedText from '../utils/renderFormattedText';

type TimelineItem = {
  year: number;
  date: string;
  title: string;
  description: string;
};

const Timeline = () => {
  const { tArray } = useLanguage();

  const items = (tArray('timeline.items') as TimelineItem[]) || [];

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

  const years = Object.keys(itemsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="mt-12">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-6 max-w-3xl w-full">
          <div className="w-full">
            {years.map((year, yearIndex) => (
              <div key={year} className="w-full">
                <h3 className="text-3xl font-playfair font-semibold text-primary mb-4">
                  {year}
                </h3>
                <div className="flex flex-col gap-6">
                  {itemsByYear[year].map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <p className="text-sm font-lora font-medium text-secondary">
                        {item.date}
                      </p>
                      <h4 className="text-lg font-playfair font-semibold text-primary">
                        {item.title}
                      </h4>
                      <p className="text-base text-justify font-lora text-secondary leading-relaxed">
                        {renderFormattedText(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
                {yearIndex < years.length - 1 && (
                  <div className="border-t border-muted mt-6 pt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;