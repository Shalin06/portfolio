"use client";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/app/components/ui/card";
import { calculateExperience } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import aboutData from "../data/about.json"

function About() {
    const [imgSize, setImgSize] = useState<{ w: number; h: number }>();

    useEffect(() => {
        const preload = new Image();
        preload.src = "/images/Me.png";
        preload.onload = () =>
            setImgSize({ w: preload.width, h: preload.height });
    }, []);

    const image = (
        <div
            style={{
                height: imgSize?.h ? imgSize.h * 1.2 : undefined,
                width: imgSize?.w ? imgSize.w * 1.5 : undefined,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                        "radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(67, 67, 67, 0) 100%)",
                }}
            >
                {imgSize && (
                    <img src="/images/Me.png" className="h-[70%] w-[70%]" />
                )}
            </div>
        </div>
    );

    const profileCard = (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-6 sm:gap-10 items-center justify-center w-full">
                <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-6 items-center">
                    <CardContent className="w-full md:w-auto flex justify-center">{image}</CardContent>
                    <CardContent className="text-white py-6 md:py-8 w-full md:w-auto">
                        <CardTitle className="text-2xl sm:text-3xl text-white mb-2">
                            {aboutData.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-white">
                            {aboutData.description}
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </div>
    );

    const exp = calculateExperience(new Date("2025-06-09"));
    const label = exp <= 1 ? "year" : "years";

    const workCard = (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-6 sm:gap-10 w-full md:w-1/2">
                <CardContent className="text-white items-start p-0">
                    <CardTitle className="text-xl sm:text-2xl text-white mb-2">
                        {aboutData.title}
                    </CardTitle>
                    <b>
                        <CardDescription className="text-sm text-white flex items-center flex-wrap gap-1">
                            I am currently working at
                            <Link
                                href="https://www.cvent.com"
                                className="flex items-center gap-1 text-blue-400"
                            >
                                <Avatar className="h-5 w-5 relative z-10">
                                    <AvatarImage src={aboutData.companyUrl} />
                                </Avatar>
                                {aboutData.currentCompany}
                            </Link>
                            as a {aboutData.currentPosition}
                        </CardDescription>
                    </b>

                    <CardDescription className="text-xs sm:text-sm text-white">
                        I am a Full Stack Developer having an experience of{" "}
                        <b>{exp}</b> {label} in building production-grade web
                        softwares. I have graduated from IIT Jodhpur in 2025
                        with a B.Tech in Computer Science and Engineering
                        scoring a CGPA of <b>8.69</b>.
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );

    return (
        <div id="about-section" className="items-center justify-center">
            {profileCard}
            {workCard}
        </div>
    );
}

export default About;
