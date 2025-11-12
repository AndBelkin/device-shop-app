import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import Header from "./layouts/header/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
      <footer>Footer</footer>
    </BrowserRouter>
  );
};

export default App;
