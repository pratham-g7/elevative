import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { WorkDetail } from "./pages/WorkDetail";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Book } from "./pages/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: WorkDetail },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "book", Component: Book },
    ],
  },
]);
