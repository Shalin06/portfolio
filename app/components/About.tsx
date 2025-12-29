"use client";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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

    const aboutCard = (
        <div className="flex items-center justify-center">
            <Card className="bg-transparent border-none shadow-none flex flex-col gap-10 items-center justify-center">
                <div className="flex flex-row w-1/2">
                    <CardContent>
                        {image}
                    </CardContent>
                    <CardContent className="text-white py-8">
                        <CardTitle className="text-4xl text-white mb-2">
                            Hi, I'm Shalin Jain
                        </CardTitle>
                        <CardDescription className="text-lg">
                            A curiosity-driven builder blending clean
                            engineering with creative problem-solving and a
                            calm, get-it-done attitude.
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </div>
    );

    return (
        <>
        {aboutCard}
        </>
        
    );
}

export default About;
