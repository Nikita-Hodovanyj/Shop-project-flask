import flask, flask_migrate, flask_sqlalchemy, os


project_log = flask.Flask(
    import_name = "settings",
    template_folder = "project/templates",
    instance_path = os.path.abspath(__file__ + "/.."),
    static_folder = "project/static"
)
project_log.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"

db = flask_sqlalchemy.SQLAlchemy(app = project_log)

migrate = flask_migrate.Migrate(app= project_log, db= db)