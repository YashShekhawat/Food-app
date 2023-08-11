import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { CDN_URL } from '../utils/constant';
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantInfo(resId);
    if (resInfo === null) return <Shimmer />;

    // const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    return (
        <div>
            <div>

                <ul className="flex flex-col justify-center items-center ">
                    {/* {itemCards.map((item) => (<li>{item.card.info.name}</li>))} */}
                    {itemCards?.map((item, index) => (
                        <li key={item?.card?.info?.id} className="m-2">
                            {/* {item?.card?.info?.name} - {" Rs "} {item?.card?.info?.price / 100} */}
                            <a href="#" className="p-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={CDN_URL + item?.card?.info?.imageId} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.card?.info?.name}</h5>
                                    <p className="mb-3 font-xl font-bold text-green-500 dark:text-gray-400">{" Rs "} {item?.card?.info?.price / 100}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.card?.info?.description}</p>
                                </div>
                            </a>
                            {/* 
                            <img className="rounded-md h-36 w-64" src={CDN_URL + item?.card?.info?.imageId}
                                alt="" /> */}
                        </li>

                    ))}
                    {/* {itemCards.map(item => (<li>item.card.info.name</li>))} */}
                    {/* {console.log(Object.values(restaurant.menu.items))} */}
                    {/* {Object.valu9es(restaurant?.menu?.items).map((item) => (<li key={item.id}>{item.name}</li>))} */}
                    <h1>restaurant menu</h1>

                    <li></li>
                </ul>


            </div>


        </div>
    )
}

export default RestaurantDetails;





