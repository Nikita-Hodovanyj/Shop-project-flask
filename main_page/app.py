import flask

main = flask.Blueprint(
    name= "main" ,
    import_name = "app",
    template_folder= "main_page/templates",
    static_folder= "project/static"
)