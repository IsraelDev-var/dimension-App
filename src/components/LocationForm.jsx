const LocationForm = ({handleSubmit}) => {

  return (
<section   className=" min-h-[600px] px-2   bg-[url(/images/hearder.png)] grid place-items-center bg-cover bg-center grid-cols-1 ">
  <div className="   md:h-[700px] h-[290px]  mt-[-150px] max-w-[290] flex items-center justify-center bg-[url(/images/icon.png)]  bg-cover bg-center  ">
    
    <img className="  " src="/icons/name.png" alt="" />
  </div>
<form className="flex m-4 " onSubmit={handleSubmit} >
  <input id="location" required className="text-[#8EFF8B]  bg-transparent min-w-[150px] w-[200px] border-1 border-[#8EFF8B]" min={1} max={126} placeholder="Type a Location id..." type="number" />
  <button className=" px-1 P-4 flex items-center gap-2 h-7 bg-[#8EFF8B50] hover:bg-[#8EFF8B] border-1 border-[#8EFF8B] ">Search <i><img src="/icons/pixelarticons_search.svg" alt="" /></i></button>
  </form>
  <h3 className=" text-[#8EFF8B] ">¡Welcome to the crazy universe!</h3>
</section>

  )
}
export default LocationForm