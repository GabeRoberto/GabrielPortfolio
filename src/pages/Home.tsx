import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import HexGridEffect from '../components/HexGridEffect';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const featuredProjects = [
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

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects?selected=${projectId}`);
  };

  return (
    <div className="relative min-h-screen">
      <HexGridEffect color="#0066FF" size={30} />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-gray-800/50 dark:to-gray-900/50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 dark:text-white relative"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px rgba(0, 102, 255, 0.3)",
                  "0 0 30px rgba(0, 102, 255, 0.5)",
                  "0 0 50px rgba(0, 102, 255, 0.7)",
                  "0 0 30px rgba(0, 102, 255, 0.5)",
                  "0 0 10px rgba(0, 102, 255, 0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              Creative UX/UI Designer
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-primary-500/30 blur-2xl rounded-full"
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Crafting beautiful and intuitive digital experiences that make a lasting impact
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-black dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card group dark:bg-gray-800/90 dark:border-gray-700 backdrop-blur-sm cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-t-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold mb-2 tracking-wide font-mono text-primary-600 dark:text-primary-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.designElements.slice(0, 3).map((element) => (
                      <span
                        key={element}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {element}
                      </span>
                    ))}
                  </div>
                  <div className="text-primary-500 font-medium group-hover:text-primary-600 dark:text-primary-400 dark:group-hover:text-primary-300 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-black dark:text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['UI Design', 'UX Research', 'Prototyping', 'Visual Design'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center dark:bg-gray-700/90 dark:border-gray-600 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{skill}</h3>
                <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 