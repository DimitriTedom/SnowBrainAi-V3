// app/components/AuthModal.tsx
'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button'; 

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}// app/components/AuthModal.tsx
// 

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const  AuthModal = ({ isOpen, onClose }: AuthModalProps) =>{
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Sign In / Register
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Choose your preferred method to authenticate.
          </p>
          <div className="space-y-2">
            <Button className="w-full">Sign in with Email</Button>
            <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600">
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600">
              Sign in with GitHub
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AuthModal