import flask

basket = flask.Blueprint(
    name = "basket" ,
    import_name = "app",
    template_folder = "basket_page/templates",
    static_folder= "basket_page/static"
)