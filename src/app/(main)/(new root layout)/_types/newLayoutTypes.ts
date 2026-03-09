import { StaticImageData } from "next/image";

//  card one types
export type cardOneTypes = {
  id: number;
  category: string;
  date: string;
  title: string;
  author: string;
  image: string | StaticImageData;
  description: string;
};
