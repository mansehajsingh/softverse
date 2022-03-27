/* require dependencies */
const { sequelize } = require("../database");
const { Model, DataTypes } = require("sequelize");
const User = require("./User");

/* init model */
class Project extends Model {};

Project.init(
    /* model attributes */
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        owner: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        }
    },
    /* model options */
    {
        sequelize,
        modelName: "Project"
    }
);

module.exports = Project;