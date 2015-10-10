import {App} from "./App";

import "./module/dashboard/Dashboard";
import "./module/menu/Menu";
import "./module/auth/Auth";
import "./services/EndpointService";

import "./style/style.css!";

App.element(document).ready(() => {
  App.bootstrap(document, [
    "app",
    "app.dashboard",
    "app.auth",
    "app.services",
    "app.menu"
  ]);
});
