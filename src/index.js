import { createRoot } from "react-dom/client";
import { App } from "./Components";

const root = createRoot(document.querySelector("#app"))

root.render(<App />)