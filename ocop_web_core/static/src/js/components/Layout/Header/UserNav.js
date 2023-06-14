/** @odoo-module **/

import { Component } from "@odoo/owl";

export class UserNav extends Component {
  static props = {
    user: {
      type: Object,
      shape: {
        id: Number,
        name: String,
      },
    },
  };
  static template = "ocop_web_core.UserNav";
}
