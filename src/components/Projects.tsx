import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "link",
  },
  {
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "link",
  },
  {
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "link",
  },
  {
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "link",
  },
  {
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "link",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <section className="mt-16">
      <div className="flex justify-center">
        <div className="flex flex-col items-end gap-6 max-w-3xl w-full">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-playfair font-semibold text-zinc-800">
                  {t(`projects.items.${index}.title`)}
                </h2>
                
                <p className="text-base font-lora text-zinc-700">
                  {t(`projects.items.${index}.description`)}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-lora font-medium bg-zinc-100 text-zinc-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-800 transition-colors inline-flex items-center gap-2 w-fit"
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
              
              {index < projects.length - 1 && (
                <div className="border-t border-zinc-300 mt-6 pt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  