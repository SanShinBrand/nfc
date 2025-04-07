import { sizeChart, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<sizeChart[]> {
  // Fetch data from your API here.
  return [
    {
      size: "S",
      shoulder: 18,
      chest: 23,
      sleeve: 23,
      length: 26,
    },
   
  ]
}

export default async function SizeChart() {
  const data = await getData()

  return (
    <div className="w-full px-3 sm:px-6 md:px-8  ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
