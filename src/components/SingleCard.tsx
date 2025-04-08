

const SingleCard = () => {
  return (
    <div className="  w-full shadow-sm grid grid-cols-2 gap-x-1">
        <div className="image text-amber-50 bg-black p-4 m-1">
            <p>Image</p>
        </div>
        
        <div className="image p-4 flex flex-col gap-2 m-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe blanditiis quas, consequatur earum ut labore sit eaque cumque hic necessitatibus.</p>
        <button className="rounded-lg font-medium bg-transparent border border-red-500 text-red-500 px-6 py-3 hover:bg-red-500 hover:text-white duration-500 ">
          Shop Now
        </button>
        </div>
    </div>
  )
}
export default SingleCard