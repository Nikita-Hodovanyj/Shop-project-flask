import registration_page, login_page, home_page
from .settings import project_log

registration_page.registration.add_url_rule(rule = "/Registration/", view_func = registration_page.show_reg_page, methods = ["GET", "POST"])

project_log.register_blueprint(blueprint = registration_page.registration)

login_page.login.add_url_rule(rule = "/Authorization/", view_func = login_page.show_log_page, methods = ["GET", "POST"])

project_log.register_blueprint(blueprint = login_page.login)


home_page.home.add_url_rule(rule = "/", view_func = home_page.show_home_page, methods = ["GET", "POST"])

project_log.register_blueprint(blueprint = home_page.home)