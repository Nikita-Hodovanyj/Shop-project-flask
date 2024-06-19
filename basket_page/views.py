import flask
from shop_page.models import Product

def show_basket_page():
    if flask.request.cookies:
        list_id_products = flask.request.cookies.get('products').split(' ')

        list_products = []
        list_same_id = []

        for id_products in list_id_products:
            count_products = list_id_products.count(id_products)
            if id_products not in list_same_id:
                list_products.append(Product.query.get(id_products))
                list_same_id.append(id_products)
                list_products[-1].count = count_products

        return flask.render_template(template_name_or_list='basket.html', products = list_products)
    else:
        return flask.render_template(template_name_or_list='basket.html')