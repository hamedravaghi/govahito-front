
const CkBox = ({content}) => {
  return (
    <div dangerouslySetInnerHTML={{__html:content}} className="ck-content"/>
  )
}

export default CkBox



// className="richtext leading-10 mt-3 md:mt-5 ck-content"