"use client";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import {
    IconCalendarFilled,
    IconLocation,
    IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";

type Experience = {
    company: string;
    location: string;
    position: string;
    start: string;
    end?: string;
    logo: string;
    description: string;
    details: string;
    skills: string[];
    projects: { name: string; link?: string; details?: string }[];
};

const ExperienceAccordianCard = ({
    experience,
}: {
    experience: Experience;
}) => {
    const accordianTrigger = (
        <AccordionTrigger
            onClick={(e) => {
                const target = e.currentTarget;
                setTimeout(() => {
                    const y =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        80; // offset for navbar
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 250); // wait for accordion to open
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row md:items-center w-full text-white">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10 relative z-10 rounded-full overflow-hidden">
                        <AvatarImage
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-cover"
                        />
                    </Avatar>

                    <div>
                        <h3 className="text-lg flex font-semibold">
                            {experience.position}
                        </h3>
                        <p className="text-sm flex text-white-100 gap-2">
                            {experience.company}
                        </p>
                    </div>
                </div>
                <div className="mt-2 md:mt-0 text-white-100 flex flex-col items-end">
                    <p className="text-sm flex gap-2">
                        {<IconCalendarFilled className="!size-5" />}{" "}
                        {experience.start} -{" "}
                        {experience.end ? experience.end : "Present"}
                    </p>
                    <div className="mt-2 md:mt-0 text-white-100 flex gap-1 items-end">
                        {<IconMapPin className="!size-4" />}{" "}
                        {experience.location}
                    </div>
                </div>
            </div>
        </AccordionTrigger>
    );
    const detailsContent = (
        <AccordionContent className="bg-transparent p-4 rounded-b-md text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* FIRST COLUMN */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-md font-semibold mb-2">
                            Role Overview:
                        </h3>
                        <p>{experience.details}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">
                            Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECOND COLUMN */}
                <div>
                    <h4 className="font-semibold mb-2">Key Projects:</h4>
                    <ol className="list-none pl-0 space-y-2">
                        {experience.projects.map((p, i) => (
                            <li key={i} className="relative pl-8">
                                <span
                                    className="absolute left-0 w-6 h-6 flex items-center justify-center text-sm text-white rounded-full"
                                    style={{
                                        background:
                                            "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
                                    }}
                                >
                                    {i + 1}
                                </span>
                                <span className="font-semibold">{p.name}</span>
                                {p.details && `: ${p.details}`}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </AccordionContent>
    );
    return (
        <AccordionItem
            value={experience.position}
            style={{
                background: `linear-gradient(110deg, #130428 0%, #251043 60%, #38126D 100%)`,
                boxShadow: `
      4px 8px 20px rgba(0,0,0,0.25),
      inset 1px 1px 6px rgba(255,255,255,0.12),
      inset -2px -2px 8px rgba(0,0,0,0.35)
    `,
                border: "1px solid rgba(105, 59, 147, 0.4)",
                padding: "10px",
                borderRadius: "8px",
            }}
        >
            {accordianTrigger}
            {detailsContent}
        </AccordionItem>
    );
};
function WorkExperience() {
    const experience: Experience[] = new Array();
    experience.push(
        {
            company: "Cvent India Pvt Ltd",
            position: "Software Engineer I",
            start: "June 2025",
            location: "Gurgaon, India",
            logo: "images/cvent.png",
            description:
                "Contributed to production features, UI/UX consistency, backend enhancements and LLM-based integrations.",
            details:
                "Working across frontend and backend to improve product usability, system performance, and automation pipelines, while collaborating with cross-functional teams for deployments and feature delivery.",
            skills: [
                "React",
                "TypeScript",
                "Dropwizard",
                "Spring Boot",
                "AWS",
                "Jenkins",
                "LLM Integration",
                "Microservices",
                "CI/CD",
            ],
            projects: [
                {
                    name: "Invoice UI Design System",
                    details:
                        "Currently designing and implementing an invoice experience with customizable layouts and reusable UI components.",
                },
                {
                    name: "Website Theming",
                    details:
                        "Built and improved UI consistency and site-wide theming support ensuring customizable experiences across products.",
                },
                {
                    name: "AI Integration Demo",
                    details:
                        "Developed a demo project with LLM-based interactions to showcase AI-driven improvements for speaker workflows.",
                },
            ],
        },
        {
            company: "Coinbase India Services",
            position: "Software Engineering Intern",
            start: "May 2024",
            end: "August 2024",
            location: "Bengaluru, India",
            logo: "images/coinbase.png",
            description:
                "Worked on search improvements, performance optimization and microservices within a production environment.",
            details:
                "Enhanced the search algorithm, optimized cache latency through traffic rerouting, and contributed to unit testing and Agile workflows in a distributed microservices setup.",
            skills: [
                "Golang",
                "gRPC",
                "Microservices",
                "Caching",
                "Prose Search",
                "Agile",
                "Unit Testing",
            ],
            projects: [
                {
                    name: "Search Algorithm Upgrade",
                    details:
                        "Enhanced search support with multi-query handling using Prose and integrated deep linking for efficient navigation.",
                },
                {
                    name: "Cache Latency Optimization",
                    details:
                        "Reduced latency by implementing traffic rerouting strategies and optimizing caching mechanisms using Golang and gRPC.",
                },
            ],
        },
    );

    return (
        <div id="work-section" className="flex items-center justify-center">
            <Card className="bg-transparent border-none shadow-none flex flex-col items-start justify-center">
                <CardTitle className="text-white text-3xl">
                    Work Experience
                </CardTitle>
                <Accordion
                    type="multiple"
                    className="w-full md:w-[700px] flex flex-col gap-4 mt-4"
                >
                    {experience.map((exp, index) => (
                        <ExperienceAccordianCard key={index} experience={exp} />
                    ))}
                </Accordion>
            </Card>
        </div>
    );
}

export default WorkExperience;
