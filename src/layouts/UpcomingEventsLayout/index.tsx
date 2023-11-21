import { Outlet, ScrollRestoration } from "react-router-dom";

export default function UpcomingEventsLayout() {
  return (
    <div className="upcoming-events-layout w-screen h-screen overflow-hidden bg-[url(/assets/upcomingevents.png)] bg-cover">
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
