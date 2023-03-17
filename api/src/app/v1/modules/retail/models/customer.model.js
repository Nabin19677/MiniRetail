import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../../../../config/db.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The customer ID.
 *           example: 0
 *         full_name:
 *           type: string
 *           description: The customer's name.
 *           example: Anil Khadka
 *         salutation:
 *           type: string
 *           description: The customer's salutation.
 *           example: Mr.
 *         CIF:
 *           type: string
 *           description: The customer's Customer Information File number generated from financle.
 *           example: R0101010101
 *         dob:
 *           type: string
 *           description: The customer's date of birth.
 *           example: 2002-04-05
 *         gender:
 *           type: string
 *           description: The customer's gender.
 *           example: MALE
 *         marital_status:
 *           type: string
 *           description: The customer's marital status.
 *           example: MARRIED
 *         address_desc:
 *           type: string
 *           description: The customer's address.
 *           example: Jarankhu
 *         nationality:
 *           type: string
 *           description: The customer's nationality.
 *           example: Jarankhu
 *         email:
 *           type: string
 *           description: The customer's email.
 *           example: anil@yopmail.com
 *         mobile_number:
 *           type: string
 *           description: The customer's mobile number.
 *           example: 9811111111
 *         status:
 *           type: string
 *           description: The customer's status (WAITING_FOR_APPROVAL, APPROVED, REJECTED).
 *           example: WAITING_FOR_APPROVAL
 *         citizenship_front:
 *           type: string
 *           description: The customer's citizenship front image path.
 *           example: /public/images/citizenship1.jpg
 *         citizenship_back:
 *           type: string
 *           description: The customer's citizenship back image path.
 *           example: /public/images/citizenship2.jpg
 *         other_document:
 *           type: string
 *           description: The customer's other_document file path.
 *           example: /public/documents/otherdoc.pdf
 */
export const Customer = sequelize.define("customer", 
{
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
    allowNull: false,
  },
  address_desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  citizenship_front: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  citizenship_back: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  other_document : {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status : {
    type: DataTypes.ENUM('APPROVED', 'WAITING_FOR_APPROVAL',"REJECTED"),
    allowNull: true,
    defaultValue : "WAITING_FOR_APPROVAL"
  }
},{
  getterMethods: {
    basicInfo() {
      return {
        id : this.id,
        CIF : this.CIF
      }
    }
  }
});

sequelize.sync().then(() => {
    console.log('Customer Table Synced Successfully');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
