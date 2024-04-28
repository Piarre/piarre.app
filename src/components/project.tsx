import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { replaceWithEmoji } from "../lib/utils/gitmojis";
import { TProject } from "../types/project";

const Project = ({ title, description, tags, whatFor, link, image: imageUrl }: TProject) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div ref={ref} className="group">
      {/* sm:group-even:pl-8 */}
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer bg-gray-100 min-w-[22rem] lg:w-[34rem] sm:w-[42rem] xl:w-[48rem] max-w-[46rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 00 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 hover:scale-105 hover:-translate-y-2"
      >
        <div
          className={clsx(
            // sm:group-even:ml-[18rem]
            "pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full w-full"
            // imageUrl ? "sm:max-w-[60%]" : "sm:max-w-[100%]"
          )}
        >
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-2 text-lg leading-relaxed text-gray-800 dark:text-white/70 max-w-[26rem] break-words">
            {replaceWithEmoji(description)}
          </p>

          <div className="flex flex-wrap justify-left max-w-[24rem] break-words gap-2 sm:mt-auto group/text">
            {whatFor && (
              <p className="text-md leading-relaxed text-gray-600 dark:text-white/60">{replaceWithEmoji(whatFor)}</p>
            )}

            <motion.ul
              animate={{ opacity: isHovered && link ? 0 : 1 }}
              transition={{ duration: 0.1 }}
              initial={{ opacity: 1 }}
              className={clsx("flex flex-wrap justify-left gap-3 mt-4 sm:mt-auto group/text transition-opacity")}
            >
              {tags.map((tag: any, index: any) => (
                <li
                  className={clsx(
                    "bg-black/[0.4] font-semibold group-hover/text:hover:font-extrabold px-3 py-1 text-[0.85rem] uppercase tracking-wider cursor-pointer hover:scale-110 transition-all duration-150 rounded-full",
                    `text-lang-${tag.toLowerCase()} dark:text-lang-${tag.toLowerCase()}/70`
                  )}
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={description}
            width={500}
            height={300}
            className="absolute hidden transition-all sm:block top-12 w-[28.25rem] rounded-lg
                        rotate-1
                        group-hover:scale-[1.2]
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-2
                        group-hover:shadow-violet-900
                        
                        sm:-right-72
                        lg:-right-[20rem]
                        lg:group-hover:-right-40

                        xl:-right-40
                        group-hover:-right-32

                        shadow-2xl"
          />
        )}
      </section>
    </motion.div>
  );
};

export default Project;

// const LinkEl = ({ link }: { link: TLink }) => {
//   return (
//     <>
//       <a
//         href={link.hash}
//         target="_blank"
//         className="group/btn bg-gray-900 text-white px-6 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
//       >
//         {link.name}
//         {/* <FiExternalLink className="opacity-80 group-hover/btn:translate-x-1 transition" /> */}
//       </a>
//     </>
//   );
// };
