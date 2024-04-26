import flask_login
import flask

def show_home_page():
    if flask_login.current_user.is_authenticated:
        user_name = flask_login.current_user.name
        return flask.render_template(template_name_or_list="home.html", name=user_name)
    else:
        
        return flask.render_template(template_name_or_list="home.html")
