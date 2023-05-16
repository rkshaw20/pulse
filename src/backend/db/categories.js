import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Analog",
    image:"https://res.cloudinary.com/dn5zs5sqx/image/upload/v1684241560/fossilAnalog_fd85rj.webp",
    description:
      "Timeless elegance with classic analog dials and traditional watch hands.",
  },
  {
    _id: uuid(),
    categoryName: "Digital",
    image:"https://res.cloudinary.com/dn5zs5sqx/image/upload/v1684241345/casioDigital_u1pdu4.webp",
    description:
      "Modern and precise timekeeping with digital displays and advanced functionality.",
  },
  {
    _id: uuid(),
    categoryName: "Smartwatch",
    image:"https://res.cloudinary.com/dn5zs5sqx/image/upload/v1684224476/applewatch_xsywrb.jpg",
    description:
      "Watch with various features like fitness tracking, notifications, and connectivity.",
  },
];
