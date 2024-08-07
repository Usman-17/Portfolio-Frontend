import { useGetAllSkills } from "../hooks/useGetAllSkills";
import InViewAnimation from "./InViewAnimation";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { skills, error } = useGetAllSkills();

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
    <div className="sm:p-2 max-w-4xl mx-auto mt-24">
      {skills && <SectionHeading text="Skills" />}

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-4">
        {skills?.map((skill, index) => (
          <InViewAnimation delay={index * 0.02} key={skill?._id}>
            <div className="flex flex-col items-center justify-center px-2 py-2 sm:py-4 border rounded-md shadow-sm">
              <img
                src={skill?.svg?.url}
                alt={skill?.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <h3 className="text-[10px] sm:text-sm font-semibold">
                {skill?.name}
              </h3>
            </div>
          </InViewAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
