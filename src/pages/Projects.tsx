import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const selectedId = searchParams.get('selected');
    if (selectedId) {
      setSelectedProject(parseInt(selectedId));
    }
  }, [searchParams]);

  const projects = [
    {
      id: 1,
      title: 'Disoriented Carpet Company',
      description: 'A carpet installation website for a local business.',
      image: '/projects/disoriented-logo.png',
      designElements: ['User Research', 'Wireframing', 'UI Design', 'Prototyping'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'AI chatbot'
      ],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Betsy',
      description: 'A betting with friends app.',
      image: '/projects/betsy-logo.png',
      designElements: ['User Research', 'Wireframing', 'UI Design', 'Prototyping'],
      features: [
        'Real-time task updates',
        'Team collaboration features',
        'Task categorization and prioritization',
        'Progress tracking and analytics',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://taskmanager-demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data.',
      image: '/projects/weather.jpg',
      designElements: ['User Research', 'Wireframing', 'UI Design', 'Prototyping'],
      features: [
        'Current weather conditions',
        '5-day weather forecast',
        'Location-based weather data',
        'Weather alerts and notifications',
        'Interactive weather maps'
      ],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://weather-dashboard-demo.com'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 relative z-10"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center mb-12">
          {/* Decorative background elements */}
          <div className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-20 bg-black/10 dark:bg-white/10 blur-2xl rounded-full pointer-events-none"></div>
          <div className="absolute -inset-x-16 top-1/2 -translate-y-1/2 h-32 bg-primary-500/5 dark:bg-primary-400/5 blur-3xl rounded-full pointer-events-none"></div>
          
          {/* Main heading with creative layout and floating animation */}
          <motion.h1
            animate={{ 
              y: [0, -8, 0, 8, 0],
              rotate: [0, 0.5, 0, -0.5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="relative z-10 text-center font-extrabold font-['Helvetica']"
            style={{ 
              fontSize: 'clamp(2rem, 6vw, 3.5rem)', 
              lineHeight: 1.6, 
              letterSpacing: '-0.04em',
              filter: 'drop-shadow(0 0 32px rgba(0,0,0,0.2))',
              padding: '1em 0'
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.1)",
                  "0 0 20px rgba(255,255,255,0.2)",
                  "0 0 30px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.2)",
                  "0 0 10px rgba(255,255,255,0.1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="block tracking-tight bg-gradient-to-b from-black via-black/95 to-black dark:from-white dark:via-white/95 dark:to-white bg-clip-text text-transparent"
            >
              Projects
            </motion.span>
          </motion.h1>
          
          {/* Animated underline accent */}
          <motion.div 
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent dark:via-white"
            animate={{
              width: ['24px', '96px', '24px'],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold mb-2 tracking-wide font-mono text-primary-600 dark:text-primary-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.designElements.map((element) => (
                    <span
                      key={element}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {element}
                    </span>
                  ))}
                </div>

                <div className="text-primary-600 dark:text-primary-400 text-center font-medium">
                  Click for more →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject !== null && (
                <div className="p-6">
                  <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={projects[selectedProject - 1].image}
                      alt={projects[selectedProject - 1].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {projects[selectedProject - 1].title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {projects[selectedProject - 1].description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Features</h3>
                    <ul className="space-y-2">
                      {projects[selectedProject - 1].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg
                            className="w-5 h-5 text-primary-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <a
                      href={projects[selectedProject - 1].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Project Overview
                    </a>

                    {selectedProject === 2 && (
                      <a
                        href="https://www.figma.com/design/M0rwskGKGwM2T0liDqG46M/Betsy?node-id=0-1&t=PMri1FPWi9BRBy1t-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-3 text-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle cx="7" cy="5" r="4" fill="#F24E1E"/>
                          <circle cx="17" cy="5" r="4" fill="#FF7262"/>
                          <circle cx="7" cy="12" r="4" fill="#A259FF"/>
                          <circle cx="17" cy="12" r="4" fill="#1ABCFE"/>
                          <circle cx="7" cy="19" r="4" fill="#0ACF83"/>
                        </svg>
                        View in Figma
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects; 