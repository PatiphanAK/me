import { Github } from 'lucide-react';

export default function ProjectCard({ title, description, image, githubURL, tags = [] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          {githubURL && (
            <div className="absolute bottom-4 right-4">
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-600">{description}</p>
        
        {githubURL && (
          <div className="mt-4">
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Github size={18} className="mr-2" />
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
}


export function ProfileCard({ title, description, image }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
            <div className="relative aspect-square overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
            </div>
        </div>
    )
}
