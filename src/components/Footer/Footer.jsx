import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-auto py-6 grid items-center justify-center py-32">
            
                <h1 className="btn btn-ghost text-3xl "><span className='text-blue-950'>Auction</span><span className='text-yellow-300 font-bold'>Gallery</span>
                </h1>
                <div className=" flex justify-center">
                    <ul className="menu menu-horizontal px-1 text-2xl gap-4 ">
                                <li><a>Bid.</a></li>
                                <li><a>Win.</a></li>
                                <li><a>Own.</a></li>
                            </ul>
                </div>
                <div className=" flex justify-center mt-3 mb-4">
                        <ul className="menu menu-horizontal px-1 text-2xl gap-10 ">
                            <li><a>Home</a></li>
                            <li><a>Auctions</a></li>
                            <li><a>Categories</a></li>
                            <li><a>How to works</a></li>
                        </ul>
                </div>
                <p className='text-lg text-center'>© 2025 AuctionHub. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;

