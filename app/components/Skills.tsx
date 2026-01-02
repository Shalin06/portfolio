import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardTitle } from "./ui/card";

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
        gap-0 py-0
      "
    >
      <Avatar className="w-16 h-16 relative z-10 rounded-lg overflow-hidden">
        <AvatarImage src={path} alt={skill} className="w-full h-full object-cover" />
      </Avatar>
      <label className="w-full text-center text-white text-md whitespace-normal wrap-break-word leading-tight mt-1">{skill}</label>
    </Card>
  );
};

function Skills() {
  return (
    <div id="skills-section" className="flex items-center justify-center w-full">
      <Card className="bg-transparent border-none shadow-none flex flex-col gap-6 w-1/2">
        <CardTitle className="text-white text-3xl mb-4">
          Skills
        </CardTitle>

        <CardContent
          className="
                        grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4
                        p-3 rounded-xl
                        bg-[#2C1250]/60 backdrop-blur-xl
                        border border-[#693B93]/30
                        max-h-77
                        overflow-y-auto
                        items-center justify-center
                        shadow-[inset_1px_1px_6px_rgba(255,255,255,0.08),inset_-2px_-2px_8px_rgba(0,0,0,0.4)]"
        >
          <SquareSkillCard skill="Java" />
          <SquareSkillCard skill="C++" />
          <SquareSkillCard skill="TypeScript" />
          <SquareSkillCard skill="React" />
          <SquareSkillCard skill="Next.js" />
          <SquareSkillCard skill="Golang" />
          <SquareSkillCard skill="SQL" />
          <SquareSkillCard skill="GraphQL" />
          <SquareSkillCard skill="REST API" />
          <SquareSkillCard skill="Gen AI Intergration" />
          <SquareSkillCard skill="HTML" />
          <SquareSkillCard skill="Tailwind CSS" />
          <SquareSkillCard skill="Jenkins" />
          <SquareSkillCard skill="Docker" />
          <SquareSkillCard skill="AWS" />
          <SquareSkillCard skill="Git" />
          <SquareSkillCard skill="Firebase" />
          <SquareSkillCard skill="PyTorch" />
          <SquareSkillCard skill="gRPC" />
          <SquareSkillCard skill="Jira" />

        </CardContent>
      </Card>
    </div>
  );
}
export default Skills;
