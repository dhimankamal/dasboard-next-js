import { NextPage } from "next";
import DynamicForm, { Field } from "@/components/form/DynamicForm";
import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {}

const fields: Field[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    requiredText: "Name is required",
    errorText: "Please enter a valid name",
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    required: true,
    requiredText: "dob is required",
    errorText: "Please enter a valid Date of Birth",
  },
  {
    label: "Gender",
    name: "gender",
    type: "text",
    required: true,
    requiredText: "Name is required",
    errorText: "Please enter a valid gender",
  },
  {
    label: "Father Name",
    name: "fathername",
    type: "text",
    required: true,
    requiredText: "Name is required",
    errorText: "Please enter a valid Father Name",
  },
  {
    label: "Mother Name",
    name: "mothername",
    type: "text",
    required: true,
    requiredText: "Name is required",
    errorText: "Please enter a valid Mother Name",
  },
];

const Dashboard: NextPage<Props> = ({}) => {
  const router = useRouter();
  const handleSubmit = async (data: FieldValues) => {
    console.log("data", data);
    const id = toast.loading("Please wait...");
    try {
      const res = await axios.post("/api/data/userdata", data);
      if (res) {
        toast.update(id, {
          render: " You have successfully updated your details.",
          type: "success",
          isLoading: false,
          autoClose: 6000,
        });
      }
    } catch (error) {
      toast.update(id, {
        render: "Sorry, we couldn't update",
        type: "error",
        isLoading: false,
        autoClose: 7000,
      });
      console.log("error", error);
    }
  };
  return (
    <>
      <Header title="Dashboard" />
      <main>
        <div className="mx-auto container py-6 sm:px-6 lg:px-8 space-y-4">
          <div className="py-4 px-8 flex border justify-between items-center rounded-md">
            <h2>Complete your profile</h2>
            <Button>Complete Now</Button>
          </div>
          <div>
            <DynamicForm
              fields={fields}
              className="grid grid-cols-3 gap-4 border p-4"
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
