# -*- coding: utf-8 -*-
{
    "name": "OCOP Web Core",
    "summary": """Provide a way to develop web components with OWL""",
    "description": """Huhuhu""",
    "author": "T4Tek Team",
    "website": "https://ocop.one/",
    "category": "Website",
    "version": "16.0.1.0.0",
    "depends": [
        "ocop",
        "web",
        "web_editor",
    ],
    "data": ["views/templates.xml"],
    "assets": {
        "ocop_web_core._awesome": [
            "ocop_web_core/static/lib/fontawesome/css/all.css",
        ],
        "ocop_web_core._bootstrap": [
            "ocop_web_core/static/lib/bootstrap/css/bootstrap.min.css",
            "ocop_web_core/static/lib/bootstrap/js/bootstrap_assets.js",
        ],
        "ocop_web_core._boot": [
            "ocop_web_core/static/src/core/**/*",
            "ocop_web_core/static/src/loader.js",
        ],
        "ocop_web_core._components": [
            "ocop_web_core/static/src/js/components/**/*",
        ],
        "ocop_web_core.web_assets_core": [
            "web/static/lib/luxon/luxon.js",
            "web/static/src/legacy/js/promise_extension.js",  # required by boot.js
            "web/static/src/boot.js",  # odoo module system
            "web/static/src/env.js",  # required for services
            "web/static/src/session.js",  # expose __session_info__ containing server information
            "web/static/lib/owl/owl.js",  # owl library
            "web/static/lib/owl/odoo_module.js",  # to be able to import "@odoo/owl"
            #
            "web/static/src/core/utils/functions.js",
            "web/static/src/core/browser/browser.js",
            "web/static/src/core/registry.js",
            "web/static/src/core/assets.js",
            #
            ("include", "ocop_web_core._boot"),
            # 3rd
            ("include", "ocop_web_core._bootstrap"),
            ("include", "ocop_web_core._awesome"),
            # Components
            ("include", "ocop_web_core._components"),
        ],
    },
    "license": "LGPL-3",
}  # type: ignore
