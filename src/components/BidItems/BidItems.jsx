import React, { useEffect, useState } from 'react';
import BidItem from './BidItem';

const BidItems = ({ handleBidClick, favItems }) => {
    const [BidItems, setBidItems] = useState([]);

    useEffect(() => {
        fetch("BidItems.json")
            .then((res) => res.json())
            .then((data) => setBidItems(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="bid-items p-0 m-0">
            <table className="table text-center">
                <thead>
                    <tr className="text-xl text-black">
                        <th className="text-left">Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody className="text-[#0E2954] text-lg">
                    {BidItems.map((item) => (
                        <BidItem
                            key={item.id}
                            BidItem={item}
                            handleBidClick={handleBidClick}
                            favItems={favItems}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BidItems;