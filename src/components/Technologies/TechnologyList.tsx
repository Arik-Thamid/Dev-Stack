import type { Dispatch, SetStateAction } from "react"
import type { DataType } from "../../types/type"
import StackItem from "../YourStack/StackItem"
import TechnologyCard from "./TechnologyCard"

interface dataPropsType {
  allData: DataType[]
  stackData:DataType[]
  setStackData: Dispatch<SetStateAction<DataType[]>>
}

const TechnologyList = ({ allData, stackData, setStackData }: dataPropsType) => {
  return (
    <>
      {/* Heading */}
      <section className="container mx-auto my-10">
        <h1 className="font-inter text-[28px] md:text-[32px] lg:text-[36px] font-extrabold text-[#0F172A]">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text font-inter text-[28px] md:text-[32px] lg:text-[36px] font-extrabold text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-[16px] md:text-[18px] text-[#475569]">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto my-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="col-span-1 grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {allData.map((data) => (
            <TechnologyCard
              key={data.name}
              data={data}
              stackData={stackData} setStackData={setStackData}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="col-span-1">
          <StackItem  stackData={stackData} setStackData={setStackData} />
        </div>

      </section>
    </>
  )
}

export default TechnologyList