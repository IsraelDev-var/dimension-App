import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination"
const ResidentList = ({residents, dbLocation}) => {
  const [changepage, setChangepage] = useState(1)

  const residentForPage = 20;
  const resultPage = Math.ceil(residents.length / residentForPage)

  let sliceStart = (changepage -1 ) * residentForPage

  let sliceEnd = sliceStart + residentForPage

  const residentsInpage = residents.slice( sliceStart, sliceEnd)

  const pages = []
  for (let i = 1; i < resultPage; i++) {
    pages.push(i)
    
  }
  useEffect(() => {
    setChangepage(1)
  }, [dbLocation])
  
  
  return (
    <section className=" flex flex-col  p-2 bg-[url(/images/bg-body.png)] bg-cover bg-center ">
      <section className=" grid  md:grid-cols-2 gap-4 place-items-center" >
        {
          residentsInpage.map((resident) => <ResidentCard  key={resident} residentUrl={resident} />)
        }
      </section>

        <Pagination pages={pages} changepage={changepage} setChangepage={setChangepage} />

  

    </section>

  )
}
export default ResidentList