import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    //destructure resData.data  ?. is optional chaining
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, avgRatingString } = resData?.info;

    return (
        <div className="m-3 w-80 p-8 bg-gray-50 drop-shadow-lg hover:bg-gray-200 rounded-2xl">
            <div className="relative cursor-pointer">
                <a href="#">
                    <img className="rounded-2xl h-36 w-80 object-cover" src={CDN_URL + cloudinaryImageId}
                        alt="" />
                </a>
                <figcaption className="absolute z-10 px-3 text-lg text-white bottom-3">
                    <p className="font-bold inline-block specialText z-10">{resData?.info.aggregatedDiscountInfoV3?.header} {resData?.info.aggregatedDiscountInfoV3.subHeader}</p>
                </figcaption>
                <div className="hello rounded-2xl absolute w-24 mb-10 ">
                </div>
            </div>

            <div className='info'>
                <h4 className="font-sans text-xl font-bold mt-6">{name}</h4>
                <p id="limited-text">{cuisines.join(', ')}</p>

                <div className="flex my-2">
                    <div className="flex items-center">
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx={10} cy={10} r={9} fill="url(#StoreRating20_svg__paint0_linear_32982_71567)" /><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white" /><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1={10} y1={1} x2={10} y2={19} gradientUnits="userSpaceOnUse"><stop stopColor="#21973B" /><stop offset={1} stopColor="#128540" /></linearGradient></defs></svg>
                        <p className="mx-1 font-sans">{avgRatingString}</p>
                    </div>
                    <p className="flex items-center ml-14"><svg className="mr-1" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>{costForTwo}</p>
                    <div>
                    </div>
                </div>
                <button type="button" className=" mt-5 text-white bg-blue-500 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center">
                    Browse Menu
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <button className="tailwind-style font-sans">Top Rated
                    <span className="shine"></span>
                </button>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard;