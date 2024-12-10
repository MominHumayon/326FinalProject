import { Sequelize, DataTypes } from "sequelize";

// Initialize a new Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mealDatabase.sqlite",
});

// Define the Task model
const Meal = sequelize.define("Meal", {
  mealid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true,
  },
  nutritionInfo: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  allergenInfo: {
    type:DataTypes.ARRAY,
    allowNull: false,
  },
  dietInfo: {
    type:DataTypes.ARRAY,
    allowNull:false,
  },
  healthfullness: {
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  ingredients: {
    type:DataTypes.ARRAY,
    allowNull:false,
  },
  dates: {
    type:DataTypes.DATE,
    allowNull:false,
  },

  selected: {
    type:DataTypes.ARRAY,
    allowNull:false,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  halls: {
    type: DataTypes.ARRAY,
    allowNull: false,
  }
});

class _SQLiteTaskModel {
  constructor() {}

  async init(fresh = false) {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    // An exception will be thrown if either of these operations fail.

    if (fresh) {
      await this.delete();

      await this.create(
        
        {
            mealid:1,
            name:"placeholder",
            nutritionInfo: {
                "servingSize": "",
                "cals" :-1,
                "fat": -1,
                "chol":-1,
                "sodium":-1,
                "carbs":-1,
                "sugar":-1,
                "prot":-1
            },
            dietInfo: ["Vegetarian"],
            allergenInfo: ["Wheat"],
            healthfulness: 2,
            ingredients: ["You're Mother"],
            dates:["12-11-24"],
            selected:["false"],
            halls:[["Worcester","Franklin"]],
            image:null,
            mime:null
        }
    );

    }
  }

  async create(mealInfo) {
    return await Meal.create(mealInfo);
  }

  async read(name) {
      return await Meal.findByPk(name);
  }

  async update(newInfo) {
    const mealu = await Meal.findByPk(name);
    if (!mealu) {
      return null;
    }

    await mealu.update(newInfo);
    return mealu;
  }

  async delete(meal = null) {
    if (meal === null) {
      await Meal.destroy({ truncate: true });
      return;
    }

    await Meal.destroy({ where: { name: meal.name } });
    return meal;
  }
}

const SQLiteTaskModel = new _SQLiteTaskModel();

export default SQLiteTaskModel;
