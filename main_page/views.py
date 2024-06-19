

import flask, flask_login

from registration_page.models import User

def show_main_page():
    if flask_login.current_user.is_authenticated:
        user_name = flask_login.current_user.name
    else:
        user_name = ''
    return flask.render_template(template_name_or_list="main.html", userName = user_name )
   