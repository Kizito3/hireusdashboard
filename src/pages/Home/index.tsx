
import { CardInfo } from "../../Data/Data";
import Card from "./components/Card";
import { TableData } from "./components/Table";

export default function Dashboard() {
  return (
    <div>
      <Card cards={CardInfo} />
      <TableData /> 
    </div>
  )
}
