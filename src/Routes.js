import React from "react";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Entertainment from "./pages/Entertainment";
import Prices from "./pages/Prices";
import Sponsors from "./pages/Sponsors";
import Festivals from "./pages/Festivals";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

const Routes = [
  { path: "/", name: "Anasayfa", Component: Home, exact: true },
  { path: "/Hotel", name: "Otel", Component: Hotel },
  { path: "/Entertainment", name: "Eğlence", Component: Entertainment },
  { path: "/Prices", name: "Fiyatlar", Component: Prices },
  { path: "/Sponsors", name: "Sponsorlar", Component: Sponsors },
  { path: "/Festivals", name: "Geçmiş Festivaller", Component: Festivals },
  { path: "/Reservation", name: "Rezervasyon", Component: Reservation },
  { path: "/Contact", name: "İletişim", Component: Contact }
];

export default Routes;
