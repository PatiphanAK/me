const educationData = [
  {
      id: 1,
      image: "https://www.hr.kmitl.ac.th/wp-content/uploads/2020/08/cropped-kmitl-logoThai.png",
      degrees: "Bachelor of Science in Information Technology",
      school: "School of Information Technology, King Mongkut's Institute of Technology Ladkrabang",
      year: "2022 - Present",
      details: [
          "Major in Information Technology",
          "Minor in Software Development"
      ]
  }
];

function EducationCard({ image, degrees, school, year, gpa, details }) {
  return (
      <div className="bg-base-100 p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                      src={image || "/api/placeholder/200/200"}
                      alt={`${school} logo`}
                      className="w-32 h-32 object-contain"
                  />
              </div>
              <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary">{degrees}</h3>
                  <p className="text-lg mt-1">{school}</p>
                  <p className="mt-2">{year}</p>    
                  {gpa && <p className="font-medium">GPA {gpa}</p>}
                  {details && details.length > 0 && (
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                          {details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                          ))}
                      </ul>
                  )}
              </div>
          </div>
      </div>
  );
}

export default function Education() {
  return (
      <div className="py-8">
          <h2 className="text-3xl font-bold text-center mb-8">My Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
              {educationData.map((data) => (
                  <EducationCard
                      key={data.id}
                      image={data.image}
                      degrees={data.degrees}
                      school={data.school}
                      year={data.year}
                      gpa={data.gpa}
                      details={data.details}
                  />
              ))}
          </div>
      </div>
  );
}