import { mount } from "svelte";
import App from "./App.svelte";
import "./app.css";

import { name, version } from "../package.json";

const app = mount(App, {
  target: document.body,
  props: { name, version },
});
export default app;
