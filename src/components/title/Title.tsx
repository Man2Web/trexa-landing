import { Button } from "../ui/button";

export const Title = () => {
  const MeetLink = "https://calendly.com/harsha-vardhan-man2web/30min";
  return (
    <section className="mt-24 md:mt-32">
    <h1 className="my-10 font-bold text-4xl md:text-6xl tracking-tight">
      The Global Leaders in Talent Assessment{" "}
      <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-tight">
        using AI
      </span>
    </h1>
    <p className="my-4 md:m-10 font-semibold text-lg text-slate-400 tracking-tight">
      Conduct Customized Online Assessments on TrExa’s Robust Cloud-based
      Platform, Enhanced with Best-in-class Proctoring.
    </p>
    <a target="_blank" href={MeetLink}>
      <Button>Schedule Demo</Button>
    </a>
  </section>
  );
};
