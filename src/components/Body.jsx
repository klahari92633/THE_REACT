import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import restaurantList from "../utils/mockData"
const Body = () => {
  // Local State Variable - supeer powerful variable
  const [listofRestaurants, setlistofRestaurants] = useState([
      {
    info: {
      id: "4037",
      name: "Lucky Restaurant",
      cloudinaryImageId: "uvapcfajlsbctskdhuhl",
      areaName: "Santosh Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "Tandoor"
      ],
      avgRating: 4.1,
      deliveryTime: 23,
    },
  },
   {
    info: {
      id: "233",
      name: "Agra Sweets Banjara",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/13/5cb18a86-4370-4f49-9925-77515c893898_2533.jpg",
      areaName: "Kharmanghat",
      costForTwo: "₹250 for two",
      cuisines: [
        "Sweets",
        "Desserts",
        "Chaat",
        "Snacks",
        "Beverages"
      ],
      avgRating: 2.2,
      deliveryTime: 21,
    },
  },
  ]);

  // normal js variable
  
  return (

    <div className="body">
      <div className="search-box">
        <input placeholder="search" />
        <CiSearch className="search-icon" />
      </div>
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=>
          {
            
           const filteredList = listofRestaurants.filter(
            (res)=> res.info.avgRating > 4
          );
            setlistofRestaurants(filteredList);
            }}
            >
              The top rated </button>
      </div>
      <div className="restaurant-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;