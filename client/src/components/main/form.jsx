import { colorContext } from "../../context/theme/themeContext";
import { TaskContext } from "../../context/task/taskContext";
import { ToastContainer, toast } from "react-toastify";
import { registerTask } from "../../utils/api";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";

function Form({ setAct }) {
  const { task, setTask } = useContext(TaskContext);
  const { colors } = useContext(colorContext);

  async function onSubmitTask(e) {
    e.preventDefault();
    try {
      const res = await registerTask(task);
      if (res.status === 500) {
        return toast.error(await res.json(), {
          position: "top-right",
          autoClose: 2500,
        });
      }

      const data = await res.json();
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2500,
      });
      setTask("");
      setAct(true);
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <>
      <ToastContainer />
      <form
        className={`form-${colors} flex`}
        action="POST"
        onSubmit={onSubmitTask}
      >
        <input
          type="text"
          name="newTask"
          value={task}
          placeholder="Add a task."
          onChange={(event) => {
            setTask(event.target.value);
          }}
          autoComplete="off"
        />
        <input type="submit" value="I Got This" />
      </form>
    </>
  );
}
export default Form;
