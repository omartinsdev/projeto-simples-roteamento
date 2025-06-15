import { createBrowserRouter } from "react-router";

import { HomePage } from "./pages/home";
import { PendingTasks } from "./pages/pending";
import { NewTask } from "./pages/new-task";
import { ErrorNotFound } from "./pages/not-found";
import { Layout } from "./components/layout";
import { TaskDetails } from "./pages/task-details";

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
        element: <PendingTasks />,
      },
      {
        path: "/task/new",
        element: <NewTask />,
      },
      {
        path: "/task/:id",
        element: <TaskDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorNotFound />,
  },
]);
