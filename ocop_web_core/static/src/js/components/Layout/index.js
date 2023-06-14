/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header";

export class Layout extends Component {
  static template = "ocop_web_core.Layout";
  static components = { Footer, Header };
}
