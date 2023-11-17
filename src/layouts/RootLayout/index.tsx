import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout w-screen h-screen overflow-hidden">
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
