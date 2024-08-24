import SectionHeading from "./SectionHeading";
import InViewAnimation from "./InViewAnimation";

import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

import { useGetAllProjects } from "../hooks/useGetAllProjects";

const Projects = () => {
  const { projects, error } = useGetAllProjects();

  if (error) {
    return (
      <div className="p-4 max-w-4xl mx-auto py-5">
        <div className="text-center text-red-500">
          Error loading project data: {error.message}
        </div>
      </div>
    );
  }

  return (
    <>
      {projects && (
        <div className="py-5 max-w-4xl mx-auto mt-10">
          <SectionHeading text="Recent Projects" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <InViewAnimation delay={index * 0.1} key={project?._id}>
                <div className="w-full max-w-full rounded-lg shadow overflow-hidden">
                  <Link to={project?._id}>
                    <div className="w-full">
                      <img
                        src={project?.projectImg?.url}
                        alt={project?.title}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        width="1200"
                        height="800"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className="sm:px-1 pb-2">
                    <Link to={project?._id}>
                      {/* Title */}
                      <h5
                        className="text-base font-semibold tracking-tight text-gray-900 dark:text-white mt-2 h-12"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                        }}
                      >
                        {project?.title}
                      </h5>

                      {/* Description */}
                      <div className="text-xs mt-1">
                        <p
                          className="text-gray-400"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                          }}
                        >
                          {project?.description}
                        </p>
                      </div>
                    </Link>

                    <div className="mt-2">
                      <Link
                        to={project?.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-500 hover:underline text-xs sm:text-sm"
                      >
                        Check Live Site <TrendingUp size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
