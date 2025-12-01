
import LeftSide from "./sections/leftSide";
import RightSide from "./sections/rightSide";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 mx-[5vw] mt-[2vw]">
    
      <RightSide/>
      <LeftSide/>
    </div>
  );
}
