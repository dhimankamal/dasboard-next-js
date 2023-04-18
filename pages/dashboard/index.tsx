import { Button } from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import { NextPage } from "next";

interface Props {}

const Dashboard: NextPage<Props> = ({}) => {
  return (
    <>
     <Header title="Dashboard" />
      <main>
        <div className="mx-auto container py-6 sm:px-6 lg:px-8">
            <div className="py-4 px-8 flex border justify-between items-center rounded-md">
                <h2>Complete your profile</h2> 
                <Button>Complete Now</Button>
            </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
