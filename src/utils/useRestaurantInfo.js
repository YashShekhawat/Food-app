import { useState, useEffect } from "react";


const useRestaurantInfo = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchRestaurant();
    }, [])

    const fetchRestaurant = async () => {
        // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`);
        const data = await fetch(
            `https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D16.2893144%26lng%3D80.4604643%26restaurantId%3D${resId}%26catalog_qa%3Dundefined`);
        // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.2893144&lng=80.4604643&restaurantId=${resId}&catalog_qa=undefined`);
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