import IMAGE_LINK from "../../assets/TrExa.png";

export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className="p-4 border border-1 border-solid border-slate-200 rounded-lg flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
      <img src={IMAGE_LINK} alt="Logo" className="h-6" />
      <p className="font-semibold text-sm">
        {CURRENT_YEAR} Man2Web, All Rights Reserved
      </p>
      <div className="flex gap-2">
        <div className="p-4 bg-slate-200 rounded-lg"></div>
        <div className="p-4 bg-slate-200 rounded-lg"></div>
        <div className="p-4 bg-slate-200 rounded-lg"></div>
        <div className="p-4 bg-slate-200 rounded-lg"></div>
      </div>
    </footer>
  );
};
