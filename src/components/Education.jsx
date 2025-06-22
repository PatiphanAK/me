import { useState } from "react";
import { GraduationCap, Calendar, Award, ChevronRight } from "lucide-react";

const educationData = [
  {
      id: 1,
      image: "https://cmms.kmitl.ac.th/uploads/uploads/9b5d8ffe-78d9-463b-9286-f66f27e0d91b-1686793377632.png",
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
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div 
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          
          <div className="relative p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Logo section with enhanced styling */}
                  <div className="relative flex-shrink-0 group/logo">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg dark:shadow-slate-900 border border-slate-200/50 dark:border-slate-600 group-hover:shadow-xl transition-all duration-500">
                            <img
                              src={image || "/api/placeholder/200/200"}
                              alt={`${school} logo`}
                              className="w-24 h-24 lg:w-32 lg:h-32 object-contain transform group-hover/logo:scale-105 transition-transform duration-500"
                            />
                        </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex-grow space-y-4">
                      {/* Degree title with gradient */}
                      <div className="space-y-2">
                          <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                                  <GraduationCap className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
                                  {degrees}
                              </h3>
                          </div>
                      </div>
                      
                      {/* School name with subtle animation */}
                      <div className="flex items-start gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                              <Award className="w-4 h-4 text-slate-600" />
                          </div>
                          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                              {school}
                          </p>
                      </div>
                      
                      {/* Year with calendar icon */}
                      <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-100 rounded-lg">
                              <Calendar className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-slate-600 dark:text-slate-300 dark:bg-slate-800 font-medium px-4 py-2 bg-slate-100 rounded-full text-sm">
                              {year}
                          </span>
                      </div>
                      
                      {/* GPA section if available */}
                      {gpa && (
                          <div className="flex items-center gap-3">
                              <div className="p-2 bg-amber-100 rounded-lg">
                                  <Award className="w-4 h-4 text-amber-600" />
                              </div>
                              <span className="text-amber-700 dark:text-amber-400 font-bold text-lg">
                                  GPA {gpa}
                              </span>
                          </div>
                      )}
                      
                      {/* Details with enhanced styling */}
                      {details && details.length > 0 && (
                          <div className="space-y-3 pt-4">
                              <h4 className="text-slate-700 font-semibold flex items-center gap-2">
                                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                  Specializations
                              </h4>
                              <div className="grid gap-2">
                                  {details.map((detail, index) => (
                                      <div 
                                          key={index}
                                          className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:border-indigo-200 hover:bg-white/80 transition-all duration-300 group/detail"
                                          style={{ 
                                              animationDelay: `${index * 100}ms`,
                                              opacity: isHovered ? 1 : 0.8,
                                              transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                                              transition: 'all 0.3s ease'
                                          }}
                                      >
                                          <ChevronRight className="w-4 h-4 text-indigo-500 group-hover/detail:text-purple-500 transition-colors duration-300" />
                                          <span className="text-slate-700 font-medium">
                                              {detail}
                                          </span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default function Education() {
  return (
      <div className="py-16 px-4 min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          {/* Header section with modern styling */}
          <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                      My Education
                  </h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Pursuing excellence in technology and innovation through dedicated academic journey
              </p>
          </div>
          
          {/* Education cards */}
          <div className="max-w-5xl mx-auto space-y-8">
              {educationData.map((data, index) => (
                  <div
                      key={data.id}
                      style={{
                          animationDelay: `${index * 200}ms`,
                          opacity: 0,
                          animation: 'fadeInUp 0.8s ease forwards'
                      }}
                  >
                      <EducationCard
                          image={data.image}
                          degrees={data.degrees}
                          school={data.school}
                          year={data.year}
                          gpa={data.gpa}
                          details={data.details}
                      />
                  </div>
              ))}
          </div>
          
          {/* Decorative elements */}
          <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <style>{`
              @keyframes fadeInUp {
                  from {
                      opacity: 0;
                      transform: translateY(30px);
                  }
                  to {
                      opacity: 1;
                      transform: translateY(0);
                  }
              }
          `}</style>
      </div>
  );
}