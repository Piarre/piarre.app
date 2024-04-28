import Project from "./components/project";
import { motion } from "framer-motion";
import { projectsData } from "./lib/data/projects";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
    delay: 0.5
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (0.05 * index) + 0.3,
    },
  }),
};

const App = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-32 flex justify-center text-6xl font-bold dark:text-white text-gray-900"
      >
        Pierre's showroom
      </motion.h1>
      <div className="mb-28 mt-2 grid justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 23 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl mb-8 font-semibold dark:text-white text-gray-900"
        >
          Projects
        </motion.h2>
        <div className="grid w-full gap-10 justify-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Project key={`project-${index}-${project.title}`} {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
