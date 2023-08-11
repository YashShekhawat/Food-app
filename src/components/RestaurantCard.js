import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    //destructure resData.data  ?. is optional chaining
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, avgRatingString } = resData?.info;


    return (
        <div className="m-3 w-64 p-8 bg-gray-100  drop-shadow-lg hover:bg-gray-200">
            <div className=''>
                <img className="rounded-md h-36 w-64" src={CDN_URL + cloudinaryImageId}
                    alt="" />
            </div>
            <div className='info'>
                <h2 className=" text-2xl font-bold mt-3">{name}</h2>
                <p>{cuisines.join(', ')}</p>
                <p>{avgRating} stars</p>
                <p>{costForTwo}</p>
                <div className="flex items-center">
                    <p>Rating:</p>
                    <span className="bg-green-100 text-green-800 text-xs font-bold mr-2 px-2.5 py-0 rounded dark:bg-yellow-900 dark:text-yellow-300">{avgRatingString}</span>
                    {/* <h3>{deliveryTime} minutes</h3> */}
                </div>
                <div>
                    <button type="button" className="mt-5 text-gray-600 bg-white hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose Menu
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <button className="tailwind-style">Special Offer
                    <span className="shine"></span>
                </button>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard;