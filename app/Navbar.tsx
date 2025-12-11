export default function navigation(){
    return (
        <header className="fixed z-1000 top-0 left-0 right-0 flex justify-center items-center w-full h-20 bg-black p-3 shadow shadow-gray-800">
            <p className="mr-auto ml-3 text-blue-600 text-3xl">Portfolio</p>
            <nav className="mr-auto hidden md:block lg:block">
                <ul className="flex  list-none text-white gap-x-10 text-lg">
                     <li className=""><a href="/" className="hover:text-blue-700 transition-colors duration-200 ">Home</a></li>
                    <li className=""><a href="#about-me" className="hover:text-blue-700 transition-colors duration-200 ">About</a></li>
                   
                <li className="hover:text-blue-700"><a href="/project">Projects</a></li>
                <li className="hover:text-blue-700"><a href="/blogs">Blogs</a></li>
                <li className="hover:text-blue-700"><a href="#contactArea">Contact</a></li>
                </ul>
            </nav>
            <div>
               <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png" alt="menu--v6" className="md:hidden"/>
            </div>


        </header>
    )
    
}

