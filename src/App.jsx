import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BidItems from './components/BidItems/BidItems'

function App() {

  const handleBidClick = (BidItem) => {
    console.log(`Bid on ${BidItem.title}`);
  }

  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        

        {/* main section */}
        <div className='main px-36 py-28 bg-[#EBF0F5] w-[1820]'>
          <h1 className='text-[#0E2954] text-4xl mb-5 font-bold'>Active Auctions</h1>
          <p className='text-xl mb-8'>Bid on your favorite items</p>
          <div className="bid-container flex gap-6">
            {/* Table of bid items */}
            <div className="bid-table w-[70%] border-black bg-white shadow-sm rounded-2xl border-2">
              <BidItems handleBidClick={handleBidClick}></BidItems>
            </div>
            {/* Bidded items */}
            <div className='bidded-items w-[30%]'>
              <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default App
 