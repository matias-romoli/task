import { listTaskAll, deleteTask } from "../../utils/api";
import { TaskContext } from "./taskContext";
import { toast } from "react-toastify";
import { useState } from "react";

export const TaskContextProvider = ({ children }) => {
  const [listTask, setLisTask] = useState([]);
  const [task, setTask] = useState("");

  async function handleDelete(id, setAct) {
    try {
      const res = await deleteTask(id);
      const data = await res.json();
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2500,
      });
      setAct(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function listAll() {
    try {
      const res = await listTaskAll();
      const data = await res.json();
      setLisTask(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider
      value={{ listTask, listAll, task, setTask, handleDelete }}
    >
      {children}
    </TaskContext.Provider>
  );
};
