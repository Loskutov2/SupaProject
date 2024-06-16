import DetailsPage from "Pages/DetailsPage";
import MainPage from "Pages/MainPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path=":id" element={<DetailsPage/>}/>
    </Routes>
  );
};
