import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsCardList, BsLink45Deg, BsQuestionLg } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Button } from "../ui/button";

export const FeaturesWithImages = () => {
  const ICONS = [BsCardList, BsQuestionLg, BsLink45Deg];
  const FEAT_DETAILS = [
    {
      question: "Create your own Template",
      content:
        "Customize Questions in your Template according to your needs. Import your questions through CSV.",
    },
    {
      question: "Choose Your Question",
      content:
        "Handpick your Questions based on the Easy/Medium/Hard category. Shuffle Questions to each candidates.",
    },
    {
      question: "Test Link Generation",
      content:
        "Generated test link in Public/ Private and Protected Category to improve security for your assessment ",
    },
  ];
  return (
    <section className="my-6">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <div className="border boder-solid-slate-100 rounded-lg p-2 text-xl mx-auto">
            <CiHeart />
          </div>
          <CardTitle className="font-bold tracking-tighter">
            Lorem Ipsum
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2">
          <div className="bg-slate-500/30 backdrop-blur-sm h-[300px] rounded-lg"></div>
          <div className="">
            {FEAT_DETAILS.map(
              (feature: { question: string; content: string }, index) => {
                const Icon = ICONS[index];
                return (
                  <div key={index} className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 text-md">
                        <Icon />
                      </div>
                      <p className="text-sm font-semibold tracking-tight">
                        {feature.question}
                      </p>
                    </div>
                    <p className="text-sm font-normal text-left tracking-tight text-slate-400">
                      {feature.content}
                    </p>
                  </div>
                );
              }
            )}
            <div className="flex gap-2 justify-center">
              <Button size="sm" variant="outline">
                Start Free Trail
              </Button>
              <Button size="sm">Schedule Demo</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
};
