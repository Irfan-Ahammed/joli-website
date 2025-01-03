import CommonForm from "@/components/common/form";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { loginFormControls } from "@/config";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin({ openSignUp }) {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Sign in to your account</DialogTitle>

        <DialogDescription className="flex justify-center">
          Don't have an account
          <p
            className="font-medium ml-2 text-primary hover:underline"
            onClick={openSignUp}
          >
            Register
          </p>
        </DialogDescription>
      </DialogHeader>

      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </DialogContent>
  );
}

export default AuthLogin;
