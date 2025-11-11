import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainRouter: FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/store" replace />} />
      <Route path="/store" element={<main>Store Page</main>} />
      <Route path="*" element={<main>404 Page</main>} />
    </Routes>
  );
};

export default MainRouter;
