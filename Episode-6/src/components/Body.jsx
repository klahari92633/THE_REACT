import RestaurantCard from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] =
    useState([]);
    const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  
const fetchData = async () => {
  try {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3532727&lng=78.52309&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const proxyURL =
      "https://corsproxy.io/?key=YOUR_API_KEY&url=" +
      encodeURIComponent(swiggyURL);

    const response = await fetch(proxyURL);

    const json = await response.json();

    if (!response.ok) {
      throw new Error(
        json.message || `HTTP error: ${response.status}`
      );
    }

    console.log("Swiggy data:", json);

    // Get all cards from the response
    const cards = json?.data?.cards || [];

    // Find the restaurant grid
    const restaurantCard = cards.find(
      (card) =>
        card?.card?.card?.id === "restaurant_grid_listing_v2"
    );

    // Extract restaurant data
    const restaurants =
      restaurantCard?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants || [];

    console.log("Restaurant cards:", restaurants);

    // Update React state
    setlistofRestaurants(restaurants);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
};

const filteredRestaurants = listofRestaurants.filter(
  (restaurant) => {
    return  restaurant.info.name
    .toLowerCase()
    .includes(searchText.toLowerCase());
  }
);


  return (listofRestaurants.length === 0)?<Shimmer/>:(
    <div className="body">
      <div className="search-box">
        <input
        value = {searchText}
        onChange={(e)=>{
          setsearchText(e.target.value)
        }}
        placeholder="search" />
        <CiSearch className="search-icon" />
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );

            setlistofRestaurants(filteredList);
          }}
        >
          The top rated
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
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