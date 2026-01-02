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
export const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
function Navigation({ children }: { children: React.ReactNode }) {
    const nav = (
        <NavigationMenu
            className="w-full max-w-none flex items-center fixed z-100"
            style={{
                background: "#1A0B2E",
                height: "60px",
            }}
        >
            <div className="flex-[1] flex justify-end px-2 sm:px-4">
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

            <div className="flex-[2] hidden md:flex justify-center px-2">
                <NavigationMenuList className="flex items-center gap-4 sm:gap-8 md:gap-10 lg:gap-[50px]">
                    <NavigationMenuItem className="text-white">
                        <Button
                            className="text-xs sm:text-sm md:text-base text-white bg-transparent hover:bg-transparent border-1"
                            variant="default"
                            onClick={() => scrollToSection("#work-section")}
                        >
                            Work
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-white">
                        <Button
                            className="text-xs sm:text-sm md:text-base text-white bg-transparent hover:bg-transparent border-1"
                            variant="default"
                            onClick={() => scrollToSection("#skills-section")}
                        >
                            Skills
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-white">
                        <Button
                            className="text-xs sm:text-sm md:text-base text-white bg-transparent hover:bg-transparent border-1"
                            variant="default"
                            onClick={() => scrollToSection("#projects-section")}
                        >
                            Projects
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="text-white">
                        <Button
                            className="text-xs sm:text-sm md:text-base text-white bg-transparent hover:bg-transparent border-1"
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
