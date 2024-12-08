import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import AttractionHeader from "../../components/header/AttractionHeader";
import Place from "../../components/place/Place";
import places from "../../data_source/places";

const Attraction = () => {
  const [newPlaces,updatePlace] = useState([
    {
      id: 0,
      imgSrc: "https://t4.ftcdn.net/jpg/03/67/78/71/240_F_367787185_X6BsWfjfyNOLMjKofGviONiDTgetB7NZ.jpg",
      mapLink: "",
      alternate:"Pakistan",
      placeName: "All-in-One",
      city: "Pakistan",
      details:"Pakistan is a land of breathtaking natural beauty and rich cultural heritage, with countless places that are worth praising. Here are some reasons to praise Pakistan for its places like Majestic Mountains, Lush Valleys, Historical Treasures ,Coastal Beauty, Cultural Richness, Wildlife Sanctuaries. In summary, Pakistan is a treasure trove of natural beauty, historical treasures, cultural richness, and wildlife sanctuaries, make it a destination worth praising for its unique and awe-inspiring places."
  }
]);

  const filterPlaces = (city) =>{
    updatePlace(()=>{
      return places.filter((val)=>{
        return val.city.toLowerCase() === city.toLowerCase();
      });
    })
  }

  return (
    <div>
      <Navbar />
      <AttractionHeader filterEvent={filterPlaces}/>
      {
        newPlaces.map((val)=>{
          return(
          <Place id={val.id} imgSrc={val.imgSrc} mapLink={val.mapLink} alternate={val.alternate}
          placeName={val.placeName} city={val.city} details={val.details}/>
          )
        })
      }
    </div>
  );
};

export default Attraction;
