import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../../../../db/index.js";

export const Customer = sequelize.define("customer", {
  salutation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CIF : {
    type: DataTypes.STRING,
    allowNull: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  }, 
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marital_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address_desc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status : {
    type: DataTypes.ENUM('APPROVED', 'WAITING_FOR_APPROVAL',"REJECTED"),
    allowNull: true,
    defaultValue : "WAITING_FOR_APPROVAL"
  }
});

sequelize.sync().then(() => {
    console.log('Customer Table Synced Successfully');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
