import Project from "./components/project";
import { motion } from "framer-motion";
import { projectsData } from "./lib/data/projects";
import Section from "./components/section";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
    delay: 0.5,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index + 0.3,
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
        className="mt-20 flex justify-center text-6xl font-bold dark:text-white text-gray-900 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-github h-10 w-10 mr-2 dark:text-white text-gray-900 hover:scale-[1.1] transition-all duration-150 cursor-pointer"
          onClick={() => window.open("https://github.com/Piarre", "_blank")}
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>{" "}
        Piarre's showroom
      </motion.h1>
      <div className="mb-28 mt-2 grid justify-center">
        <Section title="Projects" />
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
