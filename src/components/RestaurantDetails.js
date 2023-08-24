import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { CDN_URL } from '../utils/constant';
import Shimmer from "./Shimmer";
import MenuShimmer from "./MenuShimmer";

const RestaurantDetails = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantInfo(resId);
    if (resInfo === null) return <MenuShimmer />;

    // const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 1
    const { name, areaName, avgRatingString, totalRatingsString, cuisines } = resInfo?.cards[0]?.card?.card.info;

    console.log("hello", name);
    console.log(resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    return (

        <div>
            <div>
                <div className="flex justify-center">
                    <div href="#" className="flex justify-end items-center  p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <div className="card-body flex mx-10">
                            <h1 className="card-title font text-2xl">{name}</h1>
                            <p className="font-sans text-sm">{areaName}</p>
                            <p className="font-sans text-sm">{cuisines.join(", ")}</p>
                        </div>
                        <div className="mx-20 bg-white  border border-gray-200 rounded-lg shadow hover:bg-gray-100 py-5 px-2 ">
                            <div className="flex items-center justify-center ">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx={10} cy={10} r={9} fill="url(#StoreRating20_svg__paint0_linear_32982_71567)" /><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white" /><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1={10} y1={1} x2={10} y2={19} gradientUnits="userSpaceOnUse"><stop stopColor="#21973B" /><stop offset={1} stopColor="#128540" /></linearGradient></defs></svg>
                                <p className="mx-1 fontR font-sans">{avgRatingString}</p>
                            </div>
                            <div className="my-1">
                                <p className="mx-1 ratingFont font-sans text-gray-500">{totalRatingsString}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className=" flex flex-wrap items-center justify-center">
                    {/* {itemCards.map((item) => (<li>{item.card.info.name}</li>))} */}
                    {itemCards?.map((item, index) => (
                        <li key={item?.card?.info?.id} className="m-2">
                            {/* {item?.card?.info?.name} - {" Rs "} {item?.card?.info?.price / 100} */}
                            <a href="#" className="p-5 flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={CDN_URL + item?.card?.info?.imageId} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.card?.info?.name}</h5>
                                    <p className="mb-3 font-xl font-bold text-green-500 dark:text-gray-400">{" Rs "} {item?.card?.info?.price / 100}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.card?.info?.description}</p>
                                </div>
                            </a>
                      </li>
                    ))}
                </ul>


            </div>


        </div >
    )
}

export default RestaurantDetails;





