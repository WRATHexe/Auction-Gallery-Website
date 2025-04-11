import React from 'react';
import { IoHeartOutline, IoHeart } from "react-icons/io5";

const BidItem = ({ BidItem, handleBidClick, favItems }) => {
    const { id, image, title, currentBidPrice, timeLeft } = BidItem;

    // Check if the item is in the favorites list
    const isLoved = favItems.some((item) => item.id === id);

    const handleLoveClick = () => {
        // Add or remove from favorites
        handleBidClick(BidItem); 
    };

    return (
        <tr key={id} className="border-t-2 border-black hover:bg-gray-100">
            <td>
                <div className="flex items-center gap-10">
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
                    onClick={handleLoveClick}
                    className={`cursor-pointer text-5xl ${isLoved ? 'text-red-500' : 'text-gray-400'}`}
                >
                    {isLoved ? (
                        <IoHeart className="text-red-500" />
                    ) : (
                        <IoHeartOutline className="text-gray-400" />
                    )}
                </span>
            </td>
        </tr>
    );
};

export default BidItem;