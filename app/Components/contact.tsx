export default function Contact() {
    return <>
    <div className=" flex flex-wrap w-4/5 rounded-2xl bg-gray-900 items-center m-auto text-white p-4 mb-10 relative shadow shadow-gray-700">
        <h1 className="text-blue-700 font-bold text-2xl">Get In Touch</h1>
        <div className="flex">
            <span className="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae possimus ea fuga animi culpa, natus neque odio officiis voluptate</span>
             <span className="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae possimus ea fuga animi culpa, natus neque odio officiis voluptate</span>
             
             <div id="message-box" className="p-5 bg-white rounded-2xl z-10" >
            <h1 className="text-blue-700 font-bold text-2xl">Message</h1>
            <div id="name" className="relative flex items-center mt-4">
                <input type="text" className="border rounded-2xl border-black text-black p-2 pl-9 outline-0 placeholder:text-gray-700" placeholder="Enter your name"/>
            <img className="absolute bottom-2.2 left-1" width="30" height="30" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>
            </div>

            <div id="name" className="relative flex items-center mt-4">
                <input type="text" className="border rounded-2xl border-black text-black p-2 pl-9 outline-0 placeholder:text-gray-700" placeholder="Enter your name"/>
            <img className="absolute bottom-2.2 left-1" width="30" height="30" src="https://img.icons8.com/ios-filled/50/circled-envelope.png" alt="user-email-circle"/>
            </div>

            <textarea name="" id="user-message" placeholder="Type message here" className="border rounded-2xl border-black  p-3 outline-0 w-full mt-4 text-black" rows={5}></textarea>

            <button className="w-full bg-blue-700 text-center p-2 rounded-2xl text-2xl text-white font-bold" >Send</button>
        </div>
        </div>
        <div className="bg-[url('/sumaid-pal-singh-bakshi-vq-A3vOlEr0-unsplash.jpg')] bg-cover w-full h-2/4 bottom-0 absolute right-0">
       <div id="details" className="mt-11">
         <div id="email" className="flex gap-5 items-center ml-6 mt-6 font-bold">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" alt="new-post"/>
            <p>ashok@contact.com</p>
        </div>

         <div id="phone" className="flex gap-5 items-center ml-6 mt-6 font-bold">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/phone-disconnected.png" alt="new-post"/>
            <p>+977 9700000000</p>
        </div>

        <div id="phone" className="flex gap-5 items-center ml-6 mt-6 font-bold">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" alt="new-post"/>
            <p>Kathmandu, Nepal</p>
        </div>

       </div>
        </div>
    </div>
    </>
}