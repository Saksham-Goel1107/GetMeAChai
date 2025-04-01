export default function Home() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b  to-gray-900 text-white">

      <div className="w-4/5 mx-auto text-center pt-20">
        <h1 className="font-extrabold text-3xl md:text-3xl lg:text-5xl mb-3">
          Get Me A Chai <span><img className="inline-block mb-3" src="/tea.gif" alt="Tea" width={44} /></span>
        </h1>
        <p className="text-lg md:text-md lg:text-xl mb-6 font-medium">
          A Crowdfunding platform for creators. Get funded by your fans and
          followers. Start Now!
        </p>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-lg px-5 py-2 cursor-pointer"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-lg px-5 py-2 cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-800 h-1 mt-[10rem]"></div>
      <div>
        <h1 className="text-center text-2xl font-bold mt-12">Your fans can buy you a chai</h1>
        <div className="flex justify-around mt-14">
          <div className="flex flex-col items-center"><img className="align-center mb-5 rounded-full h-25 w-25" src="/human.gif" alt="Human" width={44}/>
            <h5 className="font-bold mb-2">Fund Yourself</h5>
            <p className=" font-medium">Your fans are available to help you</p>
          </div>
          <div className="flex flex-col items-center"><img className="mb-5 rounded-full h-25 w-25" src="/coin.gif" alt="Coin" width={44}/>
            <h5 className=" font-bold mb-2">Fund Yourself</h5>
            <p className=" font-medium">Your fans are available to help you</p>
          </div>
          <div className="flex flex-col items-center"><img className="mb-5 rounded-full h-25 w-25" src="fans.gif" alt="Fans" width={44}/>
          <h5 className="text-center font-bold mb-2">Fans wants to help</h5>
          <p className=" font-medium">Your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 h-1 mt-[8rem]"></div>
      <div>
        <h2 className="text-center font-extrabold text-3xl mt-12">Learn More About Us</h2>
        <p className="text-center mb-10 mt-17 mx-10">At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.</p>
        <p className="text-center mb-10 mx-10">Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Get Me A Chai is here to help you achieve your goals.</p>
        <p className="text-center mb-10 mx-10">We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.</p>
      </div>
    </div>
  );
}
