import React, { useState } from 'react';
import { Database, MessageSquare, Code, Cloud, Container, GitBranch, Cpu, Eye, Settings } from 'lucide-react';

const toolCategories = [
  {
    id: 'database',
    title: 'Database & Cache / In-Memory Store',
    icon: <Database className="w-5 h-5" />,
    color: 'bg-blue-50 border-blue-200',
    tools: [
      { name: 'PostgreSQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Neo4j', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
      { name: 'Redis', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
    ]
  },
  {
    id: 'messaging',
    title: 'Message Broker',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'bg-green-50 border-green-200',
    tools: [
      { name: 'RabbitMQ', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
      { name: 'Apache Kafka', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <Code className="w-5 h-5" />,
    color: 'bg-purple-50 border-purple-200',
    tools: [
      {
        name: 'REST API',
        logoUrl: 'https://raw.githubusercontent.com/Edgar-P-yan/restful-api-university/master/restful-api-logo.png',
        details: {
          frameworks: [
            { name: 'Django REST', url: 'https://www.django-rest-framework.org/', logo: 'https://www.django-rest-framework.org/img/logo.png' },
            { name: 'Fiber (Go)', url: 'https://gofiber.io/', logo: 'https://gofiber.io/assets/images/logo.svg' },
            { name: 'Axum (Rust)', url: 'https://github.com/tokio-rs/axum', logo: 'https://pbs.twimg.com/profile_images/1039634366207414272/bC40df3r_400x400.jpg' }
          ],
          description: 'Backend frameworks I have hands-on experience with'
        }
      },
      {
        name: 'gRPC',
        logoUrl: 'https://grpc.io/img/logos/grpc-icon-color.png',
        details: {
          description: '',
          features: ['Protocol Buffers', 'Streaming']
        }
      },
      {
        name: 'MQTT',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mqtt-hor.svg/2560px-Mqtt-hor.svg.png',
        details: {
          description: '',
          features: ['Pub/Sub']
        }
      },
      {
        name: 'WebSocket',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/1200px-WebSocket_colored_logo.svg.png',
        details: {
          frameworks: [
            { name: 'Django Channel', url: 'https://channels.readthedocs.io/en/latest/', logo: 'https://www.svgrepo.com/show/353657/django-icon.svg' },
            { name: 'Gorilla Mux', url: 'https://github.com/gorilla/mux', logo: 'https://image.pngaaa.com/423/570423-middle.png' },
          ],
        }
      }
    ]
  },
  {
    id: 'ide',
    title: 'IDE & Editors',
    icon: <Code className="w-5 h-5" />,
    color: 'bg-orange-50 border-orange-200',
    tools: [
      { name: 'VS Code', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Neovim', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg' },
      { name: 'PyCharm', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
      { name: 'Goland', logoUrl: 'https://dl.flathub.org/media/com/jetbrains/GoLand/7a25094fb5fa7badba596ffc68741397/icons/128x128@2/com.jetbrains.GoLand.png'},
      { name: 'Rustrover', logoUrl: 'https://dl.flathub.org/media/com/jetbrains/RustRover/1ad940a2336d45649b8cc0cc195c988a/icons/128x128@2/com.jetbrains.RustRover.png'},
      { name: 'Jupyter', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { name: 'Google Colab', logoUrl: 'https://colab.research.google.com/img/colab_favicon_256px.png' },
      { name: 'Arduino IDE', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg'}
    ]
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    icon: <Eye className="w-5 h-5" />,
    color: 'bg-red-50 border-red-200',
    tools: [
      { name: 'PyTorch', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'NumPy', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'OpenCV', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'Roboflow', logoUrl: 'https://security.roboflow.com/api/share/d560a04b-1859-4677-a8a3-e0a72dc70231/logo.png' },
      { name: 'Pillow', logoUrl: 'https://raw.githubusercontent.com/python-pillow/pillow-logo/main/pillow-logo-dark-text-1280x640.png' },
      { name: 'Matplotlib',logoUrl:'https://miro.medium.com/v2/resize:fit:1200/1*Kzb1TcQsx4F12t-qsU7knA.png'}
    ]
  },
  {
    id: 'vcs',
    title: 'Version Control',
    icon: <GitBranch className="w-5 h-5" />,
    color: 'bg-gray-50 border-gray-200',
    tools: [
      { name: 'Git', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'GitLab', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: <Cloud className="w-5 h-5" />,
    color: 'bg-sky-50 border-sky-200',
    tools: [
      {
        name: 'AWS',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png',
        details: {
          services: ['Lambda', 'CloudFormation', 'S3', 'EC2', 'SageMaker', 'API Gateway', 'RDS', 'DynamoDB'],
          description: 'These are the AWS services I have worked with in real-world projects.'
        }
      },
      {
        name: 'Google Cloud',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        details: {
          services: ['Cloud Storage (Bucket)', 'Compute Engine'],
          description: 'These are the GCP services I have worked with in real-world projects'
        }
      }
    ]
  },
  {
    id: 'container',
    title: 'Containerization',
    icon: <Container className="w-5 h-5" />,
    color: 'bg-cyan-50 border-cyan-200',
    tools: [
      { name: 'Containerd', logoUrl: 'https://containerd.io/img/logos/footer-logo.png'},
      { name: 'Docker', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
    ]
  },
  {
    id: 'cicd',
    title: 'CI/CD & Build Tools',
    icon: <Settings className="w-5 h-5" />,
    color: 'bg-indigo-50 border-indigo-200',
    tools: [
      { name: 'Jenkins', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Makefile', logoUrl: 'https://static-00.iconduck.com/assets.00/file-type-makefile-icon-2048x2000-kjmtrypc.png' }
    ]
  }
];

function ToolCard({ tool, categoryId, index, isHovered, onHover, onLeave, color }) {
  const toolKey = `${categoryId}-${index}`;

  return (
    <div
      key={toolKey}
      className={`${color} rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group/item cursor-pointer relative`}
      onMouseEnter={() => onHover(toolKey)}
      onMouseLeave={onLeave}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={tool.logoUrl}
            alt={`${tool.name} logo`}
            className="max-w-full max-h-full object-contain transition-transform group-hover/item:scale-110"
            onError={(e) => {
              e.target.src = '/api/placeholder/48/48';
              e.target.alt = tool.name;
            }}
          />
        </div>
        <span className="text-xs font-medium text-gray-700 leading-tight">{tool.name}</span>
      </div>

      {isHovered && tool.details && <ToolTooltip tool={tool} />}
    </div>
  );
}

function ToolTooltip({ tool }) {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-in fade-in zoom-in-95 duration-200">
      <div className="text-sm">
        <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
        <p className="text-gray-600 mb-3 text-xs leading-relaxed">{tool.details.description}</p>

        {tool.details.frameworks && (
          <Section title="Frameworks Used:">
            {tool.details.frameworks.map((framework, idx) => (
              <a
                key={idx}
                href={framework.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group/link"
              >
                <img
                  src={framework.logo}
                  alt={framework.name}
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/20/20';
                  }}
                />
                <span className="text-xs font-medium text-gray-700 group-hover/link:text-blue-600">
                  {framework.name}
                </span>
                <svg className="w-3 h-3 text-gray-400 group-hover/link:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </Section>
        )}

        {tool.details.services && (
          <TagSection title="Services Used:" tags={tool.details.services} color="blue" />
        )}

        {tool.details.features && (
          <TagSection title="Key Features:" tags={tool.details.features} color="green" />
        )}
      </div>

      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-3">
      <h5 className="font-medium text-gray-800 mb-1 text-xs">{title}</h5>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function TagSection({ title, tags, color }) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    purple: 'bg-purple-100 text-purple-800',
    gray: 'bg-gray-100 text-gray-800'
  };
  const colorClass = colorClasses[color] || colorClasses.gray;
  return (
    <div className="mb-3">
      <h5 className="font-medium text-gray-800 mb-1 text-xs">{title}</h5>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, idx) => (
          <span key={idx} className={`px-2 py-1 ${colorClass} rounded text-xs font-medium`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CategorySection({ category, hoveredTool, onHover, onLeave }) {
  return (
    <div key={category.id} className="group">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${category.color}`}>{category.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
          {category.title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-4"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {category.tools.map((tool, index) => (
          <ToolCard
            key={index}
            tool={tool}
            categoryId={category.id}
            index={index}
            isHovered={hoveredTool === `${category.id}-${index}`}
            onHover={onHover}
            onLeave={onLeave}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}

export default function DevToolsShowcase() {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          These are the tools I’m most comfortable with and rely on regularly when building, testing, and shipping applications.
        </p>
      </div>

      <div className="space-y-8">
        {toolCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            hoveredTool={hoveredTool}
            onHover={setHoveredTool}
            onLeave={() => setHoveredTool(null)}
          />
        ))}
      </div>
    </div>
  );
}
