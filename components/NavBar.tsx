"use client"
import { TrendingUp } from "lucide-react";
import ThemeTrigger from "./ThemeTrigger";
import Link from "next/link";
import Image from "next/image";
import { useSignInModal } from "@/hooks/use-signin-modal";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button} from "./ui/button";

export default function Navbar() {
  const { open } = useSignInModal();
  return (
    <>
      <nav className="flex flex-between px-[2rem] xl:px-[5rem] py-4 shadow-sm">
        {/* Logo */}
        <Link href={"/"} className="text-white text-xl">
          <div className="text-xl xl:text-2xl gradient_text flex items-center font-bold">
            <Image src={"/heart.svg"} alt="heart" width={40} height={40} />
            <div className="flex">
              SnowBrain Ai <h6 className="text-xs">v3</h6>
            </div>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <ThemeTrigger />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button
              onClick={open}
              className="px-4 flex py-3 rounded-full text-sm font-bold hover:-translate-y-1 transition"
            >
              <h2>Try SnowBrain</h2> <TrendingUp />
            </Button>
          </SignedOut>
        </div>
      </nav>
    </>
  );
}
