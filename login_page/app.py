import flask

login = flask.Blueprint(
    name= "login" ,
    import_name= "app",
    template_folder= "login_page/templates"
)