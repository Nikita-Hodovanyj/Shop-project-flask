import flask, flask_login
from project.settings import db
from .models import User

def show_reg_page():
    if flask.request.method == "POST":
        user = User(
            name = flask.request.form['name'],
            password = flask.request.form['password']
            
        )
        try:
            db.session.add(user)
            db.session.commit()
        except:
            return 'Error'   
    print(User.query.all())
    return flask.render_template(template_name_or_list= "registration.html")
