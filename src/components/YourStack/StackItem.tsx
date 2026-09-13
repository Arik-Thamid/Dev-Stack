import { RxCross2 } from "react-icons/rx"
import type { DataType } from "../../types/type"
import type { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"

interface stackDataType {
  stackData: DataType[]
  setStackData: Dispatch<SetStateAction<DataType[]>>
  
}

const StackItem = ({ stackData , setStackData}: stackDataType) => {
  
  const deleteHandler =(name:string)=>{
    const newData = stackData.filter(data => data.name !== name)
    setStackData(newData)
    toast.info(`${name} removed from your stack!`)
  }

  // remove all
  const removeAll =()=>{
    setStackData([])
    toast.info('All technologies removed')
  }

  return (
    <>
      <section className="rounded-[20px]  border border-slate-200 bg-white p-4 shadow-sm">

        {/* Header */}
        <h2 className="text-[20px] font-bold leading-tight text-[#0F172A]">
          Your Stack
        </h2>

        {/* Empty / Selected text */}
        {stackData.length === 0 ? (
          <p className="mt-2 text-[16px] text-[#94A3B8]">
            No technologies selected yet.
          </p>
        ) : (
          <p className="mt-2 text-[16px] text-[#94A3B8]">
            {stackData.length} Technology Selected
          </p>
        )}


        {/* Empty State */}
        {stackData.length === 0 && (
          <div className="mt-4 flex h-15 items-center justify-center rounded-xl border border-dashed border-[#DCE5F0]">
            <p className="text-[14px] text-[#94A3B8]">
              Your stack is empty
            </p>
          </div>
        )}


        {/* Selected Stack */}
        {stackData.length > 0 && (
          <div className="mt-5 flex flex-col gap-2">

            {stackData.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex h-16.5 items-center justify-between rounded-[11px] border border-slate-200 bg-white px-2"
                >

                  {/* Left */}
                  <div className="flex items-center gap-2">

                    <div className="flex h-10 w-10 items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-[14px] font-semibold text-[#0F172A]">
                        {item.name}
                      </h3>

                      <p className="text-[9px] text-[#94A3B8]">
                        {item.category}
                      </p>
                    </div>

                  </div>


                  {/* Remove */}
                  <button
                    onClick={()=> deleteHandler(item.name)}
                    className="cursor-pointer text-[25px] font-light leading-none text-[#94A3B8] hover:text-[#0F172A]"
                  >
                    <RxCross2 />

                  </button>

                </div>
              )
            })}


            {/* Remove All */}
            <button
              onClick={()=> removeAll()}
              className="mt-14 h-10.5 w-full cursor-pointer rounded-[11px] border border-red-300 text-[18px] font-semibold text-red-500 transition hover:bg-red-50"
            >
              Remove All
            </button>

          </div>
        )}

      </section>
    </>
  )
}

export default StackItem