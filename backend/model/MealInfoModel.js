import { Sequelize, DataTypes } from "sequelize";

// Initialize a new Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mealDatabase.sqlite",
});

// Define the Meal model
// name, nutrition, allergens, dietary information, healthfulness, carbon rating, 
// ingredients, dining hall availability, dates of availability, whether it has been selected, 
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
  healthfulness: {
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  ingredients: {
    type:DataTypes.ARRAY,
    allowNull:false,
  },
  dates: {
    type:DataTypes.STRING,
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
  },

  carbon: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  mealTime: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

class _SQLiteMealModel {
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
            halls:[["Worcester","Franklin"]],
            carbon: "A",
            image:null,
            mime:null
        }
    );

    }
  }

  async create(mealInfo) {
    return await Meal.create(mealInfo);
  }

  async read(searchObj) {
    if (searchObj.name) {
      return await Meal.findByPk(searchObj.name);
    }

    let foundMeals = await Meal.findAll();
    if (searchObj.carbon.length > 0)
      foundMeals = foundMeals.filter(x => x.carbon === searchObj.carbon);
    if (searchObj.allergenInfo.length > 0)
      foundMeals = foundMeals.filter(x => searchObj.allergenInfo.every(elem => x.allergenInfo.includes(elem)));
    if (searchObj.dietInfo.length > 0)
      foundMeals = foundMeals.filter(x => searchObj.dietInfo.every(elem => x.dietInfo.includes(elem)));
    if (searchObj.dates) {
      if (!searchObj.halls || !searchObj.mealTime)
        throw new Error("A date search must be accompanied by a dining hall and a meal Time");
      if (searchObj.halls.length !== searchObj.dates.length || searchObj.mealTime.length !== searchObj.dates.length)
        throw new Error("The requested dates array must be the same length as the halls and mealTimes array");

      //filter the meals to find any that have a matching date, dining hall, and time of day at the same index
      foundMeals = foundMeals.filter(curMeal => (
        curMeal.dates.some((elem,curIndex) => searchObj.dates[0] === elem 
          && searchObj.mealTime[0] === curMeal.mealTime[curIndex]
            && searchObj.halls[0] === curMeal.halls[curIndex]
        )
      ));
    }

    return foundMeals;
        
  }

  async update(newInfo) {
    const mealu = await Meal.findByPk(newInfo.name);
    if (!mealu) {
      this.create(newInfo);
      return;
    }

    if (newInfo.halls) {
      newInfo.halls = [...mealu.halls, newInfo.halls[0]];
      newInfo.dates = [...mealu.dates, newInfo.dates[0]];
      newInfo.mealTime = [...mealu.mealTime, newInfo.mealTime[0]];
    }

    await mealu.update(newInfo);
    return mealu;
  }

  async delete(mealName = null) {
    if (mealName === null) {
      await Meal.destroy({ truncate: true });
      return;
    }

    await Meal.destroy({ where: { name: mealName.name } });
    return mealName;
  }
}

export default _SQLiteMealModel;