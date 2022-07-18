import type { NextPage } from "next";
import Image from "next/image";
import Heads from "./Head";
import ClassList from "./ClassList";
import Schedule from "./Schedule";

const Home: NextPage = () => {
  return (
    <div>
      <Heads />
      <div className="absolute -z-10 bg-stone-100 w-screen h-80"></div>
      <div className="absolute -z-20 min-h-screen w-screen"></div>

      <div className="py-2 px-12">
        <nav className="my-5">
          <h1 className="text-2xl font-medium">Schedule Buider</h1>{" "}
        </nav>

        <h1 className="text-xl font-medium text-gray-500 my-4 hover:bg-gray-200 w-max p-1 rounded-sm -left-1 relative">
          Winter
        </h1>

        <main className="grid grid-cols-2">
          <Schedule className="col-start-1" />

          <ClassList className="col-start-2" />
        </main>
      </div>
    </div>
  );
};

export default Home;
