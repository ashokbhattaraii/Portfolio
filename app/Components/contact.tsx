"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Resualble_Components/Button";
import { error } from "console";

export default function Contact() {
  const [name, setName] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  
  const validationRules ={
    name :{
      required:"Please fill the name",
      minLength:{
        value:2,
        message:"Name must be of atleast 2 characters"
      }
    },
     email: {
      required: "Invalid email format",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email format.",
      }
    },

    message :{
      required: "Enter your message",
      minLength:{
        value:5,
        message:"At least one line"
      }
    }
   
  }



  const onSubmit = (data:any)=>{
    console.log(data)
    console.log(data.name)
    
    console.log(data.email)
    console.log(data.message)
    alert("Messsage sent successfully")
  }

  return (
    <>
      <div
        className=" flex flex-wrap max-w-4/5 gray-900 items-center m-auto text-white p-4 mb-10 relative shadow shadow-gray-700"
        id="contactArea"
      >
        <h1 className="text-blue-700 font-bold text-2xl">Get In Touch</h1>
        <div className="flex flex-col justify-center  md:flex-row lg:flex-row">
          <p className="m-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae possimus ea fuga animi culpa, natus neque odio
            officiis voluptate
          </p>
          <p className="m-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae possimus ea fuga animi culpa, natus neque odio
            officiis voluptate
          </p>

          <form
            
            id="message-box"
            className="mx-auto p-5 bg-white rounded-2xl z-10 w-4/5"
          >
            <h1 className="text-blue-700 font-bold text-2xl">Message</h1>
            <div id="name" className="relative flex items-center mt-4">
              <input
                type="text"
                className={`border rounded-2xl border-black text-black p-2 pl-9 outline-0 w-full placeholder:text-gray-700  ${errors.name? 'border-red-500': 'border-black'}`}
                placeholder="Enter your name"
               
                {...register("name", validationRules.name)}
               
              />
              <img
                className="absolute bottom-2.2 left-1"
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                alt="user-male-circle"
              />
            </div>

            <div id="email" className="relative flex items-center mt-4">
              <input
                type="text"
                className={`border rounded-2xl border-black text-black p-2 pl-9 outline-0 w-full placeholder:text-gray-700 ${errors.email? 'border-red-500': 'border-black'}`}
                placeholder="@gmail.com"
                {...register("email", validationRules.email)}
              />
              <img
                className="absolute bottom-2.2 left-1"
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/circled-envelope.png"
                alt="user-email-circle"
              />
            </div>

            <textarea
              id="user-message"
              placeholder="Type message here"
              className={`border rounded-2xl border-black  p-3 outline-0 w-full mt-4 text-black ${errors.message? 'border-red-500': 'border-black'}`}
              rows={5}
              {...register("message",validationRules.message)}
            ></textarea>
            <Button variant="primary" className="w-full" type='submit' onClick={handleSubmit(onSubmit)}>
              Click Me
            </Button>
          </form>
        </div>
        <div className="bg-[url('/sumaid-pal-singh-bakshi-vq-A3vOlEr0-unsplash.jpg')] bg-cover w-full h-2/4 bottom-0 flex gap-50  md:absolute right-0">
          <div id="contactIndo">
            <div id="details" className="mt-13">
              <div
                id="email"
                className="flex gap-5 items-center ml-6 mt-6 font-bold"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png"
                  alt="new-post"
                />
                <p>ashok@contact.com</p>
              </div>

              <div
                id="phone"
                className="flex gap-5 items-center ml-6 mt-6 font-bold"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/phone-disconnected.png"
                  alt="new-post"
                />
                <p>+977 9700000000</p>
              </div>

              <div
                id="phone"
                className="flex gap-5 items-center ml-6 mt-6 font-bold"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png"
                  alt="new-post"
                />
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div
            id="socialLinks"
            className="absolute flex flex-col right-5 md:absolute z-100 md:bottom-6 md:right-1/2 md:flex gap-4 mt-3 md:flex-col "
          >
            <img src="./linkedin.svg" alt="linkedin" className="w-11 h-11 " />
            <img
              src="./instagram (1).svg"
              alt="Instagram"
              className="w-11 h-11 "
            />
            <img
              src="./youtube-icon.svg"
              alt="Youtube"
              className="w-11 h-11 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
