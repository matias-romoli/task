import { taskContext, functionContext } from "../hooks/context";
import { useContext, useEffect } from "react";

function Item() {
  const { setCompleted, task, completedTask, setCompletedTask } =
    useContext(taskContext);
  const { Completed } = useContext(functionContext);
  useEffect(() => {
    Completed(setCompletedTask);
  }, [task]);

  return (
    <>
      <div className="container-task__options">
        <p
          onClick={async () => {
            setCompleted(false);
          }}
        >
          All ({task.length})
        </p>
        <p
          onClick={async () => {
            await Completed(setCompletedTask);
            setCompleted(true);
          }}
        >
          Completed ({completedTask.length})
        </p>
      </div>
    </>
  );
}

export default Item;
