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
    text.replace(/\s+/g, " ").trim();
    if (text.replace(/\s+/g, "").length > 160) {
      throw new Error(TOO_LONG);
    }
    let ret = text.split(" ");
    if (ret.length <= 1) {
      return text;
    }
    for (let i = 0; i < ret.length; i++) {
      let temp = ret[i];
      if (i % 2 == 0) {
        temp = temp.toUpperCase();
      }
      retString += temp;
    }
    return retString;
  }
}
