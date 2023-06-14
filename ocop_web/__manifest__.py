# -*- coding: utf-8 -*-
{
    "name": "OCOP Web",
    "summary": """
        Cook luon roi""",
    "description": """
        Huhuhu
    """,
    "author": "T4Tek Team",
    "website": "https://ocop.one/",
    "version": "16.0.1.0.0",
    "category": "Website",
    # any module necessary for this one to work correctly
    'depends': ['base','ocop_web_core'],

    # always loaded
    "data": [
        "views/views.xml",
        "views/templates.xml",
        "views/Eventbody.xml",
        "views/homepage.xml",
        "views/footer_templates.xml",
        "views/header_templates.xml",
        'views/snippets/slide.xml',
        'views/snippets/snippets.xml',
        #Template snippet upcoming Event
        "views/EventSnippet/templatesEvent.xml",
        "views/EventSnippet/UpconingEvent.xml",
    ],
    "assets":{
        "ocop_web.assetsourpartership":[
            "ocop_web/static/src/css/ourparterships.css",
        ],
        
    }
}
