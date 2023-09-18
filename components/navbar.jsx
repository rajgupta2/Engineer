import Link from 'next/link'
const navbar = () => {
  return (
    <>
        <div className=' bg-slate-300 p-5 -z-40' style={{"position":"fixed","left":"0","top":"0","right":"0"}}>
            <Link href="/" className='text-3xl p-5 text-center font-bold'>Engineer</Link>
        </div>
    </>
  )
}
export default navbar;