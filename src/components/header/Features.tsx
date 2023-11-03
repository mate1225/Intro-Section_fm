//tsx
import DropdownMenuItem from "./DropdownMenuItem";
//images
import todo from "../../images/icon-todo.svg";
import calendar from "../../images/icon-calendar.svg";
import reminders from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";

export default function Features() {
  return (
    <div className=" flex flex-col gap-4">
      <DropdownMenuItem image={todo} item="Todo List" />
      <DropdownMenuItem image={calendar} item="Calendar" />
      <DropdownMenuItem image={reminders} item="Reminders" />
      <DropdownMenuItem image={planning} item="Planning" />
    </div>
  );
}
