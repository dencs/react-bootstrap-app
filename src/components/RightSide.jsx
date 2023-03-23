import Card, { CardWithImg } from "./Card";
import img from "../img/smartgrid.jpg";
import img2 from "../img/fastdatatransfer.jpg";

export default function RightSide() {
  return (
    <div className="col rightside px-0">
      <div className="row g-2">
        <div className="col-lg-4" >
          <Card title="AI" />
        </div>
        <div className="col-lg-4">
            <Card title="Infrastructure" />
        </div>
        <div className="col-lg-4">
            <Card title="Services"/>
        </div>
        <div className="col-xl-9 col-lg-12 ">
          <CardWithImg imgUrl={img} imgAlt="Smart Grid" title="Smart Grid" />
        </div>
        <div className="col-xl-3 col-lg-6">
            <Card title="Security" />
        </div>
        <div className="col-xl-3 col-lg-6">
            <Card title="Security" />
        </div>
        <div className="col-xl-9 col-lg-12 ">
        <CardWithImg imgUrl={img2} imgAlt="Fast Data Transfer" title="Fast Data Transfer" />
        </div>
      </div>
    </div>
  );
}
