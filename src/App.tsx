import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <section className="py-2 px-4 md:py-8 md:px-[25em] overflow-scroll absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
