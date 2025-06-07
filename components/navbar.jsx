import Link from 'next/link';
import { useRef } from 'react';

const navbar = () => {
  return (
      <div className='columns-2xs sm:columns-2 p-2 z-40 lg:px-32 sm:px-8 border-b  bg-white' style={{ "position": "fixed", "left": "0", "top": "0", "right": "0" }}>
        <div>
          <Link href="/" className='sm:text-2xl'>Engineer - Technotes</Link>
        </div>
        <div className='sm:text-end'>
          <span>Connect with me:</span>
          {
            /*
           <Link href="https://www.youtube.com/@RajGupta-tz7dq/videos" className="p-2"><i className="bi bi-youtube text-xl" style={{color:'#dd3427'}} ></i></Link>
            */
          }
          <Link href="https://www.github.com/rajgupta2/" className="p-2"><i className="bi bi-github text-xl"></i></Link>
          <Link href="https://www.linkedin.com/in/raj-gupta-6b5655291" target='_blank' className="p-2"><i className="bi bi-linkedin text-xl" style={{ color: '#347dc0' }}  ></i></Link>
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
