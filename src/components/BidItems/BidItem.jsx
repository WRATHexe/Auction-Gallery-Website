import React from 'react';
import { IoHeartOutline, IoHeart } from "react-icons/io5";
const BidItem = ({ BidItem }) => {
    const { id, image, title, currentBidPrice, timeLeft } = BidItem;

    const [isLoved, setIsLoved] = React.useState(false);

    const handleLoveClick = () => {
        setIsLoved(!isLoved);
        <IoHeart className="pl-4 w-15 h-25 text-red-500 cursor-not-allowed pointer-none:" />
        alert( `"${title} added to favourites"`);
    };

    return (
        <tr key={id} className='border-t-2 border-black hover:bg-gray-100'>
            <td >
                <div className='flex items-center gap-10'>
                    <img 
                        src={image} 
                        alt={title}
                        className="w-30 h-28 rounded-lg object-cover" 
                    />
                    {title}
                </div>
            </td>
            <td>${currentBidPrice.toFixed(2)}</td>
            <td>{timeLeft}</td>
            <td>
                <span 
                    onClick={ !isLoved ? (handleLoveClick): null}
                >
                    {isLoved ? <IoHeart className="pl-4 w-15 h-25 text-red-500 cursor-not-allowed pointer-none: " /> :
                     <IoHeartOutline className="pl-4 w-15 h-25 text-gray-400" />}
                </span>
            </td>
        </tr>
    );
};

export default BidItem;