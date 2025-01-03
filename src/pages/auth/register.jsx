import CommonForm from "@/components/common/form";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { registerFormControls } from "@/config";
import { useState } from "react";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister({ openLogin }) {
  const [formData, setFormData] = useState(initialState);
  function onSubmit(event) {
    event.preventDefault();
  }
  console.log(formData);

  return (
    <DialogContent className="border-slate-700">
      <DialogHeader>
        <DialogTitle>
          Create new account
        </DialogTitle>
        <DialogDescription className="flex justify-center">
          Already have an account
          <p
            className="font-medium ml-2 text-primary hover:underline"
            onClick={openLogin}
          >
            Login
          </p>
        </DialogDescription>
      </DialogHeader>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </DialogContent>
  );
}

export default AuthRegister;
