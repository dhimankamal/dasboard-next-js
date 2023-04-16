import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { NextPage } from "next";

interface Props {}

const Signup: NextPage<Props> = ({}) => {
  return (
    <div className="container mx-auto py-12">
      <h1>Sign up</h1>
      <p>
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <form className="py-6 space-y-4 w-6/12">
        <Input
          label="Full name"
          inputProps={{ placeholder: "Enter your full name" }}
        />
        <Input
          label="Email address"
          inputProps={{ placeholder: "Enter your email" }}
        />
        <Input
          label="Password"
          inputProps={{ placeholder: "Enter your password", type: "password" }}
        />
        <Input
          label="Confirm password"
          inputProps={{
            placeholder: "Confirm your password",
            type: "password",
          }}
        />
        <Button type="submit" className="bg-green-600 hover:bg-green-500">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;