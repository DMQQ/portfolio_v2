import { ReactNode } from "react";

export default function Heading(props: {
  children: ReactNode;
  fontSize?: string;
}) {
  return (
    <h1
      className={`text-5xl md:text-7xl font-extrabold text-white flex flex-col ${
        props.fontSize || ""
      }`}
    >
      <span className="text-base text-purple-800 font-bold">
        <span className="text-2xl">&#x2192;</span> Project name
      </span>
      {props.children}
    </h1>
  );
}
