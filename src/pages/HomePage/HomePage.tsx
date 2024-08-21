import { Header } from "../../components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Title } from "@/components/title/Title";
import { TrustedBy } from "@/components/title/TrustedBy";
import { FeaturesWithImages } from "@/components/features/FeaturesWithImages";
import { NumbersSection } from "@/components/features/NumbersSection";
import { Content } from "@/components/content/Content";
import { ExamFeatures } from "@/components/features/ExamFeatures";
import { PriceCalculator } from "@/components/priceCalculator/PriceCalculator";

export const HomePage = () => {

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

  const FEAT_DETAILS_1 = [
    {
      question: "Schedule Your Test",
      content:
        "Set up test dates and times in advance. Allow candidates to take the test at their convenience within the scheduled window.",
    },
    {
      question: "Randomize Question Order",
      content:
        "Enhance test integrity by shuffling the order of questions for each candidate, ensuring a unique experience.",
    },
    {
      question: "Set Time Limits",
      content:
        "Apply time constraints on the entire test or individual sections to challenge candidates under timed conditions.",
    },
    {
      question: "Customize Scoring Rules",
      content:
        "Define scoring criteria for your test. Assign different weights to questions based on their difficulty level.",
    },
    {
      question: "Enable Automated Grading",
      content:
        "Save time with automated grading. Get instant results and detailed analytics after test completion.",
    },
    {
      question: "Provide Instant Feedback",
      content:
        "Give candidates immediate feedback on their performance, highlighting correct answers and areas for improvement.",
    },
    {
      question: "Monitor Live Proctoring",
      content:
        "Ensure test integrity with live proctoring. Monitor candidates in real-time through video and screen recording.",
    },
    {
      question: "Export Test Results",
      content:
        "Easily export test results in various formats. Share detailed reports with candidates and stakeholders.",
    },
  ];

  return (
    <main>
      <Header />
      {/* Header section */}
      <Title />
      {/* Trusted by section */}
      <TrustedBy />
      {/* Features section */}
      <NumbersSection />
      {/* Features section */}
      <FeaturesWithImages />
      {/* Content section */}
      <Content />
      {/* Features section */}
      <ExamFeatures />
      {/* Features section */}
      <PriceCalculator />
      <Footer />
    </main>
  );
};
