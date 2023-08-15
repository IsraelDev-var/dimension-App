import { useEffect, useState } from "react"
import axios from "axios"

const ResidentCard = ({residentUrl}) => {
    const [dbResidents, setDbRecidents] = useState(null)

    const status = {
        Alive:"bg-green-500",
        Dead: "bg-red-500",
        unknown:"bg-gray-500"
    }




    useEffect(() => {

        axios
            .get(residentUrl)
            .then(({data}) => setDbRecidents(data))
            .catch((err) => console.log(err))

    }, [])
    
return (
    <article className="border-1  border-[#8EFF8B] w-[300px]   "  >
        <div className="border-b-2  border-[#8EFF8B] ">
        <img className="w-full bg-cover bg-center"  src={dbResidents?.image} alt="" />
            <section className="flex  items-center justify-center  w-[140px] p-2 gap-2 ">
                <div className={`h-[10px] rounded-full aspect-square  ${status[dbResidents?.status]}`}></div>
                {dbResidents?.status}
            </section>
        </div>
        <section className="grid p-2">
            <h3 className="text-2xl"> {dbResidents?.name}</h3>
            <ul>
                <li>Species: {dbResidents?.species}</li>
                <li>Origin: {dbResidents?.origin.name}</li>
                <li>Time appear: {dbResidents?.episode.length} </li>
            </ul>
        </section>

    </article>
)
}
export default ResidentCard