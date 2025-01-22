import Link from 'next/link';

const navbar = () => {
  return (
    <div className='row-auto'>
        <div className='bg-slate-300 p-5 -z-40 ' style={{"position":"fixed","left":"0","top":"0","right":"0"}}>
           <div className='columns-2 w-8 inline'>
           <Link href="/" className='text-3xl p-5 text-center font-bold'>Engineer</Link>
           </div>
           <div className='inline columns-4'>
            <p className='pb-0 text-sm' style={{display:'inline'}}>Connect us:  </p>
             {/*   <Link href="https://www.youtube.com/@RajGupta-tz7dq/videos" className="p-2"><i className="bi bi-youtube text-xl" style={{color:'#dd3427'}} ></i></Link>
               */} <Link href="https://www.github.com/rajgupta2/" className="p-2"><i className="bi bi-github text-xl" style={{color:'#2b3137'}} ></i></Link>
                <Link href="https://www.linkedin.com/in/raj-gupta-6b5655291" target='_blank' className="p-2"><i className="bi bi-linkedin text-xl" style={{color:'#347dc0'}}  ></i></Link>
           </div>
        </div>
    </div>
  )
}
/*<div style={{"position":"absolute","top":"15px","right":"15%"}}>
            <input id="searchBar" type="text" placeholder='Search Here..'
             className='mr-4 rounded-3xl w-72 p-4 h-8'/>
            <input id="searchBtn" type='button' value="Search" className=' cursor-pointer bg-green-300 rounded-xl p-2'/>
</div>*/
export default navbar;
