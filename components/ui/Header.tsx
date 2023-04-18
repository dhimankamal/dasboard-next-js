import { NextPage } from "next";

interface Props {
  title: string;
}

const Header: NextPage<Props> = ({ title }) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto container px-4 py-6 ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
