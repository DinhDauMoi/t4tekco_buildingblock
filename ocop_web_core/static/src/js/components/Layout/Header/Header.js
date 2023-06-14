/** @odoo-module **/

import { Component, onWillStart } from "@odoo/owl";
import { NavbarItem } from "./NavbarItem";
import { UserNav } from "./UserNav";
import { jsonrpc } from "@ocop_web_core/core/jsonrpc";
import registry from "@ocop_web_core/core/registry";

export class Header extends Component {
  setup() {
    this.user = false;
    onWillStart(async () => {
      this.items = registry.header.all();

      const response = await jsonrpc("/api/me");

      const { result } = response;
      if (result) {
        this.user = result;
      }
    });
  }

  static components = { NavbarItem, UserNav };
  static template = "ocop_web_core.Header";
}

registry.component.add({
  selector: "#ocop-header",
  component: Header,
  prod: true,
});
