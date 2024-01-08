import { Sequelize } from "sequelize";
import sequelize from "../config/dbconfig.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    supplier: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default Product;
