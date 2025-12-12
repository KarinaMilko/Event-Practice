'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.EventCategory, {
        foreignKey: { name: 'categoryId', allowNull: false },
        as: 'category',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      // event.getEventCategoty -> event.getCategoty
      Event.belongsTo(models.User, {
        foreignKey: { name: 'creatorId', allowNull: false },
        as: 'creator',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      // event.getUsers
      // event.getUser -> event.getCreator
      Event.belongsToMany(models.User, {
        foreignKey: { name: 'eventId', allowNull: false },
        through: 'Participation',
        as: 'event',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Event.init(
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      isOnline: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events',
      underscored: true,
      timestamps: true,
    }
  );

  return Event;
};
