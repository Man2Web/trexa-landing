import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Chart } from "../chart/chart";
import { BsCardList, BsLink45Deg, BsQuestionLg } from "react-icons/bs";
import { Button } from "../ui/button";

export const PriceCalculator = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([20]);
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
    <section className="my-16">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <div className="border boder-solid-slate-100 rounded-lg p-2 text-xl mx-auto">
            <LiaRupeeSignSolid />
          </div>
          <CardTitle className="font-bold tracking-tighter">
            Compare the pricing with the traditional method
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <div className="p-2 ">
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
          <div className="p-2 flex flex-col gap-4">
            <Slider
              className="bg-red-100"
              onValueChange={(e) => setSliderValue(e)}
              defaultValue={sliderValue}
              min={10}
              max={100}
              step={1}
            />
            <Chart sliderValue={sliderValue} />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
};
