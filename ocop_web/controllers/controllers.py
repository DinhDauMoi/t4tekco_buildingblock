# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class Ocop_web(http.Controller):
    @http.route("/ocop.one", type="http", website=True, auth="public")
    def index(self, **kw):
        return request.render("ocop_web.ocop")

    @http.route("/ocop1", type="http", website=True)
    def Event(self, **kw):
        return request.render("ocop_web.Eventbody")
