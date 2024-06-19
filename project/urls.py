import registration_page, login_page, home_page, main_page, shop_page, basket_page, admin_app
from .settings import project_log

registration_page.registration.add_url_rule(rule = "/Registration/", view_func = registration_page.show_reg_page, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = registration_page.registration)

login_page.login.add_url_rule(rule = "/Authorization/", view_func = login_page.show_log_page, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = login_page.login)


home_page.home.add_url_rule(rule = "/", view_func = home_page.show_home_page, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = home_page.home)


main_page.main.add_url_rule(rule = "/Home/", view_func = main_page.show_main_page, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = main_page.main)

shop_page.shop.add_url_rule(rule = "/Shop/", view_func = shop_page.render_shop, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = shop_page.shop)

basket_page.basket.add_url_rule(rule = "/Basket/", view_func = basket_page.show_basket_page, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = basket_page.basket)

admin_app.admin.add_url_rule(rule = "/Admin/", view_func = admin_app.render_admin, methods = ["GET", "POST"])
project_log.register_blueprint(blueprint = admin_app.admin)