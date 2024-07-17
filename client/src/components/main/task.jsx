import { colorContext } from "../../context/theme/themeContext";
import { TaskContext } from "../../context/task/taskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";

function Task({ data, setAct }) {
  const { handleDelete } = useContext(TaskContext);
  const { colors } = useContext(colorContext);

  const [isActive, setActive] = useState(false);
  function handleSuccess() {
    setActive(!isActive);
  }

  return (
    <>
      <ToastContainer />
      <div className={`task-${colors} flex`}>
        <div className="task-h2">
          <h2 className={isActive ? "decoration" : null}> {data.task} </h2>
        </div>
        <div className={`task-span-${colors} flex`}>
          <span>
            <ion-icon
              onClick={() => handleSuccess()}
              name="checkmark-circle-outline"
            ></ion-icon>
          </span>
          <span>
            <ion-icon
              onClick={() => handleDelete(data.id, setAct)}
              name="close-circle-outline"
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}

export default Task;
