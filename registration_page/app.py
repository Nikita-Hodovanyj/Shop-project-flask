import flask

registration = flask.Blueprint(
    name= "registration" ,
    import_name= "app",
    template_folder= "registration_page/templates",
    static_folder= "project/static"
    
)