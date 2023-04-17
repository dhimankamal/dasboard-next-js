import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", formData);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="container mx-auto py-12">
      <h1>Login</h1>
      <p>
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <form className="py-6 space-y-4 w-6/12" onSubmit={handleLogin}>
        <Input
          label="Username"
          inputProps={{
            placeholder: "Enter your email",
            name: "email",
            onChange: handleInputChange,
          }}
        />
        <Input
          label="Password"
          inputProps={{
            placeholder: "Enter your password",
            type: "password",
            name: "password",
            onChange: handleInputChange,
          }}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
