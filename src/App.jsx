import React, { lazy, Suspense } from "react";
import { LayoutLoader } from "./layout/Loaders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/login"));

const App = () => {
  // Access the isAuthenticated value from the auth slice in the Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!isAuthenticated} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
