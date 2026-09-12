import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import type { DataType } from "./types/type"
import Technology from "./components/Technologies/Technology"
import Footer from "./components/Footer"


const dataFetch = async (): Promise<DataType[]> => {
      const res = await fetch('/data.json')
      const data = await res.json()
      return data
  }

export default function App() {
    const [dataProps] = useState(()=> dataFetch())
    const [stackData, setStackData] = useState<DataType[]>([])

  return (
    <div>
      
      <Navbar/>
      <Banner/>
      <Suspense fallback={<h1 className="container mx-auto text-2xl m-10">Loading technologies...</h1>}>
        <Technology dataProps={dataProps} stackData={stackData} setStackData={setStackData} />
      </Suspense>
      <Footer/>

      
    </div>
  )
}