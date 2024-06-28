import flask
import flask_mail
from flask_mail import Mail, Message
from shop_page.models import Product
from project.settings import project_log
from project.send_mail import mail
from project.settings import db
def show_basket_page():
    if flask.request.cookies:
        list_id_products = flask.request.cookies.get('products').split(' ')

        list_products = []
        list_same_id = []
        
        for id_products in list_id_products:
            count_products = list_id_products.count(id_products)
            if id_products not in list_same_id:
                product = Product.query.get(id_products)
                product.count = count_products
                list_products.append(product)
                list_same_id.append(id_products)

        if flask.request.method == 'POST':
            # Формируем текст с информацией о товарах
            products_info = '\n'.join([f"{product.name} (Количество: {product.count})" for product in list_products])

            msg = Message(
                'Hello',
                sender = 'nikitagodovanyj@gmail.com',
                recipients = [user.email for user in db.query.all()],
                body = f'!\n\nВітаємо, ви купили:\n{products_info}'
            )
            mail.send(msg)

        return flask.render_template(template_name_or_list='basket.html', products=list_products)
    else:
        return flask.render_template(template_name_or_list='basket.html')



