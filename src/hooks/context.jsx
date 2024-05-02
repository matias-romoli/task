import { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  editCompletedTask,
  showTaskCompleted,
  deleteTask,
  showTask,
} from "../API/api";

//context
export const functionContext = createContext();
export const taskContext = createContext();

export const FunctionProvider = ({ children }) => {
  async function handleCompleted(value, id, completed) {
    try {
      await editCompletedTask(value, id);
      completed(await showTaskCompleted());
    } catch (error) {
      console.error("Error handling completed task:", error);
    }
  }
  async function Completed(completed) {
    try {
      const res = await showTaskCompleted();
      completed(res);
    } catch (error) {
      return error;
    }
  }
  async function AllTask(task) {
    try {
      const response = await showTask();
      task(response);
    } catch (error) {
      return error;
    }
  }
  async function Delete(idem) {
    try {
      const data = await deleteTask(idem);
      if (data) {
        toast.success("Task deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  return (
    <functionContext.Provider
      value={{
        Delete,
        AllTask,
        Completed,
        handleCompleted,
      }}
    >
      {children}
    </functionContext.Provider>
  );
};
export function TaskProvider({ children }) {
  const [completedTask, setCompletedTask] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [modal, setModal] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [task, setTask] = useState([]);
  return (
    <taskContext.Provider
      value={{
        task,
        modal,
        taskId,
        setTask,
        setModal,
        completed,
        setTaskId,
        setCompleted,
        completedTask,
        setCompletedTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}
