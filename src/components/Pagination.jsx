

const pagination = ({pages, setChangepage, changepage}) => {

  return (
    <ul className="   flex justify-center  items-center self-center max-w-[1000px] mx-0 mt-20 p-2  gap-4 j ">
      {
        pages.map( (page) => <li className={`text-2xl grid place-items-center hover:text-[#8EFF8B]   ${changepage === page && "text-[#8EFF8B] p-2 border-2 border-[#8EFF8B] "}`} onClick={ ()=> setChangepage(page)}  key={page} >{page}</li> )
      }
    </ul>
  )
}
export default pagination