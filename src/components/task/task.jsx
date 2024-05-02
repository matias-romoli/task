import { taskContext } from "../../hooks/context";
import { useContext } from "react";
import NotTask from "./not";
import Body from "./body";

function Task() {
  const { completed, task, completedTask } = useContext(taskContext);
  return (
    <div className="container__task">
      {task.length === 0 ? (
        <NotTask />
      ) : completedTask.length > 0 && completed === true ? (
        completedTask.map((data) => (
          <Body key={data.id} data={data} check={false} />
        ))
      ) : (
        task.map((data) => <Body key={data.id} data={data} check={true} />)
      )}
    </div>
  );
}

export default Task;
