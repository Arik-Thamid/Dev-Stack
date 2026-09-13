import Logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
   <>
    <nav className="sticky top-0 bg-white border-b border-gray-100">
     <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">

        <img className="w-28 md:w-auto" src={Logo} alt="logo" />

        <ul className="hidden md:flex items-center gap-7 text-sm">
            <li><a className="text-pink-500" href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
            <button className="text-sm">Sign In</button>

            <button className="bg-[#D91B7E] text-[#FFFFFF] text-xs md:text-sm px-3 md:px-5 py-2 rounded-full">
            Sign Up
            </button>
        </div>

         </div>
     </div>
    </nav>

   </>
  )
}

export default Navbar