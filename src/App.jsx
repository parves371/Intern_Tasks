import React, { lazy, Suspense } from "react";
import { LayoutLoader } from "./layout/Loaders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/login"));

const user = true;
const App = () => {
  // useEffect(() => {
  //   axios
  //     .get(`${server}/api/v1/user/me`, { withCredentials: true })
  //     .then(({ data }) => dispatch(userExists(data.user)))
  //     .catch((err) => dispatch(userNotExists()));
  // }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
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
