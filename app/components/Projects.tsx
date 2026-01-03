"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { scrollToSection } from "./Navigation";
import projectData from "../data/projects.json"
type ProjectCardProps = {
    project: Project;
    alternate: boolean;
    index: number;
};

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    tectStack: string[];
    detailedDescriptionInPoints: string[];
}

const ProjectDetailsDialog = (project: Project) => {
    return (
        <DialogContent className="sm:max-w-2xl bg-[#1A0B2E] text-white border-none max-h-[80vh] overflow-y-auto mx-4">
            <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl sm:text-3xl font-bold">{project.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
                <div>
                    <p className="text-sm sm:text-base leading-relaxed">{project.description}</p>
                </div>

                {project.tectStack.length > 0 && (
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tectStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 sm:px-3 py-1 bg-purple-600/30 rounded-full text-xs sm:text-sm border border-purple-500/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {project.detailedDescriptionInPoints.length > 0 && (
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2">Key Features</h3>
                        <ul className="space-y-2">
                            {project.detailedDescriptionInPoints.map((point, idx) => (
                                <li key={idx} className="flex gap-3 text-xs sm:text-sm">
                                    <span className="text-purple-400 shrink-0">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700">
                                <IconBrandGithub size={18} />
                                GitHub
                            </Button>
                        </Link>
                    )}
                    {project.projectUrl && (
                        <Link href={project.projectUrl} target="_blank" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700">
                                <IconWorld size={18} />
                                Live Project
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </DialogContent>
    );
}

const ProjectCard = (props: ProjectCardProps) => {
    const { project, alternate, index } = props
    return (
        <>
            {/* Desktop Layout (md and above) */}
            <div className="hidden md:contents">
                <Card id={`project${index}`} className={`${alternate ? "bg-transparent" : "bg-[#1A0B2E]"} border-none w-full h-3/4 relative flex`}>
                    {alternate && (
                        <div className="h-full flex flex-col justify-center">
                            <CardAction className="w-full items-start flex justify-start">
                                <CardTitle className="text-white text-xl lg:text-2xl pb-4">{project.title}</CardTitle>
                            </CardAction>
                            <Card onClick={() => { }} className="relative border-none
                                            rounded-[14px]
                                            backdrop-blur-xl
                                            bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(105,59,147,0.2)_0%,rgba(110,191,244,0.045)_77.08%,rgba(70,144,213,0)_100%)]
                                            bg-transparent
                                            bg-blend-overlay w-[115%] h-5/6 -right-5 shadow-lg z-10 p-3 lg:p-4">
                                <CardContent className="text-white text-xs lg:text-sm flex flex-col gap-3 p-1 items-center justify-center">
                                    <p className="line-clamp-2 overflow-hidden">
                                        {project.description}
                                    </p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="self-end bg-transparent text-white hover:bg-white/30"
                                            >
                                                Know More
                                            </Button>
                                        </DialogTrigger>

                                        <ProjectDetailsDialog title={project.title}
                                            description={project.description}
                                            imageUrl={project.imageUrl}
                                            projectUrl={project.projectUrl}
                                            githubUrl={project.githubUrl}
                                            tectStack={project.tectStack}
                                            detailedDescriptionInPoints={project.detailedDescriptionInPoints} />
                                    </Dialog>
                                </CardContent>

                            </Card>
                            <CardFooter className="flex justify-start gap-2">
                                {project.githubUrl && (
                                    <Link href={project.githubUrl}>
                                        <IconBrandGithub className="text-white hover:text-gray-400 cursor-pointer" size={24} />
                                    </Link>
                                )}
                                {project.projectUrl && (
                                    <Link href={project.projectUrl}>
                                        <IconWorld className="text-white hover:text-gray-400 cursor-pointer" size={24} />
                                    </Link>
                                )}
                            </CardFooter>
                        </div>
                    )}
                    {!alternate && (
                        <Avatar className="flex w-11/12 h-10/12 rounded-lg bottom-1 left-1 overflow-hidden absolute">
                            <AvatarImage src={project.imageUrl} alt={project.githubUrl} className="w-full h-full object-fill aspect-video" />
                        </Avatar>
                    )}
                </Card >

                <Card className={`${!alternate ? "bg-transparent" : "bg-[#1A0B2E]"} border-none w-full h-3/4 items-end justify-end relative`}>
                    {!alternate && (
                        <div className="h-full flex flex-col justify-center">
                            <CardAction className="w-full items-end flex justify-end">
                                <CardTitle className="text-white text-xl lg:text-2xl pb-4">{project.title}</CardTitle>
                            </CardAction>


                            <Card
                                className="
                                    relative border-none rounded-[14px] backdrop-blur-xl
                                    bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(105,59,147,0.2)_0%,rgba(110,191,244,0.045)_77.08%,rgba(70,144,213,0)_100%)]
                                    bg-transparent bg-blend-overlay w-[115%] h-5/6 -left-20 shadow-lg z-10 p-3 lg:p-4 flex flex-col justify-between
                                    ">
                                <CardContent className="text-white text-xs lg:text-sm flex flex-col gap-3 p-0">
                                    <p className="line-clamp-2 overflow-hidden">
                                        {project.description}
                                    </p>
                                    <Dialog>
                                        <DialogTrigger asChild><Button
                                            variant="secondary"
                                            size="sm"
                                            className="self-end bg-transparent text-white hover:bg-white/30"
                                        >
                                            Know More
                                        </Button>
                                        </DialogTrigger>

                                        <ProjectDetailsDialog title={project.title}
                                            description={project.description}
                                            imageUrl={project.imageUrl}
                                            projectUrl={project.projectUrl}
                                            githubUrl={project.githubUrl}
                                            tectStack={project.tectStack}
                                            detailedDescriptionInPoints={project.detailedDescriptionInPoints} />
                                    </Dialog>
                                </CardContent>
                            </Card>
                            <CardFooter className="flex justify-end gap-2">
                                {project.githubUrl && (
                                    <Link href={project.githubUrl}>
                                        <IconBrandGithub className="text-white hover:text-gray-400 cursor-pointer" size={24} />
                                    </Link>
                                )}
                                {project.projectUrl && (
                                    <Link href={project.projectUrl}>
                                        <IconWorld className="text-white hover:text-gray-400 cursor-pointer" size={24} />
                                    </Link>
                                )}
                            </CardFooter>
                        </div>

                    )}
                    {alternate && (
                        <Avatar className="flex w-11/12 h-10/12 rounded-lg bottom-1 right-1 overflow-hidden absolute">
                            <AvatarImage src={project.imageUrl} className="w-full h-full object-fill aspect-video" />
                        </Avatar>
                    )}
                </Card>
            </div>

            {/* Mobile Layout (below md) */}
            <div className="md:hidden col-span-full">
                
                <Card className="bg-[#1A0B2E] border-none w-full overflow-hidden">
                    
                    <CardHeader className="flex flex-col justify-between">
                         <Avatar className="w-full h-36 rounded-none flex">
                                <AvatarImage src={project.imageUrl} alt={project.title} className="w-full h-full object-fill" />
                            </Avatar>
                        <CardTitle className="text-white text-xl flex">{project.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-white text-sm space-y-3">
                        <p className="line-clamp-3">
                            {project.description}
                        </p>
                        
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full bg-purple-600/30 text-white hover:bg-purple-600/50 border border-purple-500/50"
                                >
                                    Know More
                                </Button>
                            </DialogTrigger>

                            <ProjectDetailsDialog 
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                projectUrl={project.projectUrl}
                                githubUrl={project.githubUrl}
                                tectStack={project.tectStack}
                                detailedDescriptionInPoints={project.detailedDescriptionInPoints} 
                            />
                        </Dialog>
                    </CardContent>
                    
                    <CardFooter className="flex justify-center gap-4">
                        {project.githubUrl && (
                            <Link href={project.githubUrl}>
                                <IconBrandGithub className="text-white hover:text-gray-400 cursor-pointer" size={24} />
                            </Link>
                        )}
                        {project.projectUrl && (
                            <Link href={project.projectUrl}>
                                <IconWorld className="text-white hover:text-gray-400 cursor-pointer" size={24} />
                            </Link>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

function Projects() {
    const data: Project[] = projectData as Project[]

    const [visibleCount, setVisibleCount] = useState(3);

    return (
        <div id="projects-section" className="rounded-md items-center flex justify-center pb-8 px-4">
            <Card className="w-full md:w-1/2 lg:w-1/2 xl:1/2 bg-transparent border-none shadow-none">
                <CardTitle className="text-white text-2xl sm:text-3xl mb-4 px-3">
                    Projects
                </CardTitle>
                <CardContent className="w-full grid grid-cols-1 md:grid-cols-2 relative gap-4 sm:gap-6 p-3 rounded-x backdrop-blur-xl
                    items-center justify-center
                    max-h-none">

                    {data.slice(0, visibleCount).map((proj, index) => (
                        <ProjectCard
                            key={index}
                            project={proj}
                            alternate={index % 2 === 0}
                            index={index}
                        />
                    ))}
                </CardContent>
                <CardFooter className="items-center justify-center flex">
                    {visibleCount < data.length && (
                        <div className="flex items-center justify-center text-white">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setVisibleCount(prev => prev + 3)
                                }}
                                className="px-4 py-2 bg-purple-600/30 rounded-full text-sm border border-purple-500/50"
                            >
                                Show more
                            </Button>
                        </div>
                    )}
                    {visibleCount >= data.length && data.length > 3 && (
                        <div className="flex items-center justify-center text-white">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setVisibleCount(3)
                                    scrollToSection("#projects-section")
                                }}
                                className="px-4 py-2 bg-purple-600/30 rounded-full text-sm border border-purple-500/50"
                            >
                                Show Less
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default Projects;