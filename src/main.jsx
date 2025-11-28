import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.css";
import QueryProvider from "./providers/QueryProvider";
import AuthProvider from "./providers/AuthProvider";
import AppRouter from "./routers/AppRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);
