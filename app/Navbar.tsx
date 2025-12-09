export default function navigation(){
    return (
        <header className="fixed top-0 left-0 right-0 flex justify-center items-center w-full h-20 bg-black p-3 border-b-2 border-gray-500">
            <p className="mr-auto ml-3 text-blue-600 text-3xl">Portfolio</p>
            <nav className=" mr-auto">
                <ul className="flex  list-none text-white gap-x-10 text-lg">
                     <li className=""><a href="/" className="hover:text-blue-700 transition-colors duration-200 ">Home</a></li>
                    <li className=""><a href="#about-me" className="hover:text-blue-700 transition-colors duration-200 ">About</a></li>
                   
                <li className="hover:text-blue-700"><a href="/Project">Projects</a></li>
                <li className="hover:text-blue-700"><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
    
}

