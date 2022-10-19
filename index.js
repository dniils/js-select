import { Select } from "./select/select";
import "./select/styles.scss";

const select = new Select("#select", {
  placeholder: "Please, choose the dish",
  //   selectedId: "4",
  data: [
    { id: "1", value: "Pizza" },
    { id: "2", value: "Cheese Plate" },
    { id: "3", value: "Chicken Burger" },
    { id: "4", value: "Vanilla Ice Cream" },
    { id: "5", value: "Beer & Fries" },
    { id: "6", value: "Kebab" },
  ],
  onSelect(item) {
    console.log("selected item:", item);
  },
});

window.s = select;
