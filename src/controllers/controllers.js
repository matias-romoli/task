import { Contenedor } from "../container/main.js";
import { db } from "../db/mysql.js";
const contain = new Contenedor(db);

export const controllers = {
  list: async (req, res) => {
    try {
      const data = await contain.list();
      return await res.status(200).json(data);
    } catch (error) {
      throw new Error(500, "It was not possible to list the tasks", error);
    }
  },
  listID: async (req, res) => {
    try {
      const data = await contain.listID(req.params.id);
      await res.status(200).json(data);
    } catch (error) {
      throw new Error(500, "It was not possible to list the tasks", error);
    }
  },
  new: async (req, res) => {
    let { task } = req.body;

    try {
      await contain.newTask(task);
      res.status(200).json({
        message: "Task added successfully",
      });
    } catch (error) {
      throw new Error(500, "It was not possible to add a new task", error);
    }
  },
  delete: async (req, res) => {
    try {
      await contain.delete(req.params.id);
      res.status(200).json({
        message: "Task deleted successfully",
      });
    } catch (error) {
      throw new Error(500, "The task could not be deleted", error);
    }
  },
};
