'use client'
import Button from '../Resualble_Components/Button'
import SideBar from '../Components/projects/sidebar'
import DetailedProjects from '../Components/projects/detailedProjects'
const Projects = ()=>{
    return<>
    <div id="projectContainer" className="text-white relative top-6 flex w-full mx-auto">
        <SideBar/>
        <DetailedProjects/>
    </div>
    </>
}

export default Projects