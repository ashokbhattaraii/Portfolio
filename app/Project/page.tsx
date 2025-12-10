const Projects = ()=>{
    return<>
    <div id="projectContainer" className="text-white relative top-6 flex w-full mx-auto">
        <div id="sideProjecList" className="h-[81vh] w-65 bg-black p-5 ml-5 rounded-2xl shadow shadow-gray-300 relative">
    <h2 className="text-blue-700 font-bold">PROJECTS</h2>
    <div id="lists" className="ml-6 mt-6">
        <ul className="">
            <li className="pb-4">Todo List</li>
            <li className="pb-4">Todo List</li>
            <li className="pb-4">Todo List</li>
            <li className="pb-4">Todo List</li>
            <li className="pb-4">Todo List</li>
            <button className="flex items-center gap-2 text-[12px] ml-6 text-blue-700">View all <span>
                <img width="13" height="13" src="https://img.icons8.com/ios/50/228BE6/forward--v1.png" alt="forward--v1"/></span></button>
        </ul>
        <button className="absolute bottom-15 right-2 rounded-2xl px-6 py-2 bg-blue-900 transition-all duration-300 hover:bg-blue-700">Hide</button>
    </div>
        </div>
        <div id="detailProjectDisplay" className="text-black ml-22 max-w-2/3 ">
<h2 className="text-blue-700 font-bold">Projects</h2>
<div id="detailedList" className="flex flex-wrap gap-8 text-blue-600">
    <div id="project1" className="h-30 w-30 bg-gray-500 relative rounded-2xl  flex justify-center">
        <p className="absolute -bottom-7 ">ToDo List</p>
    </div>

    <div id="project2" className="h-30 w-30 bg-gray-500 rounded-2xl relative">
        <p className="absolute -bottom-7 left-6">ToDo List</p>
    </div>

    <div id="project3" className="h-30 w-30 bg-gray-500 relative rounded-2xl  flex justify-center">
        <p className="absolute -bottom-7 ">ToDo List</p>
    </div>
    <div id="project4" className="h-30 w-30 bg-gray-500 relative rounded-2xl  flex justify-center">
        <p className="absolute -bottom-7 ">ToDo List</p>
    </div>

    <div id="AddProjects" className="h-30 w-30 border rounded-2xl relative flex justify-center">
        <img width="30" height="30" src="https://img.icons8.com/android/24/1A1A1A/plus.png" alt="add" className="absolute top-[40%] "/>
        <p className="absolute -bottom-7">Add</p>
    </div>
    
</div>
        </div>
    </div>
    </>
}

export default Projects