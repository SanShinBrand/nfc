"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type sizeChart = {
  size : string ,
  shoulder : number,
  chest : number,
  sleeve : number,
  length : number
}

export const columns: ColumnDef<sizeChart>[] = [
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "shoulder",
    header: "Shoulder",
  },
  {
    accessorKey: "chest",
    header: "Chest",
  },
  {
    accessorKey: "sleeve",
    header: "Sleeve",
  },
  {
    accessorKey: "length",
    header: "Length",
  },
]
