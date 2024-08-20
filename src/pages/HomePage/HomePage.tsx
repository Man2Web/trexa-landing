import { Button } from "@/components/ui/button";
import { Header } from "../../components/header/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarouselPlugin } from "@/components/carousel/CarouselPlugin";
import { LuBrainCircuit } from "react-icons/lu";

import netflix_logo from "../../assets/trusted_by/netflix_logo.png";
import google_logo from "../../assets/trusted_by/google_logo.png";
import youtube_logo from "../../assets/trusted_by/youtube_logo.png";
import prime_logo from "../../assets/trusted_by/prime_logo.png";
import play_logo from "../../assets/trusted_by/play_logo.png";
import { Footer } from "@/components/footer/Footer";

export const HomePage = () => {
  const IMAGES_ARR = [
    { name: "netflix logo", link: netflix_logo },
    { name: "google logo", link: google_logo },
    { name: "youtube logo", link: youtube_logo },
    { name: "prime logo", link: prime_logo },
    { name: "play logo", link: play_logo },
  ];
  const ACCORD_DATA = [
    {
      title: "Choose your Question",
      content:
        "You can create your question as per the difficulty you choose, Or you can always use AI to create questions for you...",
    },
    {
      title: "Create A Template with Questions",
      content:
        "You can create a template with the questions you created and use them as a question set.",
    },
    {
      title: "Proctoring Functions",
      content:
        "You can choose from a wide range of proctoring functions as per your requirements. Face Detection, Loud Noise Detection, Monitor User Exam.",
    },
  ];
  return (
    <main>
      <Header />
      {/* Header section */}
      <section className="mt-24 md:mt-60">
        <h1 className="my-4 md:my-8 font-semibold text-xl">
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            AI Based
          </span>{" "}
          proctoring made easy for your organization.
        </h1>
        <h1 className="my-10 font-bold text-4xl md:text-6xl">
          Increase your organization performance{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-tight">
            using AI
          </span>
        </h1>
        <Button>Schedule Demo</Button>
      </section>
      {/* Trusted by section */}
      <section className="mt-24 md:mt-60">
        <h1 className="font-semibold">Trusted by</h1>
        <div className="flex flex-wrap md:flex-row gap-4 md:gap-8 lg:gap-20 justify-center">
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
      {/* Features section */}
      <section className="md:px-28">
        <section className="mt-12">
          <h1 className="font-semibold text-3xl py-8">
            Create Test With Wide Range Of Options
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center p-4 gap-4 md:gap-12">
            <div>{CarouselPlugin()}</div>
            <div className="flex-1">
              {ACCORD_DATA.map(
                (item: { title: string; content: string }, index) => {
                  return (
                    <Accordion
                      key={index}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-left">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
              )}
            </div>
          </div>
          <Button>Know More</Button>
        </section>
        <section className="mt-12">
          <h1 className="font-semibold text-3xl py-8">
            Schedule your Text with TrExa
          </h1>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-4 gap-4 md:gap-12">
            <div className="flex-1">
              {ACCORD_DATA.map(
                (item: { title: string; content: string }, index) => {
                  return (
                    <Accordion
                      key={index}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-left">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
              )}
            </div>
            <div>{CarouselPlugin()}</div>
          </div>
          <Button>Know More</Button>
        </section>
      </section>
      {/* Features section */}
      <section className="my-12 md:px-28 md:my-24">
        <h1 className="font-semibold text-2xl pb-20">And Many More...</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4">
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <div
                key={index}
                className="text-6xl text-center flex flex-col items-center gap-2"
              >
                <LuBrainCircuit />
                <p className="text-sm font-semibold">Lorem Ipsum</p>
              </div>
            );
          })}
        </div>
        <div className="pt-20">
          <Button>Schedule Demo</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
};
