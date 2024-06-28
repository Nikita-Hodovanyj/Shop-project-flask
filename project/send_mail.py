import flask_mail
from flask_mail import Mail, Message
from .settings import project_log


project_log.config['MAIL_SERVER'] = 'smtp.gmail.com'
project_log.config['MAIL_PORT'] = 587
project_log.config['MAIL_USE_TLS'] = True
project_log.config['MAIL_USE_SSL'] = False
project_log.config['MAIL_USERNAME'] = 'nikitagodovanyj@gmail.com'
project_log.config['MAIL_PASSWORD'] = 'wygl tauf cxle aexq'


mail = Mail(project_log)
