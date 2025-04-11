import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero h-[730px] w-[1817px] justify-start"
            style={{
                backgroundImage: "url('../src/assets/Banner-min.jpg')",
                
                backgroundSize: '135%',

                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="hero-content flex-col mx-36 max-w-2xl items-start">
                    <h1 className="text-5xl font-bold text-white">Discover Treasures from Every Corner</h1>
                    <p className="my-5 text-xl opacity-80 text-white">
                        Explore a world of unique finds, from antique artifacts to modern masterpieces. Whether you're searching for a rare gem or a timeless classic, our auctions offer something special for everyone.
                    </p>
                    <button className="btn btn-primary text-black bg-white rounded-full border-0">Explore Auctions</button>

            </div>
        </div>
    );
};

export default Hero;