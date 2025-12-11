import Expertise from "./Components/expertise";
import Contact from "./Components/contact"
export default function Home(){
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-10 ">
      <img src="./1731638746008.jpeg" alt="profile pic" className="w-60 h-60 rounded-full  shadow-xl shadow-gray-700
      "/>
      <div>
        <p className="flex items-center justify-center text-2xl text-blue-700 mt-5 transform  transition-all duration-200 hover:text-3xl font-extrabold"><span className="text-5xl">A</span>shok <span className="text-5xl">B</span>hattarai</p>
      </div>
      <div className="flex flex-col justify-center items-center my-6">
        <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none whitespace-nowrap">Frontend Developer. </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mt-2">Always Becoming.</p>
      </div>
      <div className="flex justify-center items-center my-6 w-120">
        <p className="text-gray-500">I believe mastery is a journey, not a destination, staying fiercely committed to growth. This approach guarantees thoughtful execution and highly reliable code on every platform.</p>
      </div>
      <div className="flex gap-10 justify-between items-center mt-4">
        <button className=" border-2 rounded-2xl p-2 bg-blue-700 text-black font-semibold transition duration-300 hover:bg-blue-800">View My Work</button>
        <button className="border-2 border-blue-700 p-2 rounded-2xl font-semibold transition duration-300 hover:bg-gray-950">Get in Touch</button>
      </div>
  </div>

  <div className="my-10 p-10 flex gap-4 justify-center items-center max-w-150 md:max-w-2/3 mx-auto" id="about-me">
    <img src="./about-me.jpg" alt="about-me-model"  className="h-100 w-60 rounded-lg shadow-2xl shadow-gray-800"/>
<div>
  <p className="mb-4 text-xl font-bold md:text-3xl lg:text-4xl">Build. Learn. Iterate. Enduring Digital Experiences.</p>
      <p className="text-gray-700 text-[0.7rem] ">I'm Ashok Bhattarai, a passionate Computer Science student pursuing B.Sc IT (Hons) at Lord Buddha Education Foundation in collaboration with Asia Pacific University. Based in Lalitpur, Nepal, I specialize in web development with expertise in HTML, CSS, JavaScript, and MySQL. I hold certifications in Responsive Web Design and JavaScript Algorithms and Data Structures, and I'm currently working as a QA Intern at Rumsan, where I'm gaining hands-on experience in quality assurance and blockchain technology. I'm driven by a passion for creating responsive, user-friendly applications and ensuring software quality. My approach combines technical skills with attention to detail and a commitment to continuous learning. Whether it's building clean interfaces or identifying edge cases in testing, I strive to deliver work that meets the highest standards. I'm always excited to take on new challenges and contribute to meaningful projects that make a positive impact.</p>
</div>
  </div>
    <Expertise/>
    <Contact/>
  </>
  );
}