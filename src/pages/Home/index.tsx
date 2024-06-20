
import { CardInfo } from "../../Data/Data";
import Card from "./components/Card";
import { TableDemo } from "./components/Table";

export default function Dashboard() {
  return (
    <div><Card cards={CardInfo} />
      <TableDemo />
    </div>
  )
}
