import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen w-screen ">
      <main className="overscroll-auto">
        <Outlet />
      </main>
    </div>
  );
}
