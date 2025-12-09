'use strict';
const { Model } = require('sequelize');
const { addDays } = require('date-fns');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Event, {
        foreignKey: { name: 'creatorId', allowNull: false },
        as: 'creator',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      User.belongsToMany(models.Event, {
        foreignKey: { name: 'userId', allowNull: false },
        through: 'Participation',
        as: 'participant',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          isBefore: addDays(new Date().setHours(0, 0, 0, 0), 1),
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
      timestamps: true,
    }
  );

  return User;
};
