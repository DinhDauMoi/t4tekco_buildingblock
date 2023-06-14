/** @odoo-module **/

import { loadJS } from "@web/core/assets";

(async function () {
  await loadJS(
    "/ocop_web_core/static/lib/bootstrap/js/bootstrap.bundle.min.js"
  );
})();
