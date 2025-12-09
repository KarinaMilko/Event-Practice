'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventCategory extends Model {
    static associate(models) {
      EventCategory.hasMany(models.Event, {
        foreignKey: { name: 'categoryId', allowNull: false },
        as: 'category',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }

  EventCategory.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'EventCategory',
      tableName: 'event_categories',
      underscored: true,
      timestamps: true,
    }
  );

  return EventCategory;
};
