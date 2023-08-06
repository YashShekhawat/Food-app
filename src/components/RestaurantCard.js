import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    //destructure resData.data  ?. is optional chaining
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;


    return (
        <div className="m-3 w-64 p-8 bg-gray-100  drop-shadow-lg hover:bg-gray-200">
            <div className=''>
                <img className="rounded-md h-36 w-64" src={CDN_URL + cloudinaryImageId}
                    alt="" />
            </div>
            <div className='info'>
                <h2 className=" text-2xl">{name}</h2>
                <p>{cuisines.join(', ')}</p>
                <p>{avgRating} stars</p>
                <p>{costForTwo}</p>
                <h3>{deliveryTime} minutes</h3>
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