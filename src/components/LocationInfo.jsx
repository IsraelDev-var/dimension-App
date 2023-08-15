const LocationInfo = ({dbLocation}) => {

  return (
    <section className="container-1 md:pt-4 p-2 grid gap-2 min-h-[200px] place-items-center bg-[url(/images/hearder.png)]">
      <h2>{dbLocation?.name}</h2>

      <ul className="ul-info flex w-64 md:w-[400px]  gap-2">
        <li className="bg-lime-500/40">
          <span className="">Type:</span> {dbLocation?.type}
        </li>
        <li className="bg-lime-500/30">
          <span>Dimension:</span> {dbLocation?.dimension}
        </li>
        <li className="bg-lime-500/20">
          <span>Population:</span> {dbLocation?.residents.length}
        </li>
      </ul>
    </section>
  )
}
export default LocationInfo