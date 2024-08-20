import ReactPlayer from "react-player"

export const ProductVideoDemo = () => {
  return (
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
  )
}