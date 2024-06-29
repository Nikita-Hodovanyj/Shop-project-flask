import flask
import flask_login
from project.settings import db
from .models import User


def show_reg_page():
    print('Не вошел')
    if flask.request.method == "POST":
        print("Вошел")
        print(flask.request.form)
        user = User(
            name=flask.request.form['name'],
            email=flask.request.form['email'],
            password=flask.request.form['password'],
            password_confirmation=flask.request.form['password_confirmation']
           
        )
        try:
            db.session.add(user)
            db.session.commit()
        except:
            return 'Error'
        print(User.query.all())
    return flask.render_template(template_name_or_list="registration.html")

