import { runInThisContext } from "vm";
import { TOO_LONG } from "./consts";

export class NokiaTexter {
  text: string;
  constructor(text: string) {
    this.text = text;
  }

  squeeze() {
    let retString = "";
    let text = this.text;
    text.replace(/\s+/g, " ").trim();
    if (text.length > 160) {
      throw new Error(TOO_LONG);
    }
    let ret = text.split(" ");
    if (ret.length <= 1) {
      return text;
    }

    return retString;
  }
}
