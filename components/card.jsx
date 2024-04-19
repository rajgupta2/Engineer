import Link from "next/link";

const card =function(props){
  return (
    <>
      <div  className="border border-black rounded-3xl m-4 hover:bg-zinc-400">
        <div className="px-6 py-4">
          <div className="text-3xl text-center py-4 justify-self-center border-b border-black">{props.Subject}</div>
          <p className="text-gray-700 pt-5 text-xl">
            {props.Description}
          </p>
        </div>
        <div className="px-6 pb-2">
          {
            (props.Notes) ? <Link href={`${props.Notes}`} onClick={props.onClick} target="_blank" className="Notes inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Notes</Link> : <span></span>
          }
          {
            (props.Tutorial) ? <Link href={`${props.Tutorial}`} onClick={props.onClick} target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tutorial</Link> : <span></span>
          }
          {
            (props.Practice) ? <Link href={`${props.Practice}`} onClick={props.onClick} target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Practice</Link> : <span></span>
          }
        </div>
        {
          (props.By) ? <div className="px-6 pb-2 ">
                       <span className=' float-right pb-2 '>By Raj Gupta</span>
                       </div>
                      : <span></span>
        }
      </div>
    </>
  )
}
export default card;