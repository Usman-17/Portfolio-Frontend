import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import MagicButton from "./ui/MagicButton";
import ShootingStars from "./ui/ShootingStars";
import { TextGenerateEffect } from "./ui/TextGenrateEffect";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 my-10">
      <div>
        <ShootingStars />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="max-w-[65vw] md:max-w-2xl lg:max-w-[60vw] flex md:flex-col items-center"
      >
        <HoverBorderGradient containerClassName="rounded-full  text-xs sm:text-sm">
          <span>✨ Take a Look at My Portfolio</span>
        </HoverBorderGradient>
      </motion.div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] sm:max-w-4xl lg:max-w-[60vw] flex flex-col items-center">
          {/* Title */}
          <TextGenerateEffect
            words="Hi, I'm Muhammad Usman"
            className="text-center text-3xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-wide"
          />

          {/* About Me */}
          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center text-xs md:text-base max-w-[90vw] sm:max-w-[60vw] md:max-w-[80vw] lg:max-w-[48vw]"
          >
            MERN Stack Developer from Pakistan specializing in creating dynamic
            and responsive web applications. Delivering high-quality code and
            innovative solutions. Available for freelance projects.
          </motion.p>

          <div className="mt-5 sm:mt-0">
            <a href="">
              <MagicButton
                title="Show my work"
                icon={<TrendingUp size={18} />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
