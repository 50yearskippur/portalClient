import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pdfjs } from "react-pdf";

// Set up worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
