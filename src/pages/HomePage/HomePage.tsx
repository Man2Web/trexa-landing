import { Button } from "@/components/ui/button";
import { Header } from "../../components/Header/Header";
import { AvatarFallback } from "@/components/ui/avatar";

import netflix_logo from "../../assets/trusted_by/netflix_logo.png";
import google_logo from "../../assets/trusted_by/google_logo.png";
import youtube_logo from "../../assets/trusted_by/youtube_logo.png";
import prime_logo from "../../assets/trusted_by/prime_logo.png";
import play_logo from "../../assets/trusted_by/play_logo.png";
import ReactPlayer from "react-player";
import { Avatar } from "@radix-ui/react-avatar";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-6 ">
          {/* Column One */}
          <div className="col-span-1 flex flex-wrap md:flex-col gap-10">
            <div className="h-64 bg-white rounded-lg shadow-lg p-4">
              <p>“Love this new open-source app ...”</p>
              <div className="flex items-center mt-4">
                <img
                  src="jonni-lundy.jpg"
                  alt="Jonni Lundy"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">Steven Tey</p>
                  <p className="text-sm text-gray-500">@steventey</p>
                </div>
              </div>
            </div>
            <div className="h-64 bg-white rounded-lg shadow-lg p-4">
              <p>“Love this new open-source app ...”</p>
              <div className="flex items-center mt-4">
                <img
                  src="jonni-lundy.jpg"
                  alt="Jonni Lundy"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">Steven Tey</p>
                  <p className="text-sm text-gray-500">@steventey</p>
                </div>
              </div>
            </div>
            <div className="h-64 bg-white rounded-lg shadow-lg p-4">
              <p>“Love this new open-source app ...”</p>
              <div className="flex items-center mt-4">
                <img
                  src="jonni-lundy.jpg"
                  alt="Jonni Lundy"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">Steven Tey</p>
                  <p className="text-sm text-gray-500">@steventey</p>
                </div>
              </div>
            </div>
          </div>
          {/* Column Two */}
          <div className="col-span-1 lg:col-span-2 flex flex-wrap md:flex-col gap-10">
            <div className="h-80 bg-white rounded-lg shadow-lg p-4">
              <p>“Loving it so far! Cleaned up ...”</p>
              <div className="flex items-center mt-4">
                <img
                  src="jonni-lundy.jpg"
                  alt="Jonni Lundy"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">Jonni Lundy</p>
                  <p className="text-sm text-gray-500">@jonnilundy</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="h-96 w-80 col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
                <p>“Loving it so far! Cleaned up ...”</p>
                <div className="flex items-center mt-4">
                  <img
                    src="jonni-lundy.jpg"
                    alt="Jonni Lundy"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Jonni Lundy</p>
                    <p className="text-sm text-gray-500">@jonnilundy</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="h-52 w-80 col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
                  <p>“Loving it so far! Cleaned up ...”</p>
                  <div className="flex items-center mt-4">
                    <img
                      src="jonni-lundy.jpg"
                      alt="Jonni Lundy"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-semibold">Jonni Lundy</p>
                      <p className="text-sm text-gray-500">@jonnilundy</p>
                    </div>
                  </div>
                </div>
                <div className="h-52 w-80 col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
                  <p>“Loving it so far! Cleaned up ...”</p>
                  <div className="flex items-center mt-4">
                    <img
                      src="jonni-lundy.jpg"
                      alt="Jonni Lundy"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-semibold">Jonni Lundy</p>
                      <p className="text-sm text-gray-500">@jonnilundy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Column Three */}
          <div className="col-span-1 flex flex-wrap md:flex-col gap-10">
            <div className="h-96 bg-white rounded-lg shadow-lg p-4">
              <p>“Wow. Onboarded and started ...”</p>
              <div className="flex items-center mt-4">
                <img
                  src="yoni.jpg"
                  alt="Yoni"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">Yoni</p>
                  <p className="text-sm text-gray-500">@yoni</p>
                </div>
              </div>
            </div>
            <div className="h-96 bg-white rounded-lg shadow-lg p-4">
              <p>“Wow. Onboarded and started ...”</p>
              <div className="flex items-center mt-4">
                <img
                  src="yoni.jpg"
                  alt="Yoni"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">Yoni</p>
                  <p className="text-sm text-gray-500">@yoni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
