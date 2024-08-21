import { useNavigate } from "react-router-dom";
import Hero from "./Landing";

  export default function IndexPage() {
    const navigate = useNavigate();
  // const handle = ()=>{
  //   navigate("/event");
  // }
    return (
      <>
      <Hero/>
      <div className="mt-1 flex flex-col">
      {/* <div className="mt-1 flex flex-col relative">
  <div className="hidden sm:block relative">
    <div className="flex items-center inset-0 relative">
      <img 
        src="https://d2r3fkmprkayl1.cloudfront.net/Eventtitans-new-img/EventTitans-inner/og-Session+Management.png" 
        alt="Event Management" 
        className="w-full h-[500px]"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
        <h1 className="text-white text-5xl font-bold leading-[70px]">"Event management is turning an {<br/>}idea into a memorable experience"</h1>
      </div>
    </div>
  </div>
</div> */}


  <div className="mx-10 my-5 grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-5 ">
    {/* Card 1 */}
    <div className="border p-5 rounded-lg shadow-lg">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZXSrj7baZR3xoFKZGSnwpz0dlJmrfuBLVA&s" alt="Event 1" className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Networking Event </h3>
      <p className="text-sm text-gray-500 mb-1">Date: Aug 25, 2024</p>
      <p className="text-sm text-gray-500 mb-4">Time: 5:00 PM</p>
      <p className="text-sm mb-4">This is a brief description of Event 1, detailing what attendees can expect.</p>
      <button  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Ticket</button>
    </div>

    {/* Card 2 */}
    <div className="border p-5 rounded-lg shadow-lg">
      <img src="data:image/jpeg;base64,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" alt="Event 2" className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Campus Event 2024</h3>
      <p className="text-sm text-gray-500 mb-1">Date: Aug 28, 2024</p>
      <p className="text-sm text-gray-500 mb-4">Time: 7:00 PM</p>
      <p className="text-sm mb-4">This is a brief description of Event 2, providing some insight into the event.</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Ticket</button>
    </div>

    {/* Card 3 */}
    <div className="border p-5 rounded-lg shadow-lg">
      <img src="https://thumbs.dreamstime.com/b/hackathon-background-hack-marathon-coding-event-glitch-poster-saturated-binary-data-code-flux-postmodern-cyberpunk-monitor-282721813.jpg" alt="Event 3" className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Hackfest 2024</h3>
      <p className="text-sm text-gray-500 mb-1">Date: Sep 2, 2024</p>
      <p className="text-sm text-gray-500 mb-4">Time: 6:00 PM</p>
      <p className="text-sm mb-4">A quick overview of Event 3, describing its purpose and attractions.</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Ticket</button>
    </div>

    {/* Card 4 */}
    <div className="border p-5 rounded-lg shadow-lg">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ItuAgkdH-G-ZP0cOk-Dpql286-hYCAC6Kg&s" alt="Event 4" className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Advent Of Code </h3>
      <p className="text-sm text-gray-500 mb-1">Date: Sep 5, 2024</p>
      <p className="text-sm text-gray-500 mb-4">Time: 8:00 PM</p>
      <p className="text-sm mb-4">Brief details about Event 4, highlighting the key points of interest.</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Ticket</button>
    </div>
  </div>
</div>

      </>
        
      )
  }
  