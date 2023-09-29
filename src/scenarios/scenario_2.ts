import { sleep } from "k6";
import dict from "../dict";

export default function () {
  console.log({
    ...dict,
    c: "c",
  })
	sleep(1);
}
