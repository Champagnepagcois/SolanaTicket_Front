import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
