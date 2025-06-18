"use client"
 import React from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { useSignInModal } from "@/hooks/use-signin-modal";
import { SignIn } from "@clerk/nextjs";

const SigninModal = () => {
  const { isOpen, close } = useSignInModal();
  const fallbackUrl = process.env.NEXT_PUBLIC_APP_URL;
  console.log(fallbackUrl)
  // const [mounted,setMounted] = useState(false)
  //   useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-fit px-0 !bg-transparent !border-0 shadow-none">
        <DialogTitle className="sr-only">Sign In</DialogTitle>
        {/* routing="hash" */}
        <SignIn routing="hash" fallbackRedirectUrl={`${fallbackUrl}?signin=true`} />
      </DialogContent>
    </Dialog>
  );
};

export default SigninModal;
