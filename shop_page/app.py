import flask 

shop = flask.Blueprint(
    name = "shop",
    import_name = "app",
    template_folder = "shop_page/templates",
    static_folder = "shop_page/static"
)