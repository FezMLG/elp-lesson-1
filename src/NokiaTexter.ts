import { runInThisContext } from "vm";
import { TOO_LONG } from "./consts";

export class NokiaTexter {
  text: string;
  constructor(text: string) {
    this.text = text;
  }

  squeeze() {
    let retString = "";
    const text = this.text;
    if (!text.includes(" ")) {
      return text;
    }
    if (text.replace(/\s+/g, "").length > 160) {
      throw new Error(TOO_LONG);
    }
    text.replace(/\s+/g, " ").trim();
    let ret = text.split(" ");
    ret.map((word, key) => {
      if (key % 2 == 0) {
        word = word.toUpperCase();
      }
      retString += word;
    });
    return retString;
  }
}
