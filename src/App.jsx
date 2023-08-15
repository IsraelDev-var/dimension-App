
import { useEffect, useState } from 'react'
import './App.css'
import { getDimancion } from './utils/random'
import axios from "axios"
import ResidentList from './components/ResidentList'
import LocationInfo from './components/LocationInfo'
import LocationForm from './components/LocationForm'

function App() {
  const [dbLocation, setDbLocation] = useState(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newLocation = e.target.location.value;
    fetchAPI(newLocation)

    
  }


  const fetchAPI = ( idLocacion)=>{
    
    const url = `https://rickandmortyapi.com/api/location/${idLocacion}`
  
    axios.get(url)
    .then(({data}) => setDbLocation(data))
    .catch((err) => console.log(err))
  }



  useEffect( () => {
    const randomDimencion = getDimancion(126)

    fetchAPI(randomDimencion)

  }, [])
  


  return (
    <main className=' font-["fire code"]  text-white min-h-screen bg-[url(/images/Ellipse@2x.png)] '>
      
      <LocationForm  handleSubmit={handleSubmit}/>
      <LocationInfo dbLocation={dbLocation} />
      <ResidentList className="" residents={dbLocation?.residents ?? []} dbLocation={dbLocation} />

      
    </main>


  )
  
}

export default App
