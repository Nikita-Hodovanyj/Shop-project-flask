import flask_mail
from flask_mail import Mail, Message
from project.settings import project_log


project_log.config['MAIL_SERVER'] = 'smtp.gmail.com'
project_log.config['MAIL_PORT'] = 587
project_log.config['MAIL_USE_TLS'] = True
project_log.config['MAIL_USE_SSL'] = False
project_log.config['MAIL_USERNAME'] = 'av3411261@gmail.com'
project_log.config['MAIL_PASSWORD'] = 'wygl tauf cxle aexq'
project_log.config['MAIL_DEFAULT_SENDER'] = 'nikitagodovanyj@gmail.com'


