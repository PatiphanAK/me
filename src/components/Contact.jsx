const contact = [
  {
    id: 1,
    platform: 'Email',
    icon: 'https://www.svgrepo.com/show/14478/email.svg',
    contact: "pakkahadsri@gmail.com",
  },
  {
    id: 2,
    platform: 'LinkedIn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png',
    contact: "https://www.linkedin.com/in/patiphan-akkahadsri-959535271/",
  },
  {
    id: 3,
    facebook: 'Facebook',
    icon: 'https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid',
    contact: "https://www.facebook.com/profile.php?id=100009448836193&locale=th_TH",
  }
]

function showContact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {contact.map((item) => (
          <a
            key={item.id}
            href={item.contact.startsWith('http') ? item.contact : `mailto:${item.contact}`}
            target={item.contact.startsWith('http') ? "_blank" : null}
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col items-center justify-center h-48" // More refined styling
          >
            <img src={item.icon} alt={item.platform} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.platform}</h3>
            <p className="text-gray-700 text-sm text-center">{item.contact.startsWith('http') ? "Visit Profile" : item.contact}</p>
          </a>
        ))}
      </div>
    </div>
  );
}


export default function Contact() {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out to me!</p>
        <p className="mt-4">That right on my stack I have hand-on vue but this portfolio I using react for learning new thing</p>
        <div className="mt-8">
          {showContact()}
        </div>
      </div>
    )
  }
  