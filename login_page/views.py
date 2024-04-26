import flask, flask_login

from registration_page.models import User

def show_log_page():
    
    if flask.request.method == "POST":
        users = User.query.filter_by(
            name = flask.request.form["name"],
            password = flask.request.form["password"]
        )
        
        if len(list(users)) == 0:
            return "Невірний пароль"
        else:
            flask_login.login_user(users[0])
            return flask.redirect("/")
    print(User.query.all())
    return flask.render_template(template_name_or_list= "login.html")
