/** @odoo-module **/

import { Component } from "@odoo/owl";
import registry from "@ocop_web_core/core/registry";

export class Footer extends Component {
  static template = "ocop_web_core.Footer";
}

registry.component.add({
  selector: "#ocop-footer",
  component: Footer,
  prod: true,
});
