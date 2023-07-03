import reactLogo from "./assets/react.svg";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import ErrorPage from "./pages/ErrorPage";

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/Authentication/ProtectedRoute";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";
import BookmarkPage from "./pages/BookmarkPage/BookmarkPage";
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
