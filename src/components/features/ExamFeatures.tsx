import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsCardChecklist, BsShield } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoFingerPrintOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoMdPaper } from "react-icons/io";
import { BiCloudUpload } from "react-icons/bi";

export const ExamFeatures = () => {
    const FEAT_IMAGE = [
    MdOutlineSupportAgent,
    GiArtificialIntelligence,
    IoFingerPrintOutline,
    SiOpenai,
    BsCardChecklist,
    LiaLaptopCodeSolid,
    IoMdPaper,
    BiCloudUpload,
  ];
  return (
    <section className="my-16">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <div className="border boder-solid-slate-100 rounded-lg p-2 text-xl mx-auto">
            <BsShield />
          </div>
          <CardTitle className="font-bold tracking-tighter">
            Why Companies choose HyreNet for their Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => {
              const Icon = FEAT_IMAGE[index];
              return (
                <div key={index} className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="p-2 text-4xl">
                      <Icon />
                    </div>
                    <p className="text-sm font-semibold tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
};
