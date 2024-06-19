from project.settings import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(30), nullable = False)
    price = db.Column(db.Integer, nullable = False)
   
    def __repr__(self):
        return f"Користувач - {self.name} Номер в базі -  {self.id}"