import React, { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AuthLogin from "@/pages/auth/login";
import AuthRegister from "@/pages/auth/register";
import { Button } from "./ui/button";

function AuthDialog() {
  const [isLogin, setIsLogin] = useState(true);
  const openSignUp = () => {
    setIsLogin(false);
  };

  const openLogin = () => {
    setIsLogin(true);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded border px-4 bg-black border-slate-700 hover:bg-black hover:border-white hover:text-white"
        >
          Login
        </Button>
      </DialogTrigger>
      {isLogin ? (
        <AuthLogin openSignUp={openSignUp} />
      ) : (
        <AuthRegister openLogin={openLogin} />
      )}
    </Dialog>
  );
}

export default AuthDialog;
