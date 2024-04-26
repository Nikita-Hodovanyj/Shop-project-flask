import flask_login
from .settings import project_log
from registration_page.models import User

project_log.secret_key = "key"

login = flask_login.LoginManager(app = project_log)

@login.user_loader
def load(id):
    return User.query.get(id)
