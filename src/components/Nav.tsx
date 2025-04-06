
//! Next Js imports
import Link from "next/link";
import Image from "next/image";
//! My imports
import { nanoid } from "nanoid";
import { Waves } from "lucide-react";

//! Radix Imports
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem 
} from "@radix-ui/react-dropdown-menu";






const links = [
    { label: "home", href: "/" },
    { label: "shop", href: "/shop" },
    { label: "contact", href: "/contact" },
  ];

const Nav = () => {
  return (
    <NavigationMenu className="bg-red-700 border-b-slate-200 border-b-4 p-6 ">
      <NavigationMenuList className='p-2 hidden md:flex  text-white items-center justify-items-start gap-x-9 text-xl'>
      <h1 className=" text-4xl  font-bold">Ga Jerk</h1>
        {links.map((link) => {
            const {label, href} = link
            return<NavigationMenuItem key={nanoid()} className="hover:scale-110 duration-300">
            <NavigationMenuLink asChild>
                <Link href={href} className="capitalize">
                {label}
                </Link>
                </NavigationMenuLink>
          </NavigationMenuItem>
        }
        )}
      </NavigationMenuList>

      {/* Mobile */}
        <div className="md:hidden text-white flex justify-between items-center">
          <h1 className=" text-4xl  font-bold">Ga Jerk</h1>
            <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-md border border-white/20 cursor-pointer">
                <Waves className="text-white h-7 w-7"/ >
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white p-4 flex flex-col gap-4 shadow-md z-20" >
                {links.map((link) => {
                  const {label, href} = link
                  return <DropdownMenuItem className="text-lg text-red-950 capitalize p-2" asChild>
                  <Link key={label} href={href}>{label}</Link>
                </DropdownMenuItem>
                })}
                </DropdownMenuContent>
            </DropdownMenu>

        </div>

    </NavigationMenu>
  );
};
export default Nav;
