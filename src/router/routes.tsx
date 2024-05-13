import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";

export const routes = {
  dashboard: {
    path: "/",
    label: "Dashboard",
    component: <Dashboard />,
  },
  login: {
    path: "/",
    label: "Login",
    component: <Login />,
  },
};

const routesData = {
  privateRoutes: [routes.dashboard],
  publicRoutes: [routes.login],
};

export default routesData;
