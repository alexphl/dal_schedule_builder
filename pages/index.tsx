import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ClassList from "./ClassList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dal Schedule builder</title>
        <meta name="description" content="Dal Schedule builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute -z-10 bg-stone-100 w-screen h-80"></div>
      <div className="absolute -z-20 min-h-screen w-screen"></div>

      <main className="w-screen grid grid-cols-2 py-2 px-12">
        <h1 className="text-2xl font-medium my-5 col-start-1">
          Schedule Buider
        </h1>

        <div className="col-start-1">
          <h1 className="text-xl font-medium text-gray-500 my-4 hover:bg-gray-200 w-max p-1 rounded-sm -left-1 relative">
            Winter
          </h1>
          <div className="w-96 h-96 shadow-lg bg-white rounded-md p-3"></div>
        </div>

        <ClassList className={"relative right-0 col-start-2 w-96 h-full shadow-lg bg-white rounded-md p-3"}/>
      </main>
    </div>
  );
};

export default Home;
