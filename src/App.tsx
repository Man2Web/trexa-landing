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
    <section className="py-2 px-4 md:py-8 md:px-[25em]">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
