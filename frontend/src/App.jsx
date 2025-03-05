import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import Register from "./components/Authentication/Register";
import Home from "./pages/Home";
import Verify from "./components/Authentication/Verify";
import Login from "./components/Authentication/Login";
import Denied from "./pages/Denied";
import RequireAuth from "./components/Authentication/Authorize";
import Notfound from "./pages/Notfound";
import HomeLayout from "./layouts/HomeLayout";
import Problems from "./pages/Problems";
import Contests from "./pages/Contests";
import Submissions from "./pages/Submissions";
import Coding from "./pages/Coding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Verify />} />
      <Route path="/register" element={<AuthenticationPage Page={Register} />} />
      <Route path="/login" element={<AuthenticationPage Page={Login} />} />

      {/* Protected Routes */}
      <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:problemname" element={<Coding />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/submissions" element={<Submissions />} />
        </Route>
      </Route>

      <Route path="/denied" element={<Denied />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
