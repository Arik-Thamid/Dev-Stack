import { use, type Dispatch, type SetStateAction } from "react"
import type { DataType } from "../../types/type"
import TechnologyList from "./TechnologyList"

interface dataPropsType{
    dataProps:Promise<DataType[]>
    stackData:DataType[]
    setStackData: Dispatch<SetStateAction<DataType[]>>
}
const Technology = ({dataProps, stackData , setStackData}:dataPropsType) => {
    const allData = use(dataProps)
  return (
    <>
    
        <TechnologyList allData={allData} stackData={stackData} setStackData={setStackData} />

    </>
  )
}

export default Technology