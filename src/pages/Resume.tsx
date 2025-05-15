import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      title: 'IT Intern',
      company: 'SSP Fittings Corp.',
      period: '2024 - Present',
      description: 'Assisted with database management and maintenance.',
      achievements: [
        'Coordinated with team members for data entry and maintenance.',
        'Prepared and reviewed excel sheets of organized data to be imported into the database.',
        'Used various queries to capture specific data for importing, updating, and exporting data.'
      ]
    },
    {
      title: 'Photographer',
      company: 'Freelance',
      period: '2018 - 2022',
      description: 'Freelanced for various clients around the Cleveland area.',
      achievements: [
        'Photographed and edited over 2,500 pictures for various clients such as Kronis Academy and Soccer Evolution Analytics.',
        'Collaborated with clients to capture the best shots for their needs.',
        'Developed a platform for my business to market my work, including a portfolio of work from the past 4 years.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Business Administration in Computer Information Systems',
      school: 'Kent State University',
      period: '2021 - 2025',
      description: 'Specialized in Software Engineering and UI/UX Design.'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'SQL'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Jira', 'Figma'] }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center mb-12">
          {/* Decorative background elements */}
          <div className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-20 bg-black/10 dark:bg-white/10 blur-2xl rounded-full pointer-events-none"></div>
          <div className="absolute -inset-x-16 top-1/2 -translate-y-1/2 h-32 bg-primary-500/5 dark:bg-primary-400/5 blur-3xl rounded-full pointer-events-none"></div>
          
          {/* Main heading with creative layout and floating animation */}
          <div className="w-full flex items-center justify-between">
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
              className="relative z-10 text-center font-extrabold font-['Helvetica'] flex-1 resume-heading"
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
                className="inline-flex items-center tracking-tight bg-gradient-to-b from-black via-black/95 to-black dark:from-white dark:via-white/95 dark:to-white bg-clip-text text-transparent"
              >
                Resume
                <a
                  href="public/resume/GabrielRoberto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors resume-download-link"
                  title="Download PDF"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </motion.span>
            </motion.h1>
          </div>
          
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

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-primary-600 dark:text-primary-400">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-primary-600 dark:text-primary-400">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{edu.degree}</h3>
                    <p className="text-primary-600 dark:text-primary-400">{edu.school}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">{edu.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-primary-600 dark:text-primary-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume; 