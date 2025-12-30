"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navigation({ children }: { children: React.ReactNode }) {
    const scrollToSection = (id: string) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const nav = (
        <NavigationMenu
            className="w-full max-w-none flex items-center fixed z-100"
            style={{
                background: "#1A0B2E",
                height: "60px",
            }}
        >
            <div className="flex-[1] flex justify-end">
                <Button variant="ghost" className="hover:bg-transparent" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Avatar>
                        <AvatarImage src="/images/Shalin_Jain.png" />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                </Button>
            </div>

            <div className="flex-[2] flex justify-center">
                <NavigationMenuList className="flex items-center gap-[50px]">
                    <NavigationMenuItem className="text-white">
                        <Button 
                            className="text-white bg-transparent hover:bg-transparent border-1"
                            variant="default"
                            onClick={() => scrollToSection("#work-section")}
                        >
                            Work
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="text-white">
                        <Button
                            className="text-white bg-transparent hover:bg-transparent border-1"
                            variant="default"
                            onClick={() => scrollToSection("#projects-section")}
                        >
                            Projects
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="text-white">
                        <Button
                            className="text-white bg-transparent hover:bg-transparent border-1"
                            variant="default"
                            onClick={() => scrollToSection("#contact-section")}
                        >
                            Contact
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </div>
            <div className="flex-[1]" />
        </NavigationMenu>
    );

    return (
        <div>
            {nav}
            <main className="flex-grow pt-[60px]">{children}</main>
        </div>
    );
}

export default Navigation;
