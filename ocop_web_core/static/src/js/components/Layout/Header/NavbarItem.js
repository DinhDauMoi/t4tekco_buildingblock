/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";

export class NavbarItem extends Component {
  static props = {
    route: String,
    name: String,
  };

  setup() {
    this.location = location.pathname;
  }

  static template = "ocop_web_core.NavbarItem";
}
