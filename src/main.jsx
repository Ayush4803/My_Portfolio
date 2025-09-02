import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Toast notification system */}
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#1f2937", // Tailwind gray-800
          color: "#fff",
          border: "1px solid #374151", // gray-700 border
        },
        success: {
          style: {
            background: "#10b981", // emerald-500
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#ef4444", // red-500
            color: "#fff",
          },
        },
      }}
    />
  </React.StrictMode>
);
