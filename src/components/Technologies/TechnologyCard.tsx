import { IoIosStar, IoMdCheckmark } from "react-icons/io"
import type { DataType } from "../../types/type"
import {  type Dispatch, type SetStateAction } from "react"
import { toast } from "react-toastify"

interface allDataType {
  data: DataType
  stackData: DataType[]
  setStackData: Dispatch<SetStateAction<DataType[]>>
}

const TechnologyCard = ({ data, stackData, setStackData,}: allDataType) => {

  const badgeStyle: Record<string, string> = {
    Popular: "bg-blue-50 text-blue-500",
    Versatile: "bg-green-50 text-green-500",
    Fast: "bg-orange-50 text-orange-500",
    Standard: "bg-emerald-50 text-emerald-500",
    "Top SQL": "bg-indigo-50 text-indigo-500",
    Cache: "bg-red-50 text-red-500",
    Ubiquitous: "bg-yellow-50 text-yellow-600",
    Essential: "bg-cyan-50 text-cyan-500",
    Robust: "bg-blue-50 text-blue-500",
    Modern: "bg-sky-50 text-sky-500",
    Containers: "bg-sky-50 text-sky-500",
  }

 
  const isSelected = stackData.some(
    (item) => item.name === data.name
  )
  
 

  const buttonHandler = () => {
   if (isSelected) {
    toast.warning(`${data.name} is already added!`)
    return
  }
    setStackData([...stackData, data])
    
    toast.success(`${data.name} added to your stack!`)
  }



  return (
    <div className={`rounded-xl border bg-white p-3 shadow-sm ${
        isSelected
          ? "border border-fuchsia-500"
          : "border-slate-200"
      }`}>

      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-8 w-8 items-center justify-center">
          <img
            className="h-7 w-7 object-contain"
            src={data.icon}
            alt={data.name}
          />
        </div>

        <span
          className={`rounded-full px-2 py-1 text-[10px] font-medium ${
            badgeStyle[data.badge] || "bg-slate-50 text-slate-500"
          }`}
        >
          {data.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-2 text-[13px] font-semibold text-slate-900">
        {data.name}
      </h2>

      {/* Description */}
      <p className="mt-1 min-h-10 text-[10px] leading-3 text-slate-500">
        {data.description}
      </p>

      {/* Info */}
      <div className="mt-2 flex items-center justify-between text-[8px]">

        <span className="rounded-md bg-[#F1F5F9] px-1.5 py-1 text-[9px] text-slate-600">
          {data.category}
        </span>

        <span className="text-[9px] font-bold text-slate-500">
          {data.difficulty}
        </span>

        <span className="flex items-center gap-0.5 text-[12px] font-medium text-slate-700">
          <span className="text-[12px] text-yellow-500">
            <IoIosStar />
          </span>
          {data.rating}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={buttonHandler}
        
        className={`${isSelected?'bg-gray-400 ':'bg-slate-950 hover:bg-slate-800'} mt-2 w-full cursor-pointer rounded-md  py-1.5 text-[8px] font-medium text-white transition `}
      >
        {isSelected ? <div className="flex justify-center items-center"><span className="text-[12px]"><IoMdCheckmark /></span>Added to Stack</div>: "Add to Stack"}
      </button>

    </div>
  )
}

export default TechnologyCard