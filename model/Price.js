import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dev.sqlite',
  logging: console.log, // 🔍 shows SQL statements
});
const PriceList = sequelize.define('PriceLists', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  articleNo: DataTypes.NUMBER,
  product:DataTypes.NUMBER,
  price:DataTypes.DECIMAL,
  unit:DataTypes.ENUM('PCS', 'KG', 'LTR'),
  description:DataTypes.TEXT
});

export default PriceList;