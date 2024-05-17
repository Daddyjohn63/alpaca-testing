'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "./auth/login-form"
import { RegisterForm } from "./auth/register-form"
import Social from "./auth/social";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useState } from "react";


interface BuyNowBtnProps {
  btnText: string;
}

export const BuyNowBtn = (props: BuyNowBtnProps) => {

  const user = useCurrentUser()
  const [showLoginForm, setShowLoginForm] = useState(false)

  const {btnText} = props;

  const createCheckout = () => {
    console.log("Create checkout")
  }

  return (
    <div>
      {!!user ? (
        <Button 
          className="w-full bg-primary text-primary-foreground"
          onClick={createCheckout}
        >
          {btnText}
        </Button>
      ): (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-primary text-primary-foreground" >
                {btnText}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-10">
              {!showLoginForm ? (
                <div>
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-center text-2xl">Register Account First</DialogTitle>
                    <DialogDescription className="text-center text-foreground">Must be signed in first before purchasing product!</DialogDescription>
                  </DialogHeader>
                  <RegisterForm />
                  <div className="flex items-center justify-center p-3">
                    <div className="flex-grow border-t border-muted-foreground"></div>
                    <span className="px-4 text-muted-foreground">or</span>
                    <div className="flex-grow border-t border-muted-foreground"></div>
                  </div>
                  <Social />
                    <div className="text-center pt-3">
                  <Button variant="link" onClick={() => setShowLoginForm(true)}>Already have an account? Login here</Button>
                </div>
                </div>
              ): (
                  <div>
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-center text-2xl">Login First</DialogTitle>
                    <DialogDescription className="text-center text-foreground">Must be signed in first before purchasing product!</DialogDescription>
                  </DialogHeader>
                  <LoginForm />
                  <div className="flex items-center justify-center p-3">
                    <div className="flex-grow border-t border-muted-foreground"></div>
                    <span className="px-4 text-muted-foreground">or</span>
                    <div className="flex-grow border-t border-muted-foreground"></div>
                  </div>
                  <Social />
                    <div className="text-center pt-3">
                  <Button variant="link" onClick={() => setShowLoginForm(false)}>Need an account? Register here</Button>
                </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
      )}
    </div>
  )
}
