import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)]  lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-center bg-no-repeat bg-cover min-h-screen flex items-center justify-center text-white">
      <div className="mt-28 lg:mt-0  md:w-full lg:w-3/4 flex flex-col lg:flex-row md:text-center justify-between items-center">
        <div className="w-full lg:w-[37%] flex flex-col items-center ">
          <h2 className="text-lg w-full lg:text-left text-center">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-9xl my-4">SPACE</h1>
          <p className="w-3/4 text-center lg:w-full text-sm leading-relaxed text-white/80">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link href="/destination" className="w-[200px] h-[200px] text-black bg-white rounded-full flex items-center justify-center text-xl font-bold mt-24 lg:mt-0">EXPLORE</Link>
      </div>
    </div>
  )
}
