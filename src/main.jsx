import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.css";
import AuthProvider from "./providers/AuthProvider";
import AppRouter from "./routers/AppRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);
