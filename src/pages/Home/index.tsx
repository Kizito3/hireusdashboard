// import { CardInfo } from "../../Data/Data";
import { Insights } from "./components";
// import Card from "./components/Card";
import { TableData } from "./components/Table";

export default function Dashboard() {
  return (
    <div>
      {/* <Card cards={CardInfo} /> */}
      <Insights />
      <TableData />
    </div>
  );
}
