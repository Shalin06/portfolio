import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardTitle } from "./ui/card";
import skillsData from "../data/skills.json"
const SquareSkillCard = ({ skill }: { skill: string }) => {
  const path = `/images/${skill.toLowerCase().replaceAll(".", "").replaceAll(" ", "")}.png`;

  return (
    <Card
      className="
        bg-[#120C1C] text-white rounded-xl aspect-square flex flex-col items-center justify-center
        font-medium border border-[#4F228D]/40 
        hover:border-[#A970FF] hover:shadow-[0px_0px_12px_#A970FF66] 
        transition-all duration-300 cursor-pointer
        hover:-translate-y-1 hover:scale-105
        shadow-[inset_2px_2px_6px_#ffffff20,inset_-2px_-2px_6px_#00000060]
        gap-0 py-0 p-2 md:p-3
      "
    >
      <Avatar className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 relative z-10 rounded-lg overflow-hidden">
        <AvatarImage src={path} alt={skill} className="w-full h-full object-cover" />
      </Avatar>
      <label className="w-full text-center text-white text-xs md:text-sm lg:text-md whitespace-normal wrap-break-word leading-tight mt-1">{skill}</label>
    </Card>
  );
};

function Skills() {
  return (
    <div id="skills-section" className="flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <Card className="bg-transparent border-none shadow-none flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
        <CardTitle className="text-white text-2xl sm:text-3xl mb-2 sm:mb-4">
          Skills
        </CardTitle>

        <CardContent
          className="
                        grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4
                        p-2 sm:p-3 rounded-xl
                        max-h-77
                        overflow-y-auto
                        items-center justify-center
                        shadow-[inset_1px_1px_6px_rgba(255,255,255,0.08),inset_-2px_-2px_8px_rgba(0,0,0,0.4)]"
        >
          {skillsData.map((skill, index) => (
            <SquareSkillCard skill={skill} key={index}/>
          ))}

        </CardContent>
      </Card>
    </div>
  );
}
export default Skills;
