"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useState, useEffect } from "react";

function calculateExperience() {
    const startDate = new Date("2025-06-09");
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth() + 3;

    if (currentDate.getDate() < startDate.getDate()) {
        months--;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // First year: minimum 0.5
    if (years < 1) {
        return 0.5;
    }

    // After first year: round to .0 or .5
    return months >= 6 ? years + 0.5 : years;
}

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
        <div className="flex items-center justify-center">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-10 items-center justify-center">
                <div className="flex flex-row w-1/2">
                    <CardContent>{image}</CardContent>
                    <CardContent className="text-white py-8">
                        <CardTitle className="text-4xl text-white mb-2">
                            Hi, I'm Shalin Jain
                        </CardTitle>
                        <CardDescription className="text-lg text-white">
                            A curiosity-driven builder blending clean
                            engineering with creative problem-solving and a
                            calm, get-it-done attitude.
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </div>
    );

    const exp = calculateExperience();
    const label = exp <= 1 ? "year" : "years";

    const workCard = (
        <div className="flex items-center justify-center">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-10 w-1/2">
                <CardContent className="text-white items-start">
                    <CardTitle className="text-3xl text-white mb-2">
                        I'm a Software Engineer
                    </CardTitle>
                    <b>
                        <CardDescription className="text-lg text-white flex items-center flex-wrap gap-1">
                            I am currently working at
                            <Link
                                href="https://www.cvent.com"
                                className="flex items-center gap-1 text-blue-400"
                            >
                                <Avatar className="h-5 w-5">
                                    <AvatarImage src="/images/current_company.webp" />
                                </Avatar>
                                Cvent
                            </Link>
                            as a Software Engineer I.
                        </CardDescription>
                    </b>

                    <CardDescription className="text-lg text-white">
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
