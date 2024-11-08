
function Banner() {
  return (
    <div className='relative h-screen bg-cover bg-center bg-[url("/images/banner.jpg")]'>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold">Welcome to <span className='text-teal-450'>Z-Krishi</span></h1>
          <p className="mt-4 max-w-[720px]">Z-Krishi is designed to support <span className='text-purple-450 font-semibold'>sustainable farming</span>, offering features like an <span className="text-purple-450 font-semibold">AI-based</span> crop suggestion system, <span className='text-purple-450 font-semibold'>real-time</span> weather data, a community forum for farmers, and a marketplace focused on organic and sustainable farming products.</p>
          <div className='flex flex-col md:flex-row items-center justify-center mt-4 gap-2'>
            <button className='bg-teal-450 text-sm border border-transparent hover:bg-transparent hover:border hover:text-white hover:border-teal-450 text-black shadow-md hover:shadow-lg transition duration-300 px-3 py-2 rounded-md'>Get Started</button>
            <button className='text-sm bg-transparent text-purple-450 border hover:bg-purple-450 hover:text-black border-purple-450 shadow-md hover:shadow-lg transition duration-300 px-3 py-2 rounded-md'>Join the community</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
