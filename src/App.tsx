import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { NoMatchPage } from "./pages/NoMatchPage";
import TestPage from "./pages/TestPage";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<ResourcesPage />} />,
      <Route path="edit" element={<EditorPage />} />,
      <Route path="test" element={<TestPage />} />,
      <Route path="*" element={<NoMatchPage />} />,
    ])
  );

  return <RouterProvider router={router} />;
};
