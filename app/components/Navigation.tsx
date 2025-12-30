import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navigation() {
    const nav = (
        <NavigationMenu className="w-full max-w-none flex items-center" style={{
            background: '#1A0B2E',
            height: '60px',
        }}>
             <div className="flex-[1] flex justify-end">
                <Link href="/">
                    <Avatar>    
                    <AvatarImage src="/images/Shalin_Jain.png" />
                    <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                </Link>
            </div>

            <div className="flex-[2] flex justify-center">
                <NavigationMenuList className="flex items-center gap-[50px]">
                <NavigationMenuItem asChild className="text-white"><Link href="#about-section">About</Link></NavigationMenuItem>
                <NavigationMenuItem asChild className="text-white"><Link href="/">Work</Link></NavigationMenuItem>
                <NavigationMenuItem asChild className="text-white"><Link href="/">Projects</Link></NavigationMenuItem>
                <NavigationMenuItem asChild className="text-white"><Link href="/about">Contact</Link></NavigationMenuItem>
                </NavigationMenuList>
            </div>
            <div className="flex-[1]" />
        </NavigationMenu>
    )

    return nav
}

export default Navigation