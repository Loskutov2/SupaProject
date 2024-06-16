import MainPage from "Pages/Main";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage notifications={[]}/>}/>
    </Routes>
  );
};
