/** @odoo-module **/

import { mount } from "@odoo/owl";
import { templates } from "@web/core/assets";
import registry from "./core/registry";

const _mount = (selector, component, dev) => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    mount(component, element, { templates, dev: dev });
  }
};

function loader() {
  for (const _component of registry.component.all()) {
    const { selector, component, route, dev } = _component;
    if (route) {
      if (route === location.pathname) {
        _mount(selector, component, dev);
      }
    } else {
      _mount(selector, component, dev);
    }
  }
}

owl.whenReady(() => {
  loader();
});
