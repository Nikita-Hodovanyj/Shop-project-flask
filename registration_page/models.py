from project.settings import db
import flask_login

class User(db.Model,flask_login.UserMixin):
    id = db.Column(db.Integer, primary_key = True)#unique = True
    name = db.Column(db.String(20), nullable = False)
    email = db.Column(db.String(20), nullable = False)
    password = db.Column(db.String(30), nullable = False)
    password_confirmation = db.Column(db.String(30), nullable = False)

    

    def __repr__(self) -> str:
        return f"name: {self.name}"
