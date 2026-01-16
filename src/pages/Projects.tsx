import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t, tArray } = useLanguage();
  
  // Pega os projetos do JSON
  const projects = tArray('projects.items') || [];
  const projectsCount = projects.length;
  
  return (
    <section className="mt-12">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-6 max-w-3xl w-full">
          {projects.map((project: any, index: number) => {
            const link = t(`projects.items.${index}.link`);
            const tags = project.tags || [];
            
            return (
              <div key={index} className="w-full">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-playfair font-semibold text-primary">
                    {t(`projects.items.${index}.title`)}
                  </h2>
                  
                  <p className="text-base font-lora text-secondary">
                    {t(`projects.items.${index}.description`)}
                  </p>
                  
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm font-lora font-medium bg-muted text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 w-fit"
                  >
                    <span className="font-lora text-sm font-medium">{t('projects.view')}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                
                {index < projectsCount - 1 && (
                  <div className="border-t border-muted mt-6 pt-6"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
  