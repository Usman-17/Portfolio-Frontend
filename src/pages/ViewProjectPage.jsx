import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";

const ViewProjectPage = () => {
  const { id } = useParams();

  const {
    data: project,
    error,
    isError,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/v1/project/${id}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch project: ${response.statusText}`);
        }

        const data = await response.json();

        return data;
      } catch (error) {
        throw new Error(`Failed to fetch project: ${error.message}`);
      }
    },
    retry: false,
  });

  if (isError) {
    return (
      <div className="text-red-600 p-4">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-[100vh] bg-black-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-5xl w-full m-auto px-3">
        <div className="py-3 sm:py-5">
          <h1 className="text-lg lg:text-3xl font-bold text-white text leading-tight">
            {project?.title}
          </h1>

          <img
            src={project?.projectImg?.url}
            alt={project?.title}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="lazy"
            decoding="async"
          />

          <section className="mt-5">
            <section>
              {project && (
                <h2 className="text-xl font-bold text-white">Description</h2>
              )}
              <div
                className="mt-1 text-white-100 leading-tight "
                dangerouslySetInnerHTML={{ __html: project?.description || "" }}
              />
            </section>

            <section className="mb-4 sm:mb-5">
              {project && (
                <h2 className="text-base sm:text-lg font-semibold">
                  Technologies
                </h2>
              )}

              <ul className="mt-2 list-disc list-inside pl-3 text-gray-700">
                {project?.technologies?.split(",").map((tech, index) => (
                  <li key={index} className="capitalize text-white-100">
                    {tech.trim()}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-0 sm:mb-1 flex items-center gap-1">
              {project && <h2 className="text-lg font-semibold">Stack</h2>}

              <p className="text-base sm:text-lg font-normal text-white-100 uppercase">
                {project?.stack}
              </p>
            </section>

            <section className="mb-2 sm:mb-3 flex items-center gap-1">
              {project && <h2 className="text-lg font-semibold">Deployed</h2>}
              <p className="text-base sm:text-lg font-normal text-white-100">
                {project?.deployed}
              </p>
            </section>

            {project?.projectLink && (
              <section className="mb-1 mt-5 sm:mt-3 flex gap-3 items-center">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800 hover:underline"
                >
                  {project && (
                    <h3 className="text-base font-semibold flex items-center gap-1">
                      View Project <ExternalLink size={16} />
                    </h3>
                  )}
                </a>
              </section>
            )}

            {project?.gitRepoLink && (
              <section className="mb-2 flex gap-3 items-center">
                <a
                  href={project.gitRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800 hover:underline"
                >
                  {project && (
                    <h3 className="text-base font-semibold flex items-center gap-1">
                      View GitHub Repo <ExternalLink size={16} />
                    </h3>
                  )}
                </a>
              </section>
            )}
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewProjectPage;
