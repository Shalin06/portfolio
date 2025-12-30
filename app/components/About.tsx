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
                <div className="flex flex-row w-2/3">
                    <CardContent>{image}</CardContent>
                    <CardContent className="text-white py-8">
                        <CardTitle className="text-3xl text-white mb-2">
                            Hi, I'm Shalin Jain
                        </CardTitle>
                        <CardDescription className="text-md text-white">
                            A curiosity-driven builder blending clean
                            engineering with creative problem-solving and a
                            calm, get-it-done attitude.
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </div>
    );

    const exp = calculateExperience(new Date("2025-06-09"));
    const label = exp <= 1 ? "year" : "years";

    const workCard = (
        <div className="flex items-center justify-center">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-10 w-1/2">
                <CardContent className="text-white items-start">
                    <CardTitle className="text-2xl text-white mb-2">
                        I'm a Software Engineer
                    </CardTitle>
                    <b>
                        <CardDescription className="text-md text-white flex items-center flex-wrap gap-1">
                            I am currently working at
                            <Link
                                href="https://www.cvent.com"
                                className="flex items-center gap-1 text-blue-400"
                            >
                                <Avatar className="h-5 w-5 relative z-10">
                                    <AvatarImage src="/images/cvent.png" />
                                </Avatar>
                                Cvent
                            </Link>
                            as a Software Engineer I.
                        </CardDescription>
                    </b>

                    <CardDescription className="text-sm text-white">
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
