import Header from "@/components/ui/Header";
import { NextPage } from "next";

interface Props {}

const Profile: NextPage<Props> = ({}) => {
  const list = [
    {
      title: "First Name",
      description: "Margot ",
    },
    {
      title: "Last Name",
      description: " Foster",
    },
    {
      title: "Phone Number",
      description: "987654321",
    },
  ];
  return (
    <>
      <Header title="Profile" />
      <div className="container mx-auto py-10 px-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {list.map(value => {
              return (
                <div
                  key={value.title.toLowerCase().replace(/\s/g, "")}
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    {value.title}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {value.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </>
  );
};

export default Profile;
