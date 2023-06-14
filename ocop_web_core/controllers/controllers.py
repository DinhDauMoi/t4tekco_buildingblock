# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class UserController(http.Controller):
    @http.route("/api/me", auth="user", type="json", methods=["POST"])
    def current_user(self, **post):
        return {
            "id": request.env.user.id,
            "name": request.env.user.name or request.env.user.login,
        }

    @http.route("/ocop/sample", auth="public", type="http", website=True)
    def ocop(self, **post):
        # Just Sample
        return request.render("ocop_web_core.sample")
