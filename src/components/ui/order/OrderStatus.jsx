import { useState, useEffect } from "react";
import { DotIcon } from "../icons/DotIcon";

export function OrderStatus({ status }) {
  const [statusStyles, setStatusStyles] = useState(
    "text-green-400 font-bold text-sm",
  );
  const [dotColor, setDotColor] = useState("fill-green-400");

  useEffect(() => {
    if (status == "generado") {
      setStatusStyles(
        "text-black font-bold text-sm border border-green-400 rounded-xl hover:bg-green-200 hover:bg-opacity-30",
      );
      setDotColor("fill-black");
    }
    if (status == "inpago") {
      setStatusStyles(
        "text-red-500 font-bold text-sm border border-red-400 rounded-xl hover:bg-red-400 hover:bg-opacity-30",
      );
      setDotColor("fill-red-500");
    }
    if (status == "pagado") {
      setStatusStyles(
        "text-green-400 font-bold text-sm border border-green-400 rounded-xl hover:bg-green-400 hover:bg-opacity-30",
      );
      setDotColor("fill-green-400");
    }
  }, [status]);

  return (
    <p className={`m-0 flex items-center justify-center px-1 ${statusStyles}`}>
      {" "}
      <DotIcon dotStatus={dotColor} />
      <span>{status}</span>
    </p>
  );
}
