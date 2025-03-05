function Carousel() {
    return (
      <>
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-3xl font-bold">Welcome to LeetCode</h2>
              <p className="text-lg">Sharpen your coding skills with the best problems.</p>
            </div> */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
  
          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-3xl font-bold">Daily Challenges</h2>
              <p className="text-lg">Solve problems daily and stay ahead of the curve.</p>
            </div>
            {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div> */}
          </div>
  
          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-3xl font-bold">Compete in Contests</h2>
              <p className="text-lg">Join weekly contests and climb the leaderboard.</p>
            </div> */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
  
          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-3xl font-bold">Ace Your Interviews</h2>
              <p className="text-lg">Practice with real-world interview questions.</p>
            </div> */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Carousel;
  