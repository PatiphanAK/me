import { Mail, Linkedin, Facebook } from "lucide-react";

const contact = [
  {
    id: 1,
    platform: 'Email',
    icon: Mail,
    contact: "pakkahadsri@gmail.com",
    color: "from-red-500 to-pink-600",
    hoverColor: "hover:from-red-600 hover:to-pink-700"
  },
  {
    id: 2,
    platform: 'LinkedIn',
    icon: Linkedin,
    contact: "https://www.linkedin.com/in/patiphan-akkahadsri-959535271/",
    color: "from-blue-500 to-indigo-600",
    hoverColor: "hover:from-blue-600 hover:to-indigo-700"
  },
  {
    id: 3,
    platform: 'Facebook',
    icon: Facebook,
    contact: "https://www.facebook.com/profile.php?id=100009448836193&locale=th_TH",
    color: "from-blue-600 to-purple-600",
    hoverColor: "hover:from-blue-700 hover:to-purple-700"
  }
];

export default function Contact() {
  const handleEmailClick = async (e, email) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Simple title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h2>
        
        {/* Contact icons */}
        <div className="flex justify-center items-center gap-6">
          {contact.map((item) => {
            const IconComponent = item.icon;
            const isEmail = !item.contact.startsWith('http');
            
            return (
              <a
                key={item.id}
                href={item.contact.startsWith('http') ? item.contact : `mailto:${item.contact}`}
                target={item.contact.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={isEmail ? (e) => handleEmailClick(e, item.contact) : undefined}
                className="group relative p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200"
                title={item.platform}
              >
                {/* Glowing effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative p-3 bg-gradient-to-r ${item.color} ${item.hoverColor} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </a>
            );
          })}
        </div>
        
        {/* Simple footer */}
        <p className="text-sm text-gray-500 mt-6">
          Feel free to reach out anytime! 🚀
        </p>
      </div>
    </div>
  );
}