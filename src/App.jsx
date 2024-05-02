import { taskContext, functionContext } from "./hooks/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useContext } from "react";
import Task from "./components/task/task";
import Form from "./components/form";
import Item from "./components/item";
import "./App.scss";

function App() {
  const { task, setTask } = useContext(taskContext);
  const { AllTask } = useContext(functionContext);
  useEffect(() => {
    AllTask(setTask);
  }, [task]);

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Form />
        <div className="container-task">
          <div className="container-task__container">
            <div className="container-task__title">
              <p> You Tasks </p>
            </div>
            <Item />
          </div>
          <Task />
        </div>
      </div>
    </>
  );
}

export default App;
