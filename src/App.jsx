import reactLogo from "./assets/react.svg";
import React, { lazy } from "react";

import Root from "./pages/Root";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./pages/Authentication/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const SeriesPage = lazy(() => import("./pages/SeriesPage/SeriesPage"));
const BookmarkPage = lazy(() => import("./pages/BookmarkPage/BookmarkPage"));

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Login />} errorElement={<ErrorPage />} />
      <Route path="/signup" element={<SignUp />} errorElement={<ErrorPage />} />
      <Route errorElement={<ErrorPage />} element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={<HomePage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/movies"
          element={<MoviesPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/series"
          element={<SeriesPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/bookmark"
          element={<BookmarkPage />}
          errorElement={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <DataContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </DataContextProvider>
  );
}

export default App;
