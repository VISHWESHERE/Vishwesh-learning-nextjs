import Hello from "./components/Hello";
import dataFetch from "./data";

export default function Home() {
  console.log("what am I server or client ?");

  return (
    <>
    <h1 className="text-4xl">Welcome to Next Js</h1>
    <Hello />
    {dataFetch()}
    </>
  );
}
