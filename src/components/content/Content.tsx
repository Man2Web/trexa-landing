import { Button } from "../ui/button"

export const Content = () => {
  return (
    <section className="my-16">
    <div className="px-[16rem]">
      <p className="text-center text-md font-medium tracking-tight text-slate-400">
        Sick of traditional way of conducting Assessment? <br />
        Try Creating a test with only a few clicks using TrExa.
      </p>
      <div className="flex pt-4 gap-2 justify-center">
        <Button size="sm" variant="outline">
          Start Free Trail
        </Button>
        <Button size="sm">Schedule Demo</Button>
      </div>
    </div>
  </section>
  )
}
