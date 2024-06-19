import flask
from project.settings import db
from shop_page.models import Product
import pandas
import os
def render_admin():
     if flask.request.method == 'POST':
        path_xlsx = os.path.abspath(__file__ + "/../../shop_page/Products.xlsx" )
        read_xl = pandas.read_excel(
            io = path_xlsx,
            header = None,
            names = ["name", "price", "memory256", "memory512", "memory1"]
            
        )
        for row in read_xl.iterrows():
            row_data = row[1]
            product = Product(
                name = row_data["name"],
                price = row_data["price"],
                
                
            )
            db.session.add(product)
        db.session.commit()
        print(read_xl)
     return flask.render_template(template_name_or_list = 'admin.html', products = Product.query.all())



