import Sequelize from 'sequelize';
import { db } from '../database/database';
import Task from './Task';

const Project = db.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT
  },
  priority: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  deliveryDate: {
    type: Sequelize.DATE
  }
});

Project.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Project, { foreignKey: 'projectId' })

export default Project;