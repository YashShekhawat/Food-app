import { useState, useEffect } from "react";


const useRestaurantInfo = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchRestaurant();
    }, [])

    const fetchRestaurant = async () => {
        // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`);
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.2893144&lng=80.4604643&restaurantId=${resId}&catalog_qa=undefined`);
        const json = await data.json();
        setResInfo(json.data);
        console.log("res menu", json.data);
    }

    return resInfo;
}

export default useRestaurantInfo;
















// const [resInfo, setResInfo] = useState(null);

// useEffect(() => {
//     getRestaurantInfo();
// }, [])


// const getRestaurantInfo = async () => {
//     const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
//     );
//     const json = await data.json();

//     setResInfo(json.data);
// };

// return resInfo;