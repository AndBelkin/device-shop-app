import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes/MainRouter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <header>Header</header>
      <MainRouter />
      <footer>Footer</footer>
    </BrowserRouter>
  );
};

export default App;
