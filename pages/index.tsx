import type { NextPage } from "next";
import Image from "next/image";
import Heads from "./Head";
import ClassList from "./ClassList";
import Schedule from "./Schedule";
import TermListbox from "./listbox";
import { useState } from "react";
import useFetch from "./useFetch";

const Home: NextPage = () => {
  const {
    data: terms,
    isPending,
    error,
  } = useFetch(
    "https://register.dal.ca/StudentRegistrationSsb_PROD/ssb/classSearch/getTerms?searchTerm=&offset=1&max=10",
    {mode: "no-cors"}
  );

  const [selectedTerm, setSelectedTerm] = useState();

  return (
    <div>
      <Heads />
      <div className="absolute -z-10 bg-stone-100 w-screen h-80"></div>
      <div className="absolute -z-20 min-h-screen w-screen"></div>

      <div className="py-2 px-12 lg:px-20 lg:py-6" id="app">
        <nav className="my-6 flex content-center space-x-6">
          <h1 className="text-2xl font-medium">Schedule Buider</h1>
          {terms && (
            <TermListbox
              terms={terms}
              selector={[selectedTerm, setSelectedTerm]}
            />
          )}{" "}
          {error}
        </nav>

        <main className="grid grid-cols-2">
          <Schedule className="col-start-1" />

          <ClassList className="col-start-2" />
        </main>
      </div>
    </div>
  );
};

export default Home;
