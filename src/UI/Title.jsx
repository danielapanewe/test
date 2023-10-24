

// eslint-disable-next-line react/prop-types
function Title({title,subtitle}) {
  return (
    <>
    <h2 className="text-xl md:text-4xl font-bold pb-2">{title} </h2>
    <h3 className="paragraph" >{subtitle}</h3>
    </>
  )
}

export default Title