import { ColorContextProvider } from "../context/theme/themeProvider";
import { TaskContextProvider } from "../context/task/taskProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layouts/home";

const Router = () => {
  return (
    <>
      <TaskContextProvider>
        <ColorContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </ColorContextProvider>
      </TaskContextProvider>
    </>
  );
};
export default Router;
