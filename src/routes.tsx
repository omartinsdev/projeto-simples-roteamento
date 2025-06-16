import { createBrowserRouter } from "react-router";

import { HomePage } from "./pages/home";
import { TasksPage } from "./pages/tasks";
import { TaskFormPage } from "./pages/taskForm";
import { NotFoundPage } from "./pages/notFound";
import { Layout } from "./components/layout";
import { TaskPage } from "./pages/task";

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tasks/pending",
        element: <TasksPage />,
      },
      {
        path: "/task/new",
        element: <TaskFormPage />,
      },
      {
        path: "/task/:id",
        element: <TaskPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
