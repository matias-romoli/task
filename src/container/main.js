import { logger } from "../config/logger.js";
import { db } from "../db/mysql.js";

async function createTableIfNotExists() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS task (
       id INT(11) NOT NULL AUTO_INCREMENT,
       task VARCHAR(500) DEFAULT NULL,
       PRIMARY KEY(id)
      )
    `;
    await db.query(createTableQuery);
  } catch (error) {
    throw error;
  }
}
export class Contenedor {
  constructor(db) {
    this.connection = db;
  }

  async list() {
    await createTableIfNotExists();
    try {
      const connection = await this.connection.getConnection();
      let sql = "SELECT * FROM task";

      const [rows] = await connection.query(sql);
      await connection.release();
      return rows;
    } catch (error) {
      return [];
    } finally {
    }
  }

  async listID(id) {
    try {
      const connection = await this.connection.getConnection();
      let sql = "SELECT * FROM task WHERE id = ?";

      const [rows] = await this.connection.query(sql, [id]);
      await connection.release();
      return rows;
    } catch (error) {
      logger.error("Error fetching task by ID:", error);
      throw error;
    }
  }

  async newTask(data) {
    await createTableIfNotExists();
    try {
      const connection = await this.connection.getConnection();
      let sql = "INSERT INTO task(task) VALUES (?)";

      const [rows] = await connection.query(sql, [data]);
      await connection.release();
      return rows;
    } catch (error) {
      logger.error("Error creating new task:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const connection = await this.connection.getConnection();
      let sql = "DELETE FROM task WHERE id = ?";

      await this.connection.query(sql, [id]);
      await connection.release();
    } catch (error) {
      logger.error("Error deleting task:", error);
      throw error;
    }
  }
}
