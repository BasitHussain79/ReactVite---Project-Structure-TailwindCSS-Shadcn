import { useAuth } from "hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import Default from "./Default";
import RequireAuth from "./RequireAuth";
import routes from "./routes";


const AppRouter = () => {
  const { id } = useAuth();
  const { privateRoutes, publicRoutes } = routes;

  const publicPageRoutes = publicRoutes.map(({ label, path, component }) => (
    <Route key={label} path={`/${path}`} element={component} />
  ));

  const privatePageRoutes = privateRoutes.map(({ label, path, component }) => (
    <Route key={label} path={`/${path}`} element={component} />
  ));

  return (
    <Routes>
      <Route path="/" element={<Default />}>
        {!id && <>{publicPageRoutes}</>}
        <Route element={<RequireAuth />}>{id && privatePageRoutes}</Route>
        <Route path="*" element={<Navigate to={id ? "/" : "/login"} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
