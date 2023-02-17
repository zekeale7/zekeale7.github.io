import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../css/style.css'
import image from  "/public/profile.jpg"
import background from  "/public/pexels-aleksandar-pasaric-3310691.jpg"

const ProjectSection = () => {

    const myRefTwo = useRef();

    const [myElementIsVisibleTwo, setMyElementIsVisibleTwo] = useState();
    
    //Observer for second div
    useEffect(() => {
      const observer_two = new IntersectionObserver((entries) => {
      const entry_two = entries[0];
        setMyElementIsVisibleTwo(entry_two.isIntersecting)
      })
      observer_two.observe(myRefTwo.current)
    });
    
  return (

    <div class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-auto items-center justify-items-center">
          <h1 class="text-black google-font text-5xl text-center pb-16 ">Projects</h1>
          <div ref={myRefTwo} class='bg-gradient-to-r from-pink-500 to-yellow-500 grid grid-cols-2 grid-rows-2 gap-y-16 items-center justify-items-center lg:grid-cols-1 sm:px-7'>

          <div class={`${myElementIsVisibleTwo ? " bg-gradient-to-r from-pink-500 to-yellow-500 transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full"
            : "bg-gradient-to-r from-pink-500 to-yellow-500 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            <div class={`${myElementIsVisibleTwo ? " bg-gradient-to-r from-pink-500 to-yellow-500 transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl  bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full "
            : "bg-gradient-to-r from-pink-500 to-yellow-500 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>

            <div class={`${myElementIsVisibleTwo ? " bg-gradient-to-r from-pink-500 to-yellow-500 transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full "
            : "bg-gradient-to-r from-pink-500 to-yellow-500 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            <div class={`${myElementIsVisibleTwo ? " bg-gradient-to-r from-pink-500 to-yellow-500 transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full "
            : "bg-gradient-to-r from-pink-500 to-yellow-500 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            </div>
        </div>
  )
}

export default ProjectSection
