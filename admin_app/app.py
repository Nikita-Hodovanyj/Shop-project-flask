import flask

admin = flask.Blueprint(
    name = 'admin_a',
    import_name = 'admin',
    template_folder = 'admin_app/templates',
    static_folder = 'admin_app/static',
    static_url_path = '/admin/'
)


