import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
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
      <div>
        <Footer/>
      </div>
    </>
  );
}
