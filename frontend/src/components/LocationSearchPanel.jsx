import React from "react";

const LocationSearchPanel = (props) => {

    // sample array for location
    const locations = [
        "24B, near kapoor cafe, School, Bhopal", 
        "22B, near khan cafe, School, Bhopal", 
        "4B, near singhania cafe, School, Bhopal", 
        "24A, near mangal cafe, School, Bhopal", 
    ]

    return <div>
        {/* this is just sample data */}
        {
            locations.map(function(element,idx){
                return <div key={idx} onClick={()=> {
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className="flex gap-4 border-2 px-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium"> {element}</h4>
            </div>
            })
        }
        
       
        
    </div>
}

export default LocationSearchPanel;