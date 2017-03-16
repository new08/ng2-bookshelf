import {Tag} from "./tag";
/**
 * Created by Canon on 2017/3/15.
 */
export class Book {
  id: number;
  title: string;
  isbn: string;
  author: string;
  translator: string;
  publisher: string;
  price: number;
  caseId: string;
  tags: Tag[];
  summary: string;

}
