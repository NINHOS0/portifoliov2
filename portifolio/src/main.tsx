import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Projects from "./pages/projects.tsx";
import Project from "./pages/project.tsx";
import Home from "@pages/home.tsx";
import NotFound from "@pages/notfound.tsx";
import "./index.css";
import ThemeProvider from "context/themeProvider.tsx";

const route = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={route} />
  </ThemeProvider>
);
