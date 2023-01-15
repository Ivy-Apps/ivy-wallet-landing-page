import { atom } from "recoil";
import { chart_icon, lock_icon, users_icon, wallet_icon, right_arrow_icon } from "./icons";

let iconsState = atom({
  key: "iconsState",
  default: { chart_icon, lock_icon, users_icon, wallet_icon, right_arrow_icon },
});

export { iconsState };
