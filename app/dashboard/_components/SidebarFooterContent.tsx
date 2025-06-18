"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Loader, LogOutIcon, Sparkles } from "lucide-react";

interface SidebarFooterContentProps {
  isSignedIn: boolean;
  isLoaded: boolean;
  userName: string;
  userEmail: string;
  userInitial: string;
  credits: number;
  loadingCredit: boolean;
  onUpgradeClick: () => void;
  onSignOut: () => void;
}
const SidebarFooterContent = ({
  isLoaded,
  isSignedIn,
  userEmail,
  userInitial,
  userName,
  credits,
  loadingCredit,
  onSignOut,
  onUpgradeClick,
}: SidebarFooterContentProps) => {
    if(!isLoaded) return <div className="flex items-center justify-center p-3"><Loader size={"2rem"} className="animate-spin text-white"/></div>
  return <div className="flex flex-col gap-3">
    {isSignedIn && (
        <div className="bg-gradient-to-r from-purple-600 to-prima rounded-lg p-4">
            <h3 className="text-white font-semibold text-sm mb-1">
                {loadingCredit ? (<Loader/>) : `Credits Balance: ${credits?.toFixed(1)}`}
            </h3>
            <p className="text-white/80 text-xs mb-2">Unlock premium features</p>
            <Button type="button" onClick={onUpgradeClick} className="w-full bg-white text-black font-semibold hover:bg-white/90 text-sm">
            <Sparkles/>
            Buy Credits
            </Button>
        </div>
    )}

    {isSignedIn && (
        <Popover>
            <PopoverTrigger asChild>
                <div role="button" className="flex border border-tertiar items-center gap-3 p-2 rounded-lg hover:bg-tertiar transition-colors">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gray-300 dark:bg-black text-prima border">
                            {userInitial}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="text-prima font-medium hover:text-white">{userName}</p>
                        <p className="text-muted-foreground text-xs hover:text-gray-100">{userEmail}</p>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent side="top" align="end" className="w-64 px-4 pt-5 pb-2 bg-gray-100 dark:bg-black text-prima border-tertiar border">
                <div className="space-y-2">
                    <h4 className="font-semibold leading-none text-sm pl-1 mb-1">
                        Account
                    </h4>
                    <Button variant={"ghost"} className="w-full justify-normal border border-tertiar hover:bg-tertiar text-sm pl-1 ring-0" onClick={onSignOut}>
                        <LogOutIcon className="w-4 h-4"/>Sign Out
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )}
  </div>;
};

export default SidebarFooterContent;
