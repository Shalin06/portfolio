"use client";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { motion } from 'framer-motion'
export const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Cursor = ({ position }: {
    position: {
        left: number;
        width: number;
        opacity: number;
    }
}) => (
    <motion.div
        className="absolute top-1/2 -translate-y-1/2 rounded-full h-8
      bg-purple-100
      mx-auto
      shadow-[0_0_20px_rgba(147,51,234,0.35)] -z-10 ml-0.5"
        animate={{ left: position.left, width: position.width, opacity: position.opacity }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
    />
);

const Tab = ({ children, setPosition, id }: {
    children: React.ReactNode,
    setPosition: Dispatch<SetStateAction<{
        left: number;
        width: number;
        opacity: number;
    }>>
    id: string
}) => {
    const ref = useRef<HTMLLIElement>(null)
    return (
        <NavigationMenuItem className="relative text-white hover:text-purple-800"
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width: width - 5,
                    left: ref.current?.offsetLeft ?? 1,
                    opacity: 1
                })
            }}>
            <Button
                className="text-xs sm:text-sm md:text-base text-white bg-transparent hover:bg-transparent hover:text-purple-800"
                variant="ghost"
                onClick={() => scrollToSection(id)}
            >
                {children}
            </Button>
        </NavigationMenuItem>
    )
}

function Navigation({ children }: { children: React.ReactNode }) {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0
    })

    const nav = (
        <NavigationMenu
            className="w-full max-w-none flex items-center fixed z-100 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md h-15"
        >
            <div className="flex-1 flex justify-end px-2 sm:px-4">
                <Button
                    variant="ghost"
                    className="hover:bg-transparent h-auto p-0"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="/images/Shalin_Jain.png" />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                </Button>
            </div>

            <div className="flex-2 md:flex justify-center">
                <NavigationMenuList className="relative flex items-center gap-2 sm:gap-2 md:gap-2 lg:gap-2 border-2 rounded-full border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)]" onMouseLeave={() => {
                    setPosition((pv) => ({
                        ...pv,
                        opacity: 0
                    }))
                }}>

                    <Tab setPosition={setPosition} id="#work-section">Work</Tab>
                    <Tab setPosition={setPosition} id="#skills-section">Skills</Tab>
                    <Tab setPosition={setPosition} id="#projects-section">Projects</Tab>
                    <Tab setPosition={setPosition} id="#contact-section">Contact</Tab>
                    <Cursor position={position} />
                </NavigationMenuList>
            </div>
            <div className="flex-1" />
        </NavigationMenu>
    );
    return (
        <div>
            {nav}
            <main className="grow pt-15">{children}</main>
        </div>
    );
}

export default Navigation;
