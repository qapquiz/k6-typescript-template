import { sleep } from "k6";
import foo from "../foo";

export default function () {
  console.log(foo);
  sleep(1);
}
