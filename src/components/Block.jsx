const framework = [
  { id: 1, name: 'Vue.js', logoUrl: 'https://vuejs.org/images/logo.png' },
  { id: 2, name: "TypeScript", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png' },
  { id: 3, name: 'Django Rest Framework', logoUrl: 'https://www.django-rest-framework.org/img/logo.png' },
  { id: 4, name: "Tailwind CSS", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg' },
  { id: 5, name: 'PostgreSQL', logoUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
  { id: 6, name: 'MongoDB', logoUrl: 'https://www.mongodb.com/assets/images/global/leaf.png' },
  { id: 7, name: 'Pytorch', logoUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3qPNeH7GljKLjwxeeS3uqDHmrdaKgUPjNnCHBi5ggZs6x_TZJFU-FbG9_oCy-E0hH3rPaiGBwTEZw1NUX5C5zHHmfqhnFV37nxdGwRqE' },
  { id: 8, name: 'OpenCV', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/OpenCV_logo_black.svg/1200px-OpenCV_logo_black.svg.png' },
  { id: 9, name: 'Fiber', logoUrl: 'https://docs.gofiber.io/img/logo.svg' },
  { id: 10, name: 'Docker', logoUrl: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
  { id: 11, name: 'RabbitMQ', logoUrl: 'https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg' },
  { id: 12, name: 'Numpy', logoUrl: 'https://numpy.org/images/logo.svg' },
  { id: 13, name: 'Git', logoUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
  { id: 14, name: "DaisyUI", logoUrl: 'https://images.seeklogo.com/logo-png/55/1/daisyui-logo-png_seeklogo-554509.png' },
  { id: 15, name: 'Swagger', logoUrl: 'https://logowik.com/content/uploads/images/swagger6360.jpg' },
  { id:16, name: 'AWS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png' },
];



export default function LogoBlock() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {framework.map((tools) => (
          <div 
            key={tools.id} 
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-center h-32 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img 
              src={tools.logoUrl} 
              alt={`${tools.name} logo`} 
              className="max-h-16 max-w-full"
              onError={(e) => {
                e.target.src = `/api/placeholder/150/80`;
                e.target.alt = tools.name;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

