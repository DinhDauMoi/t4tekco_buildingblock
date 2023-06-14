/** @odoo-module **/

import { Registry } from "@web/core/registry";

const _registry = new Registry();

const component = () => {
  const _component = _registry.category("component");
  return {
    add: ({ selector = "", component, route = "", prod = false } = {}) => {
      console.log("Register add:", selector);
      if (!selector.trim()) {
        console.error("Selector must not be empty");
        return;
      }
      _component.add(selector, {
        selector: selector,
        component: component,
        route: route,
        dev: !prod,
      });
    },
    all() {
      return _component.getAll();
    },
  };
};

const header = () => {
  const _header = _registry.category("header");

  return {
    all({ sorted = true } = {}) {
      const items = _header.getAll();
      if (sorted) {
        return items.sort((a, b) => a.sequence - b.sequence);
      }

      return items;
    },
    add({ id, name, route, sequence = 1 } = {}) {
      id = String(id).trim();
      if (!id) {
        console.error("Missing ID");
        return;
      }

      if (!name || !route) {
        console.error("name or route empty");
        return;
      }

      _header.add(id, { id, name, route, sequence });
    },
    update({ id, name, route, sequence } = {}) {
      id = String().trim();
      if (!id || !_header.contains(id)) {
        console.error("ID?");
        return;
      }

      const current_obj = _header.get(id);
      if (name) {
        current_obj.name = name;
      }
      if (route) {
        current_obj.route = route;
      }
      if (sequence) {
        current_obj.sequence = sequence;
      }

      _header.set(id, current_obj);
    },
    remove(id) {
      id = String.trim();

      _header.remove(id);
    },
  };
};

const registry = {
  component: component(),
  header: header(),
};

export default registry;
