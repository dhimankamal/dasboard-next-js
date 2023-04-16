import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { NextPage } from "next";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div className="container mx-auto py-12">
      <h1>Login</h1>
      <p>
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <form className="py-6 space-y-4 w-6/12">
        <Input
          label="Username"
          inputProps={{ placeholder: "Enter your email" }}
        />
        <Input
          label="Password"
          inputProps={{ placeholder: "Enter your password", type: "password" }}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
