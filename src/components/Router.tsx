import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:coinId/*" element={<Detail />} />
    </Routes>
  );
};

export default Router;
