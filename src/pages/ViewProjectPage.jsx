import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Description:
                </h2>
              )}

              <p className="text-sm sm:text-base text-white-100 leading-tight">
                {project?.description}
              </p>
            </section>

            <section className="pt-5">
              {project && (
                <h2 className="text-base sm:text-lg font-semibold">
                  Technologies:
                </h2>
              )}

              <ul className="list-disc list-inside pl-5 text-gray-700">
                {project?.technologies?.split(",").map((tech, index) => (
                  <li key={index} className="capitalize text-white-100">
                    {tech.trim()}
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-5">
              {project && (
                <h2 className="text-base sm:text-lg font-semibold">Stack:</h2>
              )}

              <p className="text-white-100 uppercase">{project?.stack}</p>
            </section>

            <section className="py-5">
              {project && (
                <h2 className="text-base sm:text-lg font-semibold ">
                  Deployed:
                </h2>
              )}
              <p className="text-white-100">{project?.deployed}</p>
            </section>

            {project?.gitRepoLink && (
              <section className="flex items-center space-x-2">
                {project && (
                  <h3 className="text-base sm:text-lg font-semibold">
                    GitHub Repository:
                  </h3>
                )}
                <a
                  href={project.gitRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-white-100"
                >
                  {project.gitRepoLink}
                </a>
              </section>
            )}

            {project?.projectLink && (
              <section className="flex items-center space-x-2">
                {project && (
                  <h3 className="text-base sm:text-lg font-semibold ">
                    Project Link:
                  </h3>
                )}

                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {project.projectLink}
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
