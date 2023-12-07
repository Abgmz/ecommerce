import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";

export default function App() {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
}
