import Sequelize from 'sequelize';
import { db } from '../database/database';

const Task = db.define('tasks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT
  },
  done: {
    type: Sequelize.BOOLEAN
  },
  projectId: {
    type: Sequelize.INTEGER
  },
});

export default Task;