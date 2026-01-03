"use client";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/app/components/ui/accordion";
import { AvatarImage } from "@/app/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import {
    IconCalendarFilled,
    IconLocation,
    IconMapPin,
} from "@tabler/icons-react";
import experienceData from "../data/workExperience.json"
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
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row md:items-center w-full text-white gap-4">
                <div className="flex items-center space-x-3 md:space-x-4 min-w-0">
                    <Avatar className="w-8 h-8 md:w-10 md:h-10 relative z-10 rounded-full overflow-hidden shrink-0">
                        <AvatarImage
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-cover"
                        />
                    </Avatar>

                    <div className="min-w-0">
                        <h3 className="text-base md:text-lg flex font-semibold truncate">
                            {experience.position}
                        </h3>
                        <p className="text-xs md:text-sm flex text-white-100 gap-2 truncate">
                            {experience.company}
                        </p>
                    </div>
                </div>
                <div className="mt-2 md:mt-0 text-white-100 flex flex-col items-end gap-1">
                    <p className="text-xs md:text-sm flex gap-2 items-center">
                        {<IconCalendarFilled className="size-4! md:size-5! shrink-0" />}{" "}
                        <span className="truncate">{experience.start} - {experience.end ? experience.end : "Present"}</span>
                    </p>
                    <div className="text-white-100 flex gap-1 items-center text-xs md:text-sm">
                        {<IconMapPin className="size-3! md:size-4! shrink-0" />}{" "}
                        <span className="truncate">{experience.location}</span>
                    </div>
                </div>
            </div>
        </AccordionTrigger>
    );
    const detailsContent = (
        <AccordionContent className="bg-transparent p-3 md:p-4 rounded-b-md text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
                {/* FIRST COLUMN */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-sm md:text-base font-semibold mb-2">
                            Role Overview:
                        </h3>
                        <p className="text-xs md:text-sm">{experience.details}</p>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base font-semibold mb-2">
                            Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 md:px-3 py-1 bg-purple-600/30 rounded-full text-xs md:text-sm border border-purple-500/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECOND COLUMN */}
                <div>
                    <h4 className="text-sm md:text-base font-semibold mb-2">Key Projects:</h4>
                    <ol className="list-none pl-0 space-y-2">
                        {experience.projects.map((p, i) => (
                            <li key={i} className="relative pl-7 md:pl-8">
                                <span
                                    className="absolute left-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm text-white rounded-full"
                                    style={{
                                        background:
                                            "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
                                    }}
                                >
                                    {i + 1}
                                </span>
                                <span className="text-xs md:text-sm font-semibold">{p.name}</span>
                                {p.details && <span className="text-xs md:text-sm">: {p.details}</span>}
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
    const data: Experience[] = experienceData as Experience[];
    return (
        <div id="work-section" className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-6 sm:gap-10 w-full md:w-1/2">
                <CardTitle className="text-white text-2xl sm:text-3xl py-0 mt-0">
                    Work Experience
                </CardTitle>
                <Accordion
                    type="multiple"
                        className="w-full flex flex-col gap-4"
                >
                    {data.map((exp, index) => (
                        <ExperienceAccordianCard key={index} experience={exp} />
                    ))}
                </Accordion>
            </Card>
        </div>
    );
}

export default WorkExperience;
