/** @odoo-module **/

import { Component, onMounted, useRef } from "@odoo/owl";

export class Collapse extends Component {
  static props = {
    slots: {
      type: Object,
      shape: {
        default: Object,
        title: { type: Object, optional: true },
      },
    },
    id: String,
    name: String,
    collapsed: { type: Boolean, optional: true },
    class: { type: String, optional: true },
    style: { type: String, optional: true },
  };

  static defaultProps = {
    class: "",
    style: "",
    collapsed: true,
  };

  setup() {
    this.ref = useRef("btn");

    onMounted(() => {
      if (this.ref.el) {
        this.ref.el.setAttribute("data-bs-target", `#${this.props.id}`);
        this.ref.el.setAttribute("aria-controls", `${this.props.id}`);
        this.ref.el.setAttribute("aria-expanded", `${!this.props.collapsed}`);
      }
    });
  }

  static template = "ocop_web_core.Collapse";
}
