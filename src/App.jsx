import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BidItems from './components/BidItems/BidItems';
import { IoHeartOutline } from "react-icons/io5";
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
function App() {
    const [favItems, setFavItems] = useState([]);
    // Function to add and update favourite item list
    const handleBidClick = (BidItem) => {
        setFavItems([...favItems, BidItem]);
    };
    // Function to remove an item from the favourites
    const handleRemoveFav = (id) => {
        const updatedFavItems = favItems.filter((item) => item.id !== id);
        setFavItems(updatedFavItems);
    }

    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>

            {/* main section */}
            <div className="main px-30 py-28 bg-[#EBF0F5] w-[1820]">
                <h1 className="text-[#0E2954] text-4xl mb-5 font-bold">Active Auctions</h1>
                <p className="text-xl mb-8">Bid on your favorite items</p>
                <div className="bid-container flex gap-6">
                    {/* Table of bid items */}
                    <div className="bid-table w-[70%] border-black bg-white shadow-sm rounded-2xl border-2">
                        <BidItems handleBidClick={handleBidClick} favItems={favItems}></BidItems>
                    </div>
                    {/* Favourite items */}
                    <div className="bidded-items w-[30%] flex flex-col items-center  bg-white shadow-sm rounded-2xl h-fit">
                        <h1 className="text-[#0E2954] text-2xl font-bold flex items-center">
                            <IoHeartOutline className="pl-4 w-15 h-25 text-gray-400" />
                            Favourite Items
                        </h1>
                        <div className="fav-items grid gap-6 px-5  text-[#0E2954] border-t-2 border-b-2 py-4 w-full">
                            {favItems.map((item) => (
                                <div key={item.id} className="card card-side shadow-sm rounded-2xl w-full">
                                    <figure>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 ml-2 object-cover"
                                        />
                                    </figure>
                                    <div className="card-body relative">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p className=''>${item.currentBidPrice.toFixed(2)}<span className='ml-6'>Bids: {item.bidsCount}</span></p>
                                        <FaXmark className='w-8 h-8 absolute top-0 right-0 cursor-pointer 'onClick={()=>handleRemoveFav(item.id)}/>
                                    </div>
                                </div>
                            ))}
                            {/* Display message if no items are in favourites */}
                            {favItems.length === 0 && (
                                <div className=' text-center text-gray-500 py-12 px-8 shadow-sm rounded-2xl'>
                                    <p>No items added to favourites yet.</p>
                                    <p className='max-w-72 text-sm pt-6'>Click on the heart icon to add items to your favourites.</p>
                                </div>
                            )}
                        
                        </div>
                        
                        <div className='text-xl flex mt-4 py-8 font-semibold flex items-center'>
                          <p>Total Bids Amount</p>
                          <p className='ml-10'>${favItems.reduce((total, item) => total + item.currentBidPrice, 0).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;