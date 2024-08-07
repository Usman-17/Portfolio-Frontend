import signature from "../assets/sig.png";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGetUser } from "../hooks/useGetUser";

const About = () => {
  const { user, error } = useGetUser();

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
  });

  if (error) {
    return (
      <div className="p-4 max-w-4xl mx-auto py-10">
        <SectionHeading text="About" />
        <div className="text-center text-red-500">
          Error loading user data: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="sm:p-2 max-w-4xl mx-auto py-10">
      {user && <SectionHeading text="About Me" />}

      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between sm:gap-6">
        <div className="ml-2">
          {/* About */}
          <motion.p
            ref={aboutRef}
            className="text-sm md:text-xl lg:text-lg font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {user?.aboutMe}
          </motion.p>

          {/* Signature */}
          <div className="flex justify-end">
            <motion.img
              src={signature}
              alt="Signature"
              className="w-28 h-full opacity-15"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Image */}
        <motion.div
          className="w-60 h-60 md:w-96 md:h-96 lg:w-60 lg:h-60 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.2 }}
        >
          <img
            src={user?.profileImg?.url}
            alt="Profile Image"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
