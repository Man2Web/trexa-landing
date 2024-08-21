import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const NumbersSection = () => {
  const PROD_DETAILS = [
    { number: "50 +", content: "Total Users" },
    { number: "1000 +", content: "Total Tests Done" },
    { number: "500 +", content: "No of Questions Generated" },
  ];
  return (
    <section className="my-6">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <CardTitle className="font-bold tracking-tighter">
            Power Up Your Assessment With Trexa
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4 justify-around">
          {PROD_DETAILS.map(
            (detail: { number: string; content: string }, index) => {
              return (
                <div
                  key={index}
                  className="w-[1/3] p-2 flex flex-1 flex-col justify-center items-center"
                >
                  <h1 className="font-bold tracking-tighter text-2xl">
                    {detail.number}
                  </h1>
                  <h1 className="text-md font-normal tracking-tight text-slate-400">
                    {detail.content}
                  </h1>
                </div>
              );
            }
          )}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
};
