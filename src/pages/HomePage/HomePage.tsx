import { Button } from "@/components/ui/button";
import { Header } from "../../components/Header/Header";

import netflix_logo from "../../assets/trusted_by/netflix_logo.png";
import google_logo from "../../assets/trusted_by/google_logo.png";
import youtube_logo from "../../assets/trusted_by/youtube_logo.png";
import prime_logo from "../../assets/trusted_by/prime_logo.png";
import play_logo from "../../assets/trusted_by/play_logo.png";
import ReactPlayer from "react-player";
export const HomePage = () => {
  const IMAGES_ARR = [
    { name: "netflix logo", link: netflix_logo },
    { name: "google logo", link: google_logo },
    { name: "youtube logo", link: youtube_logo },
    { name: "prime logo", link: prime_logo },
    { name: "play logo", link: play_logo },
  ];
  return (
    <main>
      <Header />
      {/* Header section */}
      <section className="mt-[200px]">
        <h1 className="my-8 font-semibold text-xl">
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            AI Based
          </span>{" "}
          proctoring made easy for your organization.
        </h1>
        <h1 className="my-10 font-bold text-6xl">
          Increase your organization performance{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-tight">
            using AI
          </span>
        </h1>
        <Button className="">Schedule a Demo</Button>
      </section>
      {/* Trusted by section */}
      <section className="mt-[200px]">
        <h1 className="font-semibold">Trusted by</h1>
        <div className="flex gap-20 justify-center">
          {IMAGES_ARR.map((logo, index) => {
            return (
              <img
                key={index}
                src={logo.link}
                alt={logo.name}
                className="w-20 object-contain"
              />
            );
          })}
        </div>
      </section>
      {/* Product video demo */}
      <section>
        <div className="w-full flex justify-center bg-slate-50 p-2 rounded-lg">
          <div style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls={true}
              width="1200px"
              height="700px"
            />
          </div>
        </div>
      </section>
      {/* user testimonials */}
      <section className="my-8">
        <h1 className="font-semibold mb-4">
          Listen to what our users say about us
        </h1>
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
          <div className="col-span-1 row-span-1 bg-gray-200 p-4 rounded-lg">
            Item One
          </div>
          <div className="col-span-2 row-span-2 bg-gray-200 p-4 rounded-lg">
            Item Two
          </div>
          <div className="col-span-1 row-span-2 bg-gray-200 p-4 rounded-lg">
            Item Three
          </div>
          <div className="col-span-1 row-span-1 bg-gray-200 p-4 rounded-lg">
            Item Four
          </div>
          <div className="col-span-1 row-span-1 bg-gray-200 p-4 rounded-lg">
            Item Five
          </div>
          <div className="col-span-1 row-span-2 bg-gray-200 p-4 rounded-lg">
            Item Six
          </div>
          <div className="col-span-1 row-span-1 bg-gray-200 p-4 rounded-lg">
            Item Seven
          </div>

          <div className="col-span-1 row-span-2 bg-gray-200 p-4 rounded-lg">
            Item Eight
          </div>
        </div>
      </section>
    </main>
  );
};
