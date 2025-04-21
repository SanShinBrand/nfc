"use client";

import { useSearchParams } from "next/navigation";
import {  columns } from "./column";
import { DataTable } from "./data-table";

// async function getData(): Promise<sizeChart[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       size: "S",
//       shoulder: 18,
//       chest: 23,
//       sleeve: 23,
//       length: 26,
//     },

//   ]
// }

export type sizeChart = {
  size: string;
  shoulder: number;
  chest: number;
  sleeve: number;
  length: number;
};

const SizeChart = () => {
  // const data =  getData()
  // const router = useRouter();
  const searchParams = useSearchParams();
  const sizeData = searchParams.get("size");

  const [size, shoulder, chest, sleeve, length] = sizeData!.split("_");

  const data: sizeChart[] = [
    {
      size: size.toUpperCase(),
      shoulder: parseInt(shoulder),
      chest: parseInt(chest),
      sleeve: parseInt(sleeve),
      length: parseInt(length),
    },
  ];

  return (
    <div className="w-full px-3 sm:px-6 md:px-8  ">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SizeChart;
