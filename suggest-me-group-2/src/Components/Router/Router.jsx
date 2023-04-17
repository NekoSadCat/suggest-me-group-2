import { Routes, Route } from "react-router-dom";
import { Details, Home } from "./../Pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Router;
