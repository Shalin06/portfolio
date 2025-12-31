"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

type ProjectCardProps = {
    project: string;
    alternate: boolean;
    details: string;
    imagePath: string;
};

const ProjectCard = (props: ProjectCardProps) => {
    const { project, alternate, details, imagePath } = props;
    const path = `${imagePath.toLowerCase().replaceAll(" ", "")}`;
    return (
        <>
            <Card className={`${alternate ? "bg-transparent" : "bg-[#1A0B2E]"} border-none w-full h-3/4 relative items-end flex justify-end`}>
                {alternate && (
                    <div className="h-full flex flex-col justify-center gap-2">
                        <CardAction className="w-full items-start flex justify-start">
                            <CardTitle className="text-white text-2xl pb-4">{project}</CardTitle>
                        </CardAction>
                        <Card onClick={() => { }} className="relative border-none
                                        rounded-[14px]
                                        backdrop-blur-xl
                                        bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(105,59,147,0.2)_0%,rgba(110,191,244,0.045)_77.08%,rgba(70,144,213,0)_100%)]
                                        bg-transparent
                                        bg-blend-overlay w-[115%] h-5/6 -right-5 shadow-lg z-10 p-4">
                            <CardContent className="text-white text-sm flex flex-col gap-3 p-1">
                                <p className="line-clamp-3 overflow-hidden">
                                    {details}
                                </p>
                            </CardContent>
                        </Card>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="self-start bg-transparent text-white hover:bg-white/30 backdrop-blur-sm"
                                >
                                    Know More
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-137.5 bg-[#1A0B2E] text-white border-none">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold">{project}</DialogTitle>
                                </DialogHeader>
                                <p className="text-base mt-4 leading-relaxed">{details}</p>
                            </DialogContent>
                        </Dialog>
                    </div>
                )}
                {!alternate && (
                    <Avatar className="flex w-11/12 h-10/12 rounded-lg bottom-1 left-1 overflow-hidden absolute">
                        <AvatarImage src={imagePath} alt={project} className="w-full h-full object-cover aspect-video" />
                    </Avatar>
                )}
            </Card>

            <Card className={`${!alternate ? "bg-transparent" : "bg-[#1A0B2E]"} border-none w-full h-3/4 items-end justify-end relative`}>
                {!alternate && (
                    <div className="h-full flex flex-col justify-center gap-2">
                        <CardAction className="w-full items-end flex justify-end">
                            <CardTitle className="text-white text-2xl pb-4">{project}</CardTitle>
                        </CardAction>
                        <Card
                            className="
    relative border-none rounded-[14px] backdrop-blur-xl
    bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(105,59,147,0.2)_0%,rgba(110,191,244,0.045)_77.08%,rgba(70,144,213,0)_100%)]
    bg-transparent bg-blend-overlay w-[115%] h-5/6 -left-20 shadow-lg z-10 p-4 flex flex-col justify-between
  "
                        >
                            <CardContent className="text-white text-sm flex flex-col gap-3 p-0">
                                <p className="line-clamp-3 overflow-hidden">
                                    {details}
                                </p>
                            </CardContent>
                        </Card>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="self-end bg-transparent text-white hover:bg-white/30 backdrop-blur-sm"
                                >
                                    Know More
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-137.5 bg-[#1A0B2E] text-white border-none">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold">{project}</DialogTitle>
                                </DialogHeader>
                                <p className="text-base mt-4 leading-relaxed">{details}</p>
                            </DialogContent>
                        </Dialog>
                    </div>
                )}
                {alternate && (
                    <Avatar className="flex w-11/12 h-10/12 rounded-lg bottom-1 right-1 overflow-hidden absolute">
                        <AvatarImage src={imagePath} alt={project} className="w-full h-full object-cover aspect-video" />
                    </Avatar>
                )}

            </Card>
        </>
    )
}
function Projects() {
    const projectData = [
        {
            project: "Personal Portfolio Website",
            details: "Developed a personal portfolio website using Next.js and Tailwind CSS to showcase my projects, skills, and work experience. Implemented responsive design principles to ensure optimal viewing across devices.",
            imagePath: "/images/shalin_jain.png",
            alternate: true,
        },
        {
            project: "E-commerce Platform",
            details: "Built a full-stack e-commerce platform with React for the frontend and Node.js for the backend. Integrated payment gateways and implemented user authentication and authorization.",
            imagePath: "/images/shalin_jain.png",
            alternate: false,
        },
    ];
    return (
        <div id="projects-section" className="rounded-md items-center flex justify-center pb-8">
            <Card className="w-1/2 grid-cols-2 md:grid-cols-2 bg-transparent border-none shadow-none">
                <CardTitle className="text-white text-3xl mb-4">
                    Projects
                </CardTitle>
                <CardContent className="w-full grid grid-cols-2 relative gap-4 p-3 rounded-x backdrop-blur-xl
                    items-center justify-center
                    max-h-none">

                    {projectData.map((proj, index) => (
                        <ProjectCard
                            key={index}
                            project={proj.project}
                            details={proj.details}
                            imagePath={proj.imagePath}
                            alternate={proj.alternate}
                        />
                    ))}
                </CardContent>

            </Card>
        </div>
    )
}
export default Projects;