"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { ModeToggle } from "./ui/ModeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between h-16 md:h-24 items-center">
      <Link href="/" className="font-bold text-lg">
        SuperShoe
      </Link>
      <div>
        <NavigationMenu className="md:flex hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-36 flex flex-col gap-3 p-2">
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Sneakers
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Boots
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  High Tops
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Converse
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex justify-between">
        <Link href="/cart" className="px-4">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </Link>
        <ModeToggle />
        <div className="flex md:hidden pl-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="m-1 cursor-pointer">
                <Link href="/">Home</Link>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem className="m-1 cursor-pointer">
                <Link href="/about">About</Link>{" "}
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="m-1">
                  <span>Categories</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Sneakers</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Boots</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>High Tops</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Converse</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem className="m-1 cursor-pointer">
                <Link href="/contact">Contact</Link>{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
