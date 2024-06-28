# Інтернет-магазин

## Список учасників команди:
- Никита Годований(TEAMLEAD)/Nikita Hodovanyj(TEAMLEAD) - [GitHub](https://github.com/Nikita-Hodovanyj)
- Артем Власов/Artem Vlasov - [GitHub](https://github.com/ArtemVlasov2009)
- Кирило Кутовий/Kyrylo Kutovyi - [GitHub](https://github.com/Kutovoi-Kirill)
---
## Що робить наш проект/What our project does

##### Наш проект це інтернет магазин з різними товарами, з встроєним телеграм ботом, та відправкою свовіщення на електронну почту, та доданою адмін панелю, що б було зручно керувати продуктами / Our project is an online store with various products, with a built-in telegram bot, and sending notifications by email, and an added admin panel that would be convenient to manage products

---
В нашому проекті використовується багато технологій, а саме/Our project uses many technologies, namely:
Flask, GitHub, SQLite3, pandas, telebot, HTML, CSS, Javascript, 
### Для роботи і запуску нашого проекту знадобляться/To work and launch our project, you will need:

- **Flask** - Фреймворк для створення всього проекту
- **Flask-SQLALchemy** - Викоритовуємо для праці з sqlite3
- **Flask-Login** - Додаємо авториуцію на сайт
- **Flask-Migrate** - Для оновлення даних в базі даниз
- **Flask-Mail** - Для відправки сповіщення на електронну почту
- **pandas**- Для роботи з файлами, а саме таблицею
- **telebot** - Використовуємо для створення бота в телеграмі
- **Jinja2** - Шаблонізатор
- **requests** - Використовуємо для роботи з запросами

---
#### Щоб запустити наш проект локально на компьютері, треба відкрити проект у IDE, та встановити всі модулі, які вказані вище, та запустити файл manage.py / To run our project locally on your computer, you need to open the project in the IDE, install all the modules listed above, and run the manage.py file
---
#### Щоб запустити проект віддалено, на сервері, треба використовувати хост [PythonAnywhere](https://www.pythonanywhere.com) / To run the project remotely on the server, you need to use the [PythonAnywhere] host (https://www.pythonanywhere.com)  
---
## В нашому проекті є декілька окремих застосунків, а саме / Our project has several specific applications, namely:

- **home_page** - Це початкова сторінка
- **registration_page** - Це додаток який відповідає за реєстрацію
- **login_page** - Це додаток який відповідає за авторизацію
- **shop_page** - Це сторінка яка відповідає за всі товари, які є в наявності 
- **basket_page** - Це сторінка яка відповідає за обрані вами товари
- **admin_page** - Це сторінка для власників магазину, продавців які можуть редагувати товари
- **main_page** - Це головна сторінка нашого проекту
---
![plantuml](https://www.planttext.com/api/plantuml/svg/ZLRBRjim4BplLx3nEO1UTfnBaQI8pxqNHS1MXAnQ3q9Ysj-lk1HfFXQGRfpbx53cpX1-cHMVr6VVmHTr5RrWikFj0FEj7IIVUCycFjnc8LcHUSLXh8Kkbdvn4hyL7vfEVETrtGuDopC0LsGFytMK7t8Q_oob1yPdjgxPuVpqxVtzBU0AfHQ96NaMiCFp-VBsVFQ9drDdI7hX23wZNtxFX-IDG9f6x72vl6PFhpxhElRYpjA8OasYQMSrSTMEdgPVfRgwiV4_0I75CnTaQHfHh5zylWbrvnbCCNdT--SYTBo0AALXI9bHb_ot5V_CBUCg8-_P4ybtYEHR8iKE4PBJB-PSJM6MnTPHvOwZoYsHQeS8oKc-jzewwhZZgEEMo6c7o9q3DgoFFwvjNOlXP_turIKJN4I3RPr904ncKDSX9CewTKJPZnUnZN4YwZe_HDd4XTZ0U03W0n5kBAa0Z4PGDb40mBSYRiW1Ov0sv7eStdCHDnQ0rayR2rWT7zwaCJY0ULHYjHBGtQbQ2O3lIznG0JevRQXWDJ1nV0MmFaAnt17GhQdS4S0yHt772T2QQSV9io3jlCXmeSz2Uz6kYimKUYYsJkmOQnI7GdzOMpX4ky6Q8Ack7aZgiG7itEymdBSTiqFhT1rEHcedwU5eX6vo3jg9lOYXNlvR_0S0)
---
### Щоб створити шаблон нашого проекту, треба зробити подальші дії / To create a template for our project, we need to take the following steps:

потрібно створити елемент класу **Flask** за допомогою модуля **flask** і задати йому необхідні параметри: 
- **import_name** - назва директорії
- **template-folder** - шлях до папки з шаблонами а саме **templates** 
- **instance-path** - абсолютний шлях до директорії, у якій знаходиться даний файл.
---
### Щоб створити веб-сторінку треба зробити подальші дії / To create a web page, you need to take the following steps:
Для створення веб-сторінок треба застосувати класс **Blueprint**, в якому треба задати такі параметри:
- **name** - відповідає за назву нашої сторінки.
- **import_name** -  відповідає за назву дерикторії, з структурою.
- **template_folder** - відповідає за директорію шаблонів, яка містить в собі html файл.
- **static_folder** - відповідає за директорію static, яка містить в собі статичні файли, а семе:
- файли css, js, картинок, відео та ін.
- **static_url_path** - відповідає за URL шлях до статичних файлів у нашому додатку.
---
### app.py:
```python
import flask  # Імпортуємо модуль Flask / Import the Flask module

home = flask.Blueprint(  # Створюємо новий Blueprint з ім'ям 'home' / Create a new Blueprint with the name 'home'
    name="home",  # Вказуємо ім'я Blueprint як 'home' / Specify the Blueprint name as 'home'
    import_name="app",  # Вказуємо ім'я імпорту як 'app' / Specify the import name as 'app'
    template_folder="home_page/templates"  # Вказуємо шлях до шаблонів / Specify the path to the templates
)
```
#### Створюємо головний додаток нашого проекту / Creating the main application of our project

---


# Під'єднуємо Blueprint до Flask/Connect Blueprint to Flask:
### urls.py:

```python
import registration_page, login_page, home_page, main_page, shop_page, basket_page, admin_app
from .settings import project_log

# Додавання маршруту для сторінки реєстрації / Adding a route for the registration page
registration_page.registration.add_url_rule(rule = "/Registration/", view_func = registration_page.show_reg_page, methods = ["GET", "POST"])
# Реєстрація blueprint для сторінки реєстрації / Registering the blueprint for the registration page
project_log.register_blueprint(blueprint = registration_page.registration)

# Додавання маршруту для сторінки авторизації / Adding a route for the login page
login_page.login.add_url_rule(rule = "/Authorization/", view_func = login_page.show_log_page, methods = ["GET", "POST"])
# Реєстрація blueprint для сторінки авторизації / Registering the blueprint for the login page
project_log.register_blueprint(blueprint = login_page.login)

# Додавання маршруту для головної сторінки / Adding a route for the home page
home_page.home.add_url_rule(rule = "/", view_func = home_page.show_home_page, methods = ["GET", "POST"])
# Реєстрація blueprint для головної сторінки / Registering the blueprint for the home page
project_log.register_blueprint(blueprint = home_page.home)

# Додавання маршруту для сторінки головної сторінки / Adding a route for the main page
main_page.main.add_url_rule(rule = "/Home/", view_func = main_page.show_main_page, methods = ["GET", "POST"])
# Реєстрація blueprint для сторінки головної сторінки / Registering the blueprint for the main page
project_log.register_blueprint(blueprint = main_page.main)

# Додавання маршруту для сторінки магазину / Adding a route for the shop page
shop_page.shop.add_url_rule(rule = "/Shop/", view_func = shop_page.render_shop, methods = ["GET", "POST"])
# Реєстрація blueprint для сторінки магазину / Registering the blueprint for the shop page
project_log.register_blueprint(blueprint = shop_page.shop)

# Додавання маршруту для сторінки кошика / Adding a route for the basket page
basket_page.basket.add_url_rule(rule = "/Basket/", view_func = basket_page.show_basket_page, methods = ["GET", "POST"])
# Реєстрація blueprint для сторінки кошика / Registering the blueprint for the basket page
project_log.register_blueprint(blueprint = basket_page.basket)

# Додавання маршруту для адміністративної сторінки / Adding a route for the admin page
admin_app.admin.add_url_rule(rule = "/Admin/", view_func = admin_app.render_admin, methods = ["GET", "POST"])
# Реєстрація blueprint для адміністративної сторінки / Registering the blueprint for the admin page
project_log.register_blueprint(blueprint = admin_app.admin)
```

До змінної класу Blueprint, для цього застосовуємо функцію  **add_url_rule**, і задаемо параметри: **rule** -  шлях до сторінки.
**view_func** - функція для відображення сторінки, що включає **render_template** та **methods** - види запитів сторінки **(Get, Post)**.
До змінної класу *Flask** використовуємо функцію **register_blueprint** з таким параметром:
**blueprint** - екземпляр класу Blueprint.
---
### Views нашого проекту:
---
### shop_page:
```python
import flask  # Імпорт бібліотеки Flask / Import the Flask library
from project.settings import db  # Імпорт об'єкту бази даних з налаштувань проекту / Import the database object from the project settings
from .models import Product  # Імпорт моделі Product з поточного пакету / Import the Product model from the current package
import pandas  # Імпорт бібліотеки pandas / Import the pandas library
import os  # Імпорт модуля os для роботи з файловою системою / Import the os module for working with the file system

def render_shop():  # Визначення функції render_shop / Define the render_shop function
    if flask.request.method == 'POST':  # Перевірка, чи метод запиту POST / Check if the request method is POST
        path_xlsx = os.path.abspath(__file__ + "/../Products.xlsx")  # Отримання абсолютного шляху до файлу Products.xlsx / Get the absolute path to the Products.xlsx file
        read_xl = pandas.read_excel(  # Читання даних з Excel файлу / Read data from the Excel file
            io=path_xlsx,  # Вказання шляху до файлу / Specify the file path
            header=None,  # Відсутність заголовка / No header
            names=["name", "price", "memory256", "memory512", "memory1"]  # Визначення імен колонок / Define column names
        )
        for row in read_xl.iterrows():  # Проходження по кожному рядку Excel файлу / Iterate over each row of the Excel file
            row_data = row[1]  # Отримання даних рядка / Get the row data
            product = Product(  # Створення нового об'єкта Product / Create a new Product object
                name=row_data["name"],  # Встановлення імені продукту / Set the product name
                price=row_data["price"],  # Встановлення ціни продукту / Set the product price
            )
            db.session.add(product)  # Додавання продукту до сесії бази даних / Add the product to the database session
        db.session.commit()  # Фіксація змін в базі даних / Commit the changes to the database
        print(read_xl)  # Друк зчитаних даних з Excel файлу / Print the read data from the Excel file

    return flask.render_template(template_name_or_list='shop.html', products=Product.query.all())  # Рендеринг шаблону shop.html з усіма продуктами / Render the shop.html template with all products

```
До кожної сторінки написаний окремий файл **views.py**, який відповідає за рендеру сторінки.
У **views** є функція **render**, що викликається кожного разу, як сторінка оновлюється.

### home_page:
```python
import flask_login  # Імпортуємо модуль flask_login для автентифікації користувачів / Import the flask_login module for user authentication

import flask  # Імпортуємо модуль flask для роботи з веб-сервером Flask / Import the flask module for working with the Flask web server

def show_home_page():
    if flask_login.current_user.is_authenticated:  # Перевіряємо, чи автентифікований поточний користувач за допомогою flask_login / Check if the current user is authenticated using flask_login
        user_name = flask_login.current_user.name  # Отримуємо ім'я автентифікованого користувача / Get the name of the authenticated user
        return flask.render_template(template_name_or_list="home.html", name=user_name)  # Повертаємо сторінку "home.html" з передачею імені користувача / Return the "home.html" page passing the user's name
    else:
        return flask.render_template(template_name_or_list="home.html")  # Повертаємо сторінку "home.html" для неавтентифікованих користувачів / Return the "home.html" page for non-authenticated users

```
# registration_page:
```python
import flask  # Імпорт бібліотеки Flask / Import the Flask library
import flask_login  # Імпорт бібліотеки для автентифікації в Flask / Import the library for authentication in Flask
from project.settings import db  # Імпорт налаштувань бази даних з проекту / Import database settings from the project
from .models import User  # Імпорт моделі користувача з поточного модуля / Import the user model from the current module


def show_reg_page():
    print('Не вошел')  # Виведення у консоль рядка "Не вошел" / Print "Not logged in" to console
    if flask.request.method == "POST":
        print("Вошел")  # Виведення у консоль рядка "Вошел" у разі виконання POST-запиту / Print "Logged in" to console if POST request
        print(flask.request.form)  # Виведення у консоль отриманих даних з POST-запиту / Print received data from POST request
        user = User(
            name=flask.request.form['name'],
            email=flask.request.form['email'],
            password=flask.request.form['password'],
            password_confirmation=flask.request.form['password_confirmation']
        )  # Створення нового об'єкта користувача з отриманими даними / Creating a new user object with received data
        try:
            db.session.add(user)
            db.session.commit()
        except:
            return 'Error'  # Обробка винятку у разі помилки збереження у базі даних / Handling exception if database save fails
        print(User.query.all())  # Виведення усіх користувачів у консоль після додавання нового / Print all users to console after addition
    return flask.render_template(template_name_or_list="registration.html")  # Повернення шаблону реєстрації для відображення / Returning the registration template for rendering

```

### login_page:
```python
import flask, flask_login  # Імпортуємо Flask і Flask-Login

from registration_page.models import User  # Імпортуємо модель користувача з файлу models.py

def show_log_page():
    perevirka = "True"  # Ініціалізуємо змінну для перевірки

    # Перевіряємо, чи був викликаний метод POST
    if flask.request.method == "POST":
        users = User.query.filter_by(
            name = flask.request.form["name"],  # Фільтруємо користувачів за ім'ям з форми
            password = flask.request.form["password"]  # Фільтруємо користувачів за паролем з форми
        )
        
        # Якщо не знайдено жодного користувача
        if len(list(users)) == 0:
            perevirka = "False"  # Встановлюємо, що перевірка не пройшла
        else:
            flask_login.login_user(users[0])  # Логінимо першого знайденого користувача
            return flask.redirect("/Home/")  # Перенаправляємо на сторінку Home
    
    print(User.query.all())  # Виводимо усіх користувачів у консоль (для відладки)
    return flask.render_template(template_name_or_list="login.html", perevirka=perevirka)  # Рендеримо шаблон login.html з параметрами

```

### main_page:
```python
import flask, flask_login  # Імпорт бібліотек Flask і Flask-Login / Importing Flask and Flask-Login libraries

from registration_page.models import User  # Імпорт моделі користувача з модуля registration_page / Importing User model from registration_page module

def show_main_page():
    if flask_login.current_user.is_authenticated:
        user_name = flask_login.current_user.name  # Якщо користувач увійшов у систему, отримуємо його ім'я / If user is authenticated, retrieve their name
    else:
        user_name = ''  # Якщо користувач не увійшов у систему, ім'я залишається порожнім / If user is not authenticated, name remains empty
    return flask.render_template(template_name_or_list="main.html", userName=user_name)
    # Повертаємо шаблон main.html, передаючи ім'я користувача для відображення / Returning main.html template with user name for rendering
```

### basket_page:
```python
# Імпортуємо Flask framework та Flask-Mail для роботи з поштою /
# Importing Flask framework and Flask-Mail for email functionality
import flask
import flask_mail
from flask_mail import Mail, Message

# Імпортуємо моделі продуктів та налаштування з проекту /
# Importing product models and project settings
from shop_page.models import Product
from project.settings import project_log

# Функція для відображення сторінки кошика /
# Function to display the basket page
def show_basket_page():
    # Перевіряємо, чи є cookies у запиті /
    # Checking if there are cookies in the request
    if flask.request.cookies:
        # Отримуємо список ID продуктів з cookies /
        # Getting the list of product IDs from cookies
        list_id_products = flask.request.cookies.get('products').split(' ')

        list_products = []
        list_same_id = []
        mail = Mail(project_log)

        # Ітеруємося по списку ID продуктів /
        # Iterating over the list of product IDs
        for id_products in list_id_products:
            # Обчислюємо кількість продуктів з однаковим ID /
            # Counting the number of products with the same ID
            count_products = list_id_products.count(id_products)
            if id_products not in list_same_id:
                # Додаємо продукт до списку, якщо його ID ще не було /
                # Adding the product to the list if its ID hasn't been added yet
                list_products.append(Product.query.get(id_products))
                list_same_id.append(id_products)
                list_products[-1].count = count_products

        # Перевіряємо метод запиту POST /
        # Checking the POST request method
        if flask.request.method == 'POST':
            # Надсилаємо тестовий email за допомогою Flask-Mail /
            # Sending a test email using Flask-Mail
            msg = Message(
                'Hello',
                recipients=['av3411261@gmail.com'],
                body='This is a test email sent from Flask-Mail!'
            )
            mail.send(msg)
        
        # Повертаємо шаблон сторінки кошика з продуктами /
        # Returning the basket.html template with products
        return flask.render_template(template_name_or_list='basket.html', products=list_products)
    else:
        # Повертаємо шаблон сторінки кошика без продуктів, якщо cookies відсутні /
        # Returning the basket.html template without products if there are no cookies
        return flask.render_template(template_name_or_list='basket.html')
```


### admin_page:
```python
# Імпорт бібліотек і налаштувань проекту.
# Import libraries and project settings.
import flask
from project.settings import db
from shop_page.models import Product
import pandas
import os

def render_admin():
    # Перевірка методу запиту: якщо POST, то зчитування даних з Excel-файлу і додавання в базу даних.
    # Check request method: if POST, read data from Excel file and add to the database.
    if flask.request.method == 'POST':
        path_xlsx = os.path.abspath(__file__ + "/../../shop_page/Products.xlsx")
        read_xl = pandas.read_excel(
            io=path_xlsx,
            header=None,
            names=["name", "price", "memory256", "memory512", "memory1"]
        )
        # Ітерація по рядках Excel-файлу і додавання кожного продукту до бази даних.
        # Iterate through Excel rows and add each product to the database.
        for row in read_xl.iterrows():
            row_data = row[1]
            product = Product(
                name=row_data["name"],
                price=row_data["price"],
                # Додавання інших параметрів продукту за необхідності.
                # Adding other product parameters as needed.
            )
            db.session.add(product)
        db.session.commit()
        print(read_xl)  # Виведення зчитаних даних для перевірки.
    
    # Повернення шаблону 'admin.html' і всіх продуктів з бази даних для відображення.
    # Return the 'admin.html' template and all products from the database for display.
    return flask.render_template(template_name_or_list='admin.html', products=Product.query.all())
```

---

### Моделі проекту:
---
### registration_page:
```python
from project.settings import db  # Імпортуються налаштування бази даних з проекту / Importing database settings from the project
import flask_login  # Імпорт бібліотеки для управління логінами в Flask / Importing library for login management in Flask

class User(db.Model, flask_login.UserMixin):
    id = db.Column(db.Integer, primary_key=True)  # Поле для ідентифікатора користувача / Field for user identifier
    name = db.Column(db.String(20), nullable=False)  # Поле для імені користувача, не може бути порожнім / Field for user name, cannot be empty
    email = db.Column(db.String(20), nullable=False)  # Поле для електронної пошти користувача, не може бути порожнім / Field for user email, cannot be empty
    password = db.Column(db.String(30), nullable=False)  # Поле для паролю користувача, не може бути порожнім / Field for user password, cannot be empty
    password_confirmation = db.Column(db.String(30), nullable=False)  # Поле для підтвердження паролю користувача, не може бути порожнім / Field for user password confirmation, cannot be empty

    def __repr__(self) -> str:
        return f"name: {self.name}"  # Повертає рядок з ім'ям користувача при виклику об'єкта / Returns a string with the user's name when the object is called

```
##### Тут ми створюємо модель, завдяки якої, ми можемо зареєструватися, та потім відстежувати користувачів

### shop_page:

```python
# Імпортуємо db з налаштувань проекту.
from project.settings import db

# Створюємо клас "Product", який є моделлю бази даних.
class Product(db.Model):
    # Встановлюємо поле "id" як ціле число з автоматичним інкрементом як первинний ключ.
    id = db.Column(db.Integer, primary_key=True)
    # Встановлюємо поле "name" як рядок до 30 символів, не може бути пустим.
    name = db.Column(db.String(30), nullable=False)
    # Встановлюємо поле "price" як ціле число, не може бути пустим.
    price = db.Column(db.Integer, nullable=False)
   
    # Визначаємо метод "__repr__", який повертає рядок з інформацією про об'єкт.
    def __repr__(self):
        return f"Користувач - {self.name} Номер в базі - {self.id}"
```
##### Цей код визначає модель `Product` для бази даних, яка використовує ORM бібліотеку SQLAlchemy. Кожен продукт має унікальний ідентифікатор (`id`), назву (`name`) та ціну (`price`). Метод `__repr__` використовується для представлення об'єкта `Product` у вигляді рядка з назвою продукту та його ідентифікатором у базі даних. / This code defines the `Product` model for a database that uses the SQLAlchemy ORM library. Each product has a unique identifier (`id`), name (`name`) and price (`price`). The `__repr__` method is used to represent the `Product` object as a string with the name of the product and its identifier in the database.
---
### Для реалізації реєстрації, треба зробити подальші дії / To implement the registration, you need to take further steps: 
Треба зробити **BluePrint**, зарегеструвати його у **urls**, потім зробити функцію, яка буде додавати наші дані які ми ввели в нашу базу, ще треба зробити модель з нашими даними, такі як: **id**, **name**, **email**, **password**, **password_confirm**. Якщо всі дані введені вірно, то тоді пропонує авторизуватися, а якщо такі дані вже існують, то тоді пропонує авторизуватися / We need to make a **BluePrint**, register it in **urls**, then make a function that will add our data that we have entered into our database, we also need to make a model with our data, such as: **id**, **name**, **email**, **password**, **password_confirm**. If all the data is entered correctly, then it offers to log in, and if such data already exists, then it offers to log in

---
### Для реалізації авторизації, треба зробити подальщі дії / To implement authorisation, you need to take further steps:
Треба зробити **BluePrint**, зареєструвати його у **urls**, потім зробити функцію, яка перевіряє якщо була натиснута кнопка регитсрація, то тоді ми переходимо на нову сторінку, і в нас видається поле для вводу ім'я та паролю, воно перевіряє чи є таке значення у базі, якщо є, то тоді ми проходимо регестраці, там переходимо до застосунку, якщо нема таких данних то тоді вилазить модальне вікно, і просить зарегеструватися. / You need to make **BluePrint**, register it in **urls**, then make a function that checks if the registration button was pressed, then we go to a new page, and we get a field for entering a name and password, it checks if this value is in the database, if it is, then we register, then go to the application, if there is no such data, then a modal window pops up and asks to register.

---

## JS нашого проекту /  JS of our project

#### basket_page:

```js
// Отримуємо всі елементи з класом "product_price_b"
// / Get all elements with class "product_price_b"
let priceElements = document.querySelectorAll(".product_price_b");

// Отримуємо всі елементи з класом "product_count_b"
// / Get all elements with class "product_count_b"
let countElements = document.querySelectorAll(".product_count_b");

// Ініціалізуємо змінну для обчислення загальної суми без знижки
// / Initialize variable for calculating total price without discount
let totalPriceWithoutDiscount = 0;

// Цикл для обчислення загальної суми без знижки
// / Loop to calculate total price without discount
for (let i = 0; i < priceElements.length; i++) {
    // Отримуємо ціну товару, видаляючи всі символи окрім цифр, крапки і тире
    // / Get the price of the product, removing all characters except digits, dots, and dashes
    let price = parseFloat(priceElements[i].textContent.replace(/[^0-9.-]+/g, ""));
    // Отримуємо кількість товару
    // / Get the quantity of the product
    let count = parseInt(countElements[i].textContent);
    // Додаємо до загальної суми без знижки вартість цього товару
    // / Add the price of this product to the total price without discount
    totalPriceWithoutDiscount += price * count;
}

// Визначаємо відсоток знижки
// / Define the discount percentage
let discountPercentage = 10;

// Функція для обчислення суми знижки на основі ціни і відсотка знижки
// / Function to calculate the discount amount based on price and discount percentage
function calculateDiscountAmount(price, discountPercentage) {
    return price * (discountPercentage / 100);
}

// Ініціалізуємо змінну для обчислення загальної суми знижки
// / Initialize variable for calculating total discount amount
let totalDiscountAmount = 0;

// Цикл для обчислення загальної суми знижки
// / Loop to calculate total discount amount
for (let i = 0; i < priceElements.length; i++) {
    // Отримуємо ціну товару, видаляючи всі символи окрім цифр, крапки і тире
    // / Get the price of the product, removing all characters except digits, dots, and dashes
    let price = parseFloat(priceElements[i].textContent.replace(/[^0-9.-]+/g, ""));
    // Отримуємо кількість товару
    // / Get the quantity of the product
    let count = parseInt(countElements[i].textContent);
    // Додаємо до загальної суми знижки вартість цього товару з урахуванням знижки
    // / Add the price of this product to the total discount amount considering the discount
    totalDiscountAmount += calculateDiscountAmount(price * count, discountPercentage);
}

// Обчислюємо загальну суму, віднімаючи суму знижки від загальної суми без знижки
// / Calculate the total price by subtracting the total discount amount from the total price without discount
let totalPrice = totalPriceWithoutDiscount - totalDiscountAmount;

// Створюємо новий елемент div для відображення результатів
// / Create a new div element to display the results
let resultElement = document.createElement("div");
resultElement.classList.add("cart-details");
resultElement.innerHTML = `
    <div class="total-price">
        <span class="label">Загальна сума без знижки</span>
        <span class="value1">${totalPriceWithoutDiscount.toFixed(2)} грн</span>
    </div>
    <div class="discount">
        <span class="label">Загальна сума зі знижкою</span>
        <span class="value2">${totalDiscountAmount.toFixed(2)} грн</span>
    </div>
    <div class="final-price">
        <span class="label">Загальна сума до оплати</span>
        <span class="value3">${totalPrice.toFixed(2)} грн</span>
    </div>
`;

// Додаємо створений елемент до тіла документу
// / Append the created element to the document body
document.body.appendChild(resultElement);
```
```js
// Вибираємо всі кнопки з класом "minus"
// Select all buttons with class "minus"
let listButtonMinus = document.querySelectorAll(".minus")

// Цикл для кожної кнопки
// Loop through each button
for(let count = 0; count < listButtonMinus.length; count++){
    let button = listButtonMinus[count]

    // Додаємо подію "click" до кожної кнопки
    // Add "click" event listener to each button
    button.addEventListener(
        type= "click", 
        listener = (event) =>{
            // Отримуємо значення кукізів, що містять список продуктів
            // Get the value of cookies containing the list of products
            let cookiesProduct = document.cookie.split("=")[1]
            
            // Розділяємо список продуктів по пробілам
            // Split the list of products by spaces
            let listIdProduct = cookiesProduct.split(" ")

            // Перевіряємо, чи є id кнопки в списку продуктів
            // Check if the button id exists in the list of products
            if (button.id in listIdProduct){
                // Цикл для видалення продукту зі списку
                // Loop to remove the product from the list
                for (let index = 0; index < listIdProduct.length; index++){
                    if (button.id == listIdProduct[index]){
                        listIdProduct.splice(index, 1)
                        // Зменшуємо відображене значення кількості продуктів
                        // Decrease the displayed quantity of products
                        button.nextElementSibling.textContent = +button.nextElementSibling.textContent - 1
                        break
                    }
                }
            }
            // Оновлюємо куки зі списком продуктів
            // Update cookies with the updated list of products
            document.cookie = `products = ${listIdProduct.join(" ")}; path = /`
        }
    )
}

// Вибираємо всі кнопки з класом "plus"
// Select all buttons with class "plus"
const buttons = document.querySelectorAll('.plus')
for (let i = 0; i < buttons.length; i++){
    let button = buttons[i]

    // Додаємо подію "click" до кожної кнопки
    // Add "click" event listener to each button
    button.addEventListener(
        type = 'click',
        listener = function(event){
            // Перевіряємо, чи куки порожні
            // Check if cookies are empty
            if (document.cookie == ""){
                document.cookie = `products = ${button.id}`
                // Збільшуємо відображене значення кількості продуктів
                // Increase the displayed quantity of products
                button.previousElementSibling.textContent = +button.previousElementSibling.textContent + 1
            }
            else{
                // Отримуємо поточний список продуктів з кукізів
                // Get the current list of products from cookies
                let currentProduct = document.cookie.split('=')[1]
                document.cookie = `products = ${currentProduct} ${button.id}; path = /`
                // Збільшуємо відображене значення кількості продуктів
                // Increase the displayed quantity of products
                button.previousElementSibling.textContent = +button.previousElementSibling.textContent + 1
            }
        }
    )
}
```

```js
// Коли DOM-дерево завантажено, виконуємо наступні дії
// When the DOM is loaded, perform the following actions
document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо модальне вікно за його ідентифікатором "modal1"
    // Get the modal by its ID "modal1"
    let modal = document.getElementById("modal1");

    // Отримуємо всі кнопки з класом "go_to_checkout"
    // Get all buttons with class "go_to_checkout"
    let buttons = document.querySelectorAll(".go_to_checkout");

    // Отримуємо перший елемент з класом "close" для закриття модального вікна
    // Get the first element with class "close" to close the modal
    let span = document.getElementsByClassName("close")[0];

    // Додаємо обробник події для кожної кнопки
    // Add event handler for each button
    buttons.forEach(button => {
        button.onclick = function() {
            // Показуємо модальне вікно, змінюючи стиль на "block"
            // Display the modal by setting its style to "block"
            modal.style.display = "block";
        };
    });

    // Додаємо обробник події для кнопки "close" у модальному вікні
    // Add event handler for the "close" button in the modal
    span.onclick = function() {
        // Ховаємо модальне вікно, змінюючи стиль на "none"
        // Hide the modal by setting its style to "none"
        modal.style.display = "none";
    };

    // Додаємо обробник події для кліку по вікну
    // Add event handler for clicking outside the modal
    window.onclick = function(event) {
        // Якщо клік відбувся поза модальним вікном, ховаємо його
        // If click is outside the modal, hide it
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

```



### shop_page:

```js
// Відслідковуємо подію завантаження DOM
// Track DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо список кнопок з класом .Buy_Button у тілі документа
  // Get a list of buttons with class .Buy_Button within the document body
  const buttonList = document.body.querySelectorAll('.Buy_Button');

  // Отримуємо елемент з класом .value
  // Get an element with class .value
  const valueEl = document.querySelector('.value');
  
  // Ініціалізуємо лічильник
  // Initialize a counter
  let count = 0;

  // Ітеруємося по списку кнопок
  // Iterate over the list of buttons
  for (let i = 0; i < buttonList.length; i++) {
    let button = buttonList[i];

    // Додаємо обробник події click для кожної кнопки
    // Add a click event handler for each button
    button.addEventListener('click', function(event) {
      // Перевіряємо, чи є вже запис в куках
      // Check if there's already a cookie set
      if (document.cookie == '') {
        // Якщо немає, то створюємо новий запис з id поточної кнопки
        // If not, create a new cookie with the id of the current button
        document.cookie = `products=${button.id}; path=/`;
      } else {
        // Якщо вже є запис, отримуємо його id і додаємо новий id
        // If there's already a cookie, get its id and append the id of the current button
        id_product = document.cookie.split('=')[1];
        document.cookie = `products=${id_product} ${button.id}; path=/`;
      }

      // Збільшуємо лічильник
      // Increment the counter
      count++;

      // Оновлюємо вміст елементу .value
      // Update the content of element .value
      valueEl.textContent = count;
    });
  }
});
```

### admin_app:
```js
// Початок обробника події DOMContentLoaded, який запускається після завантаження сторінки
// Event listener for DOMContentLoaded which fires after the page is loaded

const editTextButtons = document.querySelectorAll('.Edit_text'); // Вибір усіх кнопок редагування тексту
// Selecting all edit text buttons

const editPriceButtons = document.querySelectorAll('.Edit_price'); // Вибір усіх кнопок редагування ціни
// Selecting all edit price buttons

const editDiscountButtons = document.querySelectorAll('.Edit_discount'); // Вибір усіх кнопок редагування знижки
// Selecting all edit discount buttons

const editMemory1Buttons = document.querySelectorAll('.Edit_memory1'); // Вибір усіх кнопок редагування пам'яті 1
// Selecting all edit memory 1 buttons

const editMemory2Buttons = document.querySelectorAll('.Edit_memory2'); // Вибір усіх кнопок редагування пам'яті 2
// Selecting all edit memory 2 buttons

const editMemory3Buttons = document.querySelectorAll('.Edit_memory3'); // Вибір усіх кнопок редагування пам'яті 3
// Selecting all edit memory 3 buttons

const editPhotoButtons = document.querySelectorAll('.Edit_photo'); // Вибір усіх кнопок редагування фото
// Selecting all edit photo buttons

const trashButtons = document.querySelectorAll('.Trash'); // Вибір усіх кнопок видалення
// Selecting all trash buttons

const addButtons = document.querySelectorAll('.New_product'); // Вибір усіх кнопок для додавання нового товару
// Selecting all add product buttons

let currentElement = null; // Ініціалізація поточного елемента для редагування

// Функція створення модального вікна з можливістю задання заголовку, поля для введення, можливості завантаження файлу, розмірів і класу
// Function to create a modal window with options for title, input field, file upload, dimensions, and class
function createModal(titleText, placeholderText, isFileInput = false, width = '700px', height = '965px', hasAdditionalFields = false, modalClass = '') {
    const modal = document.createElement('div'); // Створення елементу модального вікна
    modal.classList.add('modal'); // Додавання класу 'modal'

    if (modalClass) {
        modal.classList.add(modalClass); // Додавання додаткового класу, якщо він заданий
    }

    modal.style.display = 'none'; // Початкове приховання модального вікна

    const modalContent = document.createElement('div'); // Створення контейнера для вмісту модального вікна
    modalContent.classList.add('modal-content'); // Додавання класу 'modal-content'
    modalContent.style.width = width; // Задання ширини модального вікна
    modalContent.style.height = height; // Задання висоти модального вікна

    const changeTitle = document.createElement('p'); // Створення елементу для заголовку модального вікна
    changeTitle.textContent = titleText; // Встановлення тексту заголовку

    const additionalFields = {}; // Об'єкт для зберігання додаткових полів

    if (hasAdditionalFields) {
        // Якщо потрібні додаткові поля
        additionalFields.nameField = document.createElement('input'); // Поле для введення назви товару
        additionalFields.nameField.classList.add('modal-input'); // Додавання класу для стилізації
        additionalFields.nameField.type = 'text'; // Тип поля - текст
        additionalFields.nameField.placeholder = 'Name-product'; // Плейсхолдер для поля

        additionalFields.priceField = document.createElement('input'); // Поле для введення ціни товару
        additionalFields.priceField.classList.add('modal-input'); // Додавання класу для стилізації
        additionalFields.priceField.type = 'text'; // Тип поля - текст
        additionalFields.priceField.placeholder = 'Price-product'; // Плейсхолдер для поля

        additionalFields.discountField = document.createElement('input'); // Поле для введення знижки на товар
        additionalFields.discountField.classList.add('modal-input'); // Додавання класу для стилізації
        additionalFields.discountField.type = 'text'; // Тип поля - текст
        additionalFields.discountField.placeholder = 'Discount'; // Плейсхолдер для поля

        additionalFields.quantityField = document.createElement('input'); // Поле для введення кількості товару
        additionalFields.quantityField.classList.add('modal-input'); // Додавання класу для стилізації
        additionalFields.quantityField.type = 'text'; // Тип поля - текст
        additionalFields.quantityField.placeholder = 'Count'; // Плейсхолдер для поля

        additionalFields.descriptionField = document.createElement('input'); // Поле для введення опису товару
        additionalFields.descriptionField.classList.add('modal-input'); // Додавання класу для стилізації
        additionalFields.descriptionField.type = 'text'; // Тип поля - текст
        additionalFields.descriptionField.placeholder = 'Description'; // Плейсхолдер для поля

        additionalFields.photoUploadField = document.createElement('input'); // Поле для завантаження фото товару
        additionalFields.photoUploadField.classList.add('modal-input'); // Додавання класу для стилізації
        additionalFields.photoUploadField.type = 'file'; // Тип поля - файл
    } else {
        const inputField = document.createElement('input'); // Створення основного поля вводу
        inputField.classList.add('modal-input'); // Додавання класу для стилізації
        inputField.type = isFileInput ? 'file' : 'text'; // Встановлення типу поля (файл або текст)

        if (!isFileInput) {
            inputField.placeholder = placeholderText; // Встановлення плейсхолдера, якщо поле не для файлу
        }

        additionalFields.inputField = inputField; // Зберігання посилання на поле в об'єкті
    }

    const saveButton = document.createElement('button'); // Створення кнопки "Зберегти"
    saveButton.textContent = 'SEND'; // Встановлення тексту на кнопці "SEND"

    saveButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Зупинка подальших подій

        if (hasAdditionalFields) {
            // Якщо є додаткові поля
            const nameValue = additionalFields.nameField.value.trim(); // Отримання значення назви товару
            const priceValue = additionalFields.priceField.value.trim(); // Отримання значення ціни товару
            const discountValue = additionalFields.discountField.value.trim(); // Отримання значення знижки
            const quantityValue = additionalFields.quantityField.value.trim(); // Отримання значення кількості товару
            const descriptionValue = additionalFields.descriptionField.value.trim(); // Отримання значення опису товару
            const file = additionalFields.photoUploadField.files[0]; // Отримання файлу з поля завантаження фото

            if (file) {
                // Якщо файл вибраний
                const reader = new FileReader(); // Створення об'єкту для читання файлу
                reader.onload = function (e) {
                    createNewProduct(nameValue, descriptionValue, priceValue, discountValue, quantityValue, e.target.result);
                };
                reader.readAsDataURL(file); //

 Читання файлу як URL
            } else {
                // Якщо файл не вибраний
                createNewProduct(nameValue, descriptionValue, priceValue, discountValue, quantityValue, null);
            }

            // Очистка значень полів після збереження
            additionalFields.nameField.value = '';
            additionalFields.priceField.value = '';
            additionalFields.discountField.value = '';
            additionalFields.quantityField.value = '';
            additionalFields.descriptionField.value = '';
            additionalFields.photoUploadField.value = '';
        } else {
            if (isFileInput) {
                // Якщо поле для файлу
                const file = additionalFields.inputField.files[0]; // Отримання вибраного файлу

                if (file && currentElement) {
                    // Якщо файл вибраний і є поточний елемент для редагування
                    const reader = new FileReader(); // Створення об'єкту для читання файлу
                    reader.onload = function (e) {
                        currentElement.src = e.target.result; // Встановлення результату читання як src для зображення
                    };
                    reader.readAsDataURL(file); // Читання файлу як URL
                }
            } else {
                // Якщо звичайне текстове поле
                const newValue = additionalFields.inputField.value.trim(); // Отримання нового значення з поля вводу

                if (currentElement && newValue) {
                    currentElement.textContent = newValue; // Встановлення нового значення для поточного елемента
                }
            }

            additionalFields.inputField.value = ''; // Очистка значення поля після збереження
        }

        closeModal(modal); // Закриття модального вікна після збереження
    });

    modalContent.appendChild(changeTitle); // Додавання заголовку до вмісту модального вікна

    if (hasAdditionalFields) {
        // Якщо є додаткові поля
        modalContent.appendChild(additionalFields.nameField); // Додавання поля для назви товару
        modalContent.appendChild(additionalFields.priceField); // Додавання поля для ціни товару
        modalContent.appendChild(additionalFields.discountField); // Додавання поля для знижки
        modalContent.appendChild(additionalFields.quantityField); // Додавання поля для кількості товару
        modalContent.appendChild(additionalFields.descriptionField); // Додавання поля для опису товару
        modalContent.appendChild(additionalFields.photoUploadField); // Додавання поля для завантаження фото
    } else {
        modalContent.appendChild(additionalFields.inputField); // Додавання основного поля вводу
    }

    modalContent.appendChild(saveButton); // Додавання кнопки "Зберегти" до вмісту модального вікна
    modal.appendChild(modalContent); // Додавання вмісту до модального вікна
    document.body.appendChild(modal); // Додавання модального вікна до тіла документа

    modalContent.addEventListener('click', (event) => {
        event.stopPropagation(); // Зупинка подальших подій при кліці в межах вмісту модального вікна
    });

    modal.addEventListener('click', () => closeModal(modal)); // Закриття модального вікна при кліці за його межами

    return { modal, ...additionalFields }; // Повернення модального вікна та додаткових полів як результату функції
}

// Створення різних модальних вікон для редагування тексту, ціни, знижки, пам'яті та фото
const textModal = createModal('Change Text', 'Введіть новий текст', false, '700px', '965px');
const priceModal = createModal('Change Price', 'Введіть нову ціну', false, '700px', '965px');
const discountModal = createModal('Change Discount', 'Введіть нову знижку', false, '700px', '965px');
const memory1Modal = createModal('Change Memory 1', 'Введіть нову пам'ять 1', false, '700px', '965px');
const memory2Modal = createModal('Change Memory 2', 'Введіть нову пам'ять 2', false, '700px', '965px');
const memory3Modal = createModal('Change Memory 3', 'Введіть нову пам'ять 3', false, '700px', '965px');
const photoModal = createModal('Change Photo', '', true, '700px', '965px');
const newProductModal = createModal('New Product', false, false, '700px', '965px', true, 'new-product-modal');

// Функція відкриття модального вікна
function openModal(modal) {
    modal.style.display = 'block'; // Встановлення стилю блок для відображення модального вікна
}

// Функція закриття модального вікна
function closeModal(modal) {
    modal.style.display = 'none'; // Приховання модального вікна
}

// Функція додавання обробників подій до кнопок редагування
function addEventListenerToButtons(buttons, modal, inputField, selector) {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Зупинка подальших подій

            if (selector === 'img') {
                currentElement = button.closest('.box').querySelector(selector); // Встановлення поточного елемента, якщо це зображення
            } else {
                currentElement = button.closest('.box').querySelector(selector); // Встановлення поточного елемента для редагування тексту
                inputField.value = currentElement.textContent; // Встановлення значення текстового поля з поточного елемента
            }

            openModal(modal); // Відкриття модального вікна
        });
    });
}

// Додавання обробників подій до кнопок редагування для кожного типу інформації товару
addEventListenerToButtons(editTextButtons, textModal.modal, textModal.inputField, '.product_name_a');
addEventListenerToButtons(editPriceButtons, priceModal.modal, priceModal.inputField, '.product_price_a');
addEventListenerToButtons(editDiscountButtons, discountModal.modal, discountModal.inputField, '.product_discount_a');
addEventListenerToButtons(editMemory1Buttons, memory1Modal.modal, memory1Modal.inputField, '.product_memory1');
addEventListenerToButtons(editMemory2Buttons, memory2Modal.modal, memory2Modal.inputField, '.product_memory2');
addEventListenerToButtons(editMemory3Buttons, memory3Modal.modal, memory3Modal.inputField, '.product_memory3');
addEventListenerToButtons(editPhotoButtons, photoModal.modal, photoModal.inputField, 'img');

// Додавання обробника подій до кнопок видалення товару
trashButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Зупинка подальших подій

        const productBox = button.closest('.box'); // Знаходження батьківського елемента товару
        if (productBox) {
            productBox.remove(); // Видалення товару зі сторінки
        }
    });
});

// Додавання обробника подій до кнопок додавання нового товару
addButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Зупинка подальших подій
        openModal(newProductModal.modal); // Відкриття модального вікна для додавання нового товару
    });
});

// Функція створення нового товару з вказаною назвою, описом, ціною, знижкою, кількістю та фото
function createNewProduct(name, description, price, discount, quantity, photoUrl)

 {
    const productBox = document.createElement('div'); // Створення нового елемента для товару
    productBox.classList.add('box'); // Додавання класу "box" до елемента товару
    productBox.id = `product-${Date.now()}`; // Встановлення ідентифікатора товару

    const productName = document.createElement('div'); // Створення елемента для назви товару
    productName.classList.add('product_name_ad'); // Додавання класу "product_name_ad"
    productName.textContent = name; // Встановлення тексту назви товару

    const productDescription = document.createElement('div'); // Створення елемента для опису товару
    productDescription.classList.add('product_description_ad'); // Додавання класу "product_description_ad"
    productDescription.textContent = description; // Встановлення тексту опису товару

    const productPrice = document.createElement('div'); // Створення елемента для ціни товару
    productPrice.classList.add('product_price_ad'); // Додавання класу "product_price_ad"
    productPrice.textContent = price; // Встановлення тексту ціни товару

    const productDiscount = document.createElement('div'); // Створення елемента для знижки товару
    productDiscount.classList.add('product_discount_ad'); // Додавання класу "product_discount_ad"
    productDiscount.textContent = discount; // Встановлення тексту знижки товару

    const productQuantity = document.createElement('div'); // Створення елемента для кількості товару
    productQuantity.classList.add('product_quantity'); // Додавання класу "product_quantity"
    productQuantity.textContent = quantity; // Встановлення тексту кількості товару

    const productMemory1 = document.createElement('div'); // Створення елемента для першої пам'яті товару
    productMemory1.classList.add('product_memory1_ad'); // Додавання класу "product_memory1_ad"
    productMemory1.textContent = '256гб'; // Встановлення тексту пам'яті 256 ГБ

    const productMemory2 = document.createElement('div'); // Створення елемента для другої пам'яті товару
    productMemory2.classList.add('product_memory2_ad'); // Додавання класу "product_memory2_ad"
    productMemory2.textContent = '512гб'; // Встановлення тексту пам'яті 512 ГБ

    const productMemory3 = document.createElement('div'); // Створення елемента для третьої пам'яті товару
    productMemory3.classList.add('product_memory3_ad'); // Додавання класу "product_memory3_ad"
    productMemory3.textContent = '1тб'; // Встановлення тексту пам'яті 1 ТБ

    const productPhoto = document.createElement('img'); // Створення елемента для фото товару
    productPhoto.classList.add('product_photo_ad'); // Додавання класу "product_photo_ad"
    if (photoUrl) {
        productPhoto.src = photoUrl; // Встановлення URL зображення, якщо воно існує
    }

    const buyButton = document.createElement('button'); // Створення кнопки "Купити"
    buyButton.classList.add('Buy_Button_ad'); // Додавання класу "Buy_Button_ad"
    buyButton.textContent = 'КУПИТИ'; // Встановлення тексту кнопки "Купити"

    const editTextButton = document.createElement('button'); // Створення кнопки "Редагувати текст"
    editTextButton.classList.add('Edit_text_ad'); // Додавання класу "Edit_text_ad"
    editTextButton.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати текст"

    const editPriceButton = document.createElement('button'); // Створення кнопки "Редагувати ціну"
    editPriceButton.classList.add('Edit_price_ad'); // Додавання класу "Edit_price_ad"
    editPriceButton.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати ціну"

    const editDiscountButton = document.createElement('button'); // Створення кнопки "Редагувати знижку"
    editDiscountButton.classList.add('Edit_discount_ad'); // Додавання класу "Edit_discount_ad"
    editDiscountButton.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати знижку"

    const editPhotoButton = document.createElement('button'); // Створення кнопки "Редагувати фото"
    editPhotoButton.classList.add('Edit_photo_ad'); // Додавання класу "Edit_photo_ad"
    editPhotoButton.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати фото"

    const editMemory1Button = document.createElement('button'); // Створення кнопки "Редагувати пам'ять 1"
    editMemory1Button.classList.add('Edit_memory1_ad'); // Додавання класу "Edit_memory1_ad"
    editMemory1Button.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати пам'ять 1"

    const editMemory2Button = document.createElement('button'); // Створення кнопки "Редагувати пам'ять 2"
    editMemory2Button.classList.add('Edit_memory2_ad'); // Додавання класу "Edit_memory2_ad"
    editMemory2Button.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати пам'ять 2"

    const editMemory3Button = document.createElement('button'); // Створення кнопки "Редагувати пам'ять 3"
    editMemory3Button.classList.add('Edit_memory3_ad'); // Додавання класу "Edit_memory3_ad"
    editMemory3Button.textContent = '🖊'; // Встановлення тексту кнопки "Редагувати пам'ять 3"

    const trashButton = document.createElement('button'); // Створення кнопки "Видалити товар"
    trashButton.classList.add('Trash_ad'); // Додавання класу "Trash_ad"
    trashButton.textContent = '🗑️Видалити товар'; // Встановлення тексту кнопки "Видалити товар"

    const capacityTitle = document.createElement('h'); // Створення заголовка "Ємність"
    capacityTitle.classList.add('product_capacity_title'); // Додавання класу "product_capacity_title"
    capacityTitle.textContent = 'ЄМНІСТЬ:'; // Встановлення тексту заголовка "Ємність"

    // Додавання елементів до контейнера товару
    productBox.appendChild(productName);
    productBox.appendChild(productDescription);
    productBox.appendChild(productPrice);
    productBox.appendChild(productDiscount);
    productBox.appendChild(productQuantity);
    productBox.appendChild(capacityTitle);
    productBox.appendChild(productMemory1);
    productBox.appendChild(editMemory1Button);
    productBox.appendChild(productMemory2);
    productBox.appendChild(editMemory2Button);
    productBox.appendChild(productMemory3);
    productBox.appendChild(editMemory3Button);
    productBox.appendChild(productPhoto);
    productBox.appendChild(buyButton);
    productBox.appendChild(editTextButton);
    productBox.appendChild(editPriceButton);
    productBox.appendChild(editDiscountButton);
    productBox.appendChild(editPhotoButton);
    productBox.appendChild(trashButton);

    document.body.appendChild(productBox); // Додавання товару до тіла документа

    // Додавання обробників подій до кнопок "Редагувати"
    addEventListenerToButtons([editTextButton], textModal.modal, textModal.inputField, '.product_name_ad');
    addEventListenerToButtons([editPriceButton], priceModal.modal, priceModal.inputField, '.product_price_ad');
    addEventListenerToButtons([editDiscountButton], discountModal.modal, discountModal.inputField, '.product_discount_ad');
    addEventListenerToButtons([editMemory1Button], memory1Modal.modal, memory1Modal.inputField, '.product_memory1_ad');
    addEventListenerToButtons([editMemory2Button], memory2Modal.modal, memory2Modal.inputField, '.product

_memory2_ad');
    addEventListenerToButtons([editMemory3Button], memory3Modal.modal, memory3Modal.inputField, '.product_memory3_ad');
    addEventListenerToButtons([editPhotoButton], photoModal.modal, photoModal.inputField, '.product_photo_ad');

    // Додавання обробника подій до кнопки "Видалити товар"
    trashButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Зупинка подальших подій
        productBox.remove(); // Видалення товару
    });
}
```
---
### HTML шаблони нашого проекту: / HTML templates of our project:
##### project template:
```html
<html lang="en"> 
    <!-- Встановлює мову документа на англійську / Sets the document language to English -->
    <head>
        <meta charset="UTF-8"> 
        <!-- Встановлює кодування символів на UTF-8 / Sets character encoding to UTF-8 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Встановлює viewport для коректного відображення на мобільних пристроях / Sets viewport for proper display on mobile devices -->
        <title>{% block title %} {% endblock %}</title> 
        <!-- Визначає заголовок сторінки, який може бути замінений у підкласах / Defines the page title, which can be overridden in subclasses -->
        <link rel="stylesheet" href="{{url_for ('static', filename = 'css/style.css')}}"> 
        <!-- Підключає файл стилів CSS / Links the CSS stylesheet -->
        {% block head %}
        {% endblock %}
        <!-- Блок для додаткових елементів у секції head, які можуть бути визначені у підкласах / Block for additional elements in the head section, which can be defined in subclasses -->
    </head>
    <body>
        <div>
            <a class="Reg" href="/Registration/">Registration</a> 
            <!-- Посилання на сторінку реєстрації / Link to the registration page -->
            <a class="Aut" href="/Authorization/">Authorization</a> 
            <!-- Посилання на сторінку авторизації / Link to the authorization page -->
            <a class="Aut" href="/Home/"></a> 
            <!-- Посилання на головну сторінку (порожній текст) / Link to the home page (empty text) -->
        </div>
        {% block content %}
        {% endblock %}
        <!-- Блок для основного контенту сторінки, який може бути замінений у підкласах / Block for the main content of the page, which can be overridden in subclasses -->
    </body>
</html>
```

### admin_app template:
```html
{% block head %}  <!-- Блок для секції head / Block for the head section -->
<script src="{{ url_for('static', filename='js/edit_buttons.js') }}"></script>  <!-- Підключення файлу скрипта / Linking script file -->
<link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">  <!-- Підключення файлу стилів / Linking stylesheet -->
{% endblock %}

{% block content %}  <!-- Блок для секції контенту / Block for the content section -->
<div class="main_page">  <!-- Головний контейнер сторінки / Main page container -->
  <a class="Home2" href="/Home/">Home</a>  <!-- Посилання на домашню сторінку / Link to home page -->
  <a class="Shop" href="/Shop/">Shop</a>  <!-- Посилання на магазин / Link to shop -->
  <a class="Basket" href="/Basket/">Cart</a>  <!-- Посилання на кошик / Link to cart -->
  <a class="Admin" href="/Admin/">Admin</a>  <!-- Посилання на адміністративну сторінку / Link to admin page -->
  <div class="counter">  <!-- Контейнер для лічильника / Counter container -->
    <span class="value">0</span>  <!-- Значення лічильника / Counter value -->
  </div>
  <a class="Contacts" href="/Contacts/">Contacts</a>  <!-- Посилання на сторінку контактів / Link to contacts page -->
</div>
<hr>  <!-- Горизонтальна лінія / Horizontal line -->
<div class='products'>  <!-- Контейнер для продуктів / Products container -->
  {% for product in products %}  <!-- Цикл для відображення продуктів / Loop to display products -->
  {% if loop.index <= 3 %}  <!-- Умова для обмеження кількості відображених продуктів до трьох / Condition to limit displayed products to three -->
  <div class='box' data-product-id="{{ product.id }}">  <!-- Контейнер для продукту з атрибутом id / Product container with id attribute -->
    <img src="{{ url_for('static', filename='img/iphone15.png') }}" alt="iphone 15" class="iphone15">  <!-- Зображення продукту / Product image -->
    <div class='text'>  <!-- Контейнер для текстової інформації / Container for text information -->
      <h2 class="product_name_a">{{ product.name }}</h2>  <!-- Назва продукту / Product name -->
      <h3 class="product_price_a">{{ product.price }} ₴</h3>  <!-- Ціна продукту / Product price -->
      <h6 class="product_discount_a">Знижка 10%</h6>  <!-- Інформація про знижку / Discount information -->
      <h5 class="total_price_a">49 999₴</h5>  <!-- Загальна ціна продукту / Total product price -->
      <button class='Buy_Button_a' id='{{ product.id }}'> КУПИТИ </button>  <!-- Кнопка для покупки / Buy button -->
      <form method="post">  <!-- Форма для редагування та видалення / Form for editing and deleting -->
        <button type="button" class="Edit_text" id="Edit_text_{{ product.id }}">🖊</button>  <!-- Кнопка для редагування тексту / Button to edit text -->
        <button type="button" class="Edit_price">🖊</button>  <!-- Кнопка для редагування ціни / Button to edit price -->
        <button type="button" class="Edit_discount">🖊</button>  <!-- Кнопка для редагування знижки / Button to edit discount -->
        <button type="button" class="Edit_photo">🖊</button>  <!-- Кнопка для редагування фото / Button to edit photo -->
        <button type="button" class="Edit_memory1">🖊</button>  <!-- Кнопка для редагування пам'яті 1 / Button to edit memory 1 -->
        <button type="button" class="Edit_memory2">🖊</button>  <!-- Кнопка для редагування пам'яті 2 / Button to edit memory 2 -->
        <button type="button" class="Edit_memory3">🖊</button>  <!-- Кнопка для редагування пам'яті 3 / Button to edit memory 3 -->
        <button type="button" class="Trash">🗑️</button>  <!-- Кнопка для видалення продукту / Button to delete product -->
        <p class="t_product">Видалити продукт</p>  <!-- Текст для кнопки видалення / Text for delete button -->
      </form>
      <p>ЄМНІСТЬ:</p>  <!-- Текст для опису пам'яті / Text for memory description -->
      <div class='memory_a'>  <!-- Контейнер для пам'яті продукту / Container for product memory -->
        <h1 class="product_memory1">256гб</h1>  <!-- Пам'ять 1 / Memory 1 -->
        <h1 class="product_memory2">512гб</h1>  <!-- Пам'ять 2 / Memory 2 -->
        <h1 class="product_memory3">1тб</h1>  <!-- Пам'ять 3 / Memory 3 -->
      </div>
    </div>
  </div>
  <hr>  <!-- Горизонтальна лінія після продукту / Horizontal line after product -->
  {% endif %}
  {% endfor %}
  <button type="button" class="New_product">+</button>  <!-- Кнопка для додавання нового продукту / Button to add new product -->
  <p class="p_product">Додати продукт</p>  <!-- Текст для кнопки додавання продукту / Text for add product button -->
</div>
{% endblock %}
```


### basket_app template:

```html
{% block content %} 
<!-- Відкриває блок контенту / Opens the content block -->

<link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
<!-- Підключення файлу CSS для стилізації / Links the CSS file for styling -->

<div class="main_page">
    <!-- Головний контейнер для посилань і лічильника / Main container for links and counter -->
    <a class="Home2" href="/Home/">Home</a>
    <!-- Посилання на домашню сторінку / Link to the home page -->
    <a class="Shop" href="/Shop/">Shop</a>
    <!-- Посилання на магазин / Link to the shop page -->
    <a class="Basket" href="/Basket/">Cart</a>
    <!-- Посилання на кошик / Link to the cart page -->
    <div class="counter">
        <!-- Контейнер для лічильника товарів / Container for the products counter -->
        <span class="value">0</span>
        <!-- Значення лічильника товарів / Value of the products counter -->
    </div>
    <a class="Contacts" href="/Contacts/">Contacts</a>
    <!-- Посилання на сторінку контактів / Link to the contacts page -->
    <a class="Admin" href="/Admin/">Admin</a>
    <!-- Посилання на адміністративну сторінку / Link to the admin page -->
</div>

{% if products %}
<!-- Перевірка, чи є продукти / Checks if there are products -->
    {% for product in products %}
        <!-- Цикл для виведення кожного продукту / Loop to display each product -->
        <div id='product-{{ product.id }}'>
            <!-- Контейнер для продукту з унікальним ідентифікатором / Container for the product with a unique ID -->
            <img src="{{ url_for('static', filename='img/iphone15.png') }}" alt="iphone 15" class="iphone15_b">
            <!-- Зображення продукту / Image of the product -->
            <h1 class="product_name_b">{{ product.name }}</h1>
            <!-- Назва продукту / Name of the product -->
            <h2 class="product_price_b">{{ product.price }} грн</h2>
            <!-- Ціна продукту / Price of the product -->
            <h3>{{ product.discount }}</h3>
            <!-- Знижка на продукт / Discount on the product -->
            <button class="minus" id="{{ product.id }}">-</button>
            <!-- Кнопка для зменшення кількості продукту / Button to decrease the product quantity -->
            <h4 class="product_count_b">{{ product.count }}</h4>
            <!-- Кількість продукту / Quantity of the product -->
            <button class="plus" id="{{ product.id }}">+</button>
            <!-- Кнопка для збільшення кількості продукту / Button to increase the product quantity -->
            <div id="total-price_b"></div>
            <!-- Контейнер для загальної ціни продукту / Container for the total price of the product -->
        </div>
    {% endfor %}
    <!-- Кінець циклу для продуктів / End of the loop for products -->
    <button class="go_to_checkout" type="submit">Перейти до оформлення</button>
    <!-- Кнопка для переходу до оформлення замовлення / Button to proceed to checkout -->
{% else %}
    <h2>Корзина порожня</h2>
    <!-- Повідомлення, якщо кошик порожній / Message if the cart is empty -->
{% endif %}
<!-- Кінець перевірки наявності продуктів / End of the products check -->

<!-- Модальное окно / Modal window -->
<div id="modal1" class="modal1">
    <!-- Контейнер для модального вікна / Container for the modal window -->
    <div class="modal-content1">
        <!-- Контент модального вікна / Content of the modal window -->
        <span class="close">&times;</span>
        <!-- Кнопка для закриття модального вікна / Button to close the modal window -->
        <h2>Оформлення замовлення</h2>
        <!-- Заголовок модального вікна / Title of the modal window -->
        <div class="checkout_div">
            <!-- Контейнер для форми оформлення замовлення / Container for the checkout form -->
            <form id="checkoutForm">
                <!-- Форма для оформлення замовлення / Form for checkout -->
                <label for="name_b">Name:</label>
                <!-- Мітка для поля імені / Label for the name field -->
                <input type="text" id="name" name="name" class="name_ba" required>
                <!-- Поле для введення імені / Input field for name -->
                
                <label for="surname_b">Surname:</label>
                <!-- Мітка для поля прізвища / Label for the surname field -->
                <input type="text" id="surname" name="surname" class="surname_ba" required>
                <!-- Поле для введення прізвища / Input field for surname -->
                
                <label for="phone_b">Phone:</label>
                <!-- Мітка для поля телефону / Label for the phone field -->
                <input type="tel" id="phone" name="phone" class="phone_ba" required>
                <!-- Поле для введення телефону / Input field for phone -->
                
                <label for="email_b">Email:</label>
                <!-- Мітка для поля електронної пошти / Label for the email field -->
                <input type="email" id="email" name="email" class="email_ba" required>
                <!-- Поле для введення електронної пошти / Input field for email -->
                
                <label for="city_b">City:</label>
                <!-- Мітка для поля міста / Label for the city field -->
                <input type="text" id="city" name="city" class="city_ba" required>
                <!-- Поле для введення міста / Input field for city -->
                
                <label for="request_b">Additional request:</label>
                <!-- Мітка для поля додаткових побажань / Label for the additional request field -->
                <textarea id="request" name="request" class="request_ba"></textarea>
                <!-- Поле для введення додаткових побажань / Textarea for additional requests -->
                
                <button type="submit" class="send_ba">SEND</button>
                <!-- Кнопка для відправлення форми / Button to submit the form -->
            </form>
        </div>
    </div>
</div>

<script src="{{ url_for('static', filename='js/deleteCookies.js') }}"></script>
<!-- Підключення JavaScript файлу для видалення куків / Links the JavaScript file for deleting cookies -->
<script src="{{ url_for('static', filename='js/culc_products.js') }}"></script>
<!-- Підключення JavaScript файлу для розрахунку продуктів / Links the JavaScript file for calculating products -->
<script src="{{ url_for('static', filename='js/modal_windows.js') }}"></script>
<!-- Підключення JavaScript файлу для роботи з модальними вікнами / Links the JavaScript file for handling modal windows -->

{% endblock %}
<!-- Закриває блок контенту / Closes the content block --
```

### home_page:
```html
{% extends 'base.html' %} 
{# Розширює базовий шаблон / Extends the base template #}

{% block content %}
    <div>
        {% if name %}
            {# Якщо змінна name визначена / If the variable name is defined #}
            <p class="home">HOME PAGE</p>
        {% else %}
            {# Якщо змінна name не визначена / If the variable name is not defined #}
            <p class="home">  HOME PAGE</p>
        {% endif %}
    </div>
{% endblock %}
{# Завершення блоку контенту / End of the content block #}
```


### login_page template:
```html
{% extends 'base.html' %} 
{# Розширює шаблон базової сторінки / Extends the base page template #}

{% block content %} 
{# Починає блок вмісту, який буде заповнений на основі базового шаблону / Starts a content block that will be filled based on the base template #}

<link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}"> 
{# Підключає файл стилів / Links the stylesheet file #}

<h1>Authorization</h1> 
{# Заголовок сторінки авторизації / Authorization page header #}

{% if success %} 
{# Перевіряє, чи авторизація пройшла успішно / Checks if authorization was successful #}

<script>
    window.location.href = '/Home/'; 
    {# Перенаправлення на початкову сторінку / Redirect to the home page #}
</script>

{% else %} 
{# Якщо авторизація неуспішна, відображає форму авторизації / If authorization is unsuccessful, displays the authorization form #}

<form method="post" id="Form2" class="ppp"> 
    {# Форма для введення логіну або пошти та пароля / Form for entering login or email and password #}
    <p class="login_or_email"> Login or email </p> 
    {# Підпис до поля для введення логіну або пошти / Label for the login or email input field #}
    <input class="Text2" type="text" name="name"> 
    {# Поле для введення логіну або пошти / Input field for login or email #}
    <p class="password_l"> Password </p> 
    {# Підпис до поля для введення пароля / Label for the password input field #}
    <input class="Password2" type="password" name="password"> 
    {# Поле для введення пароля / Input field for the password #}
    <button class="Submit2" type="submit">SEND</button> 
    {# Кнопка для відправки форми / Button to submit the form #}
</form>

<div id="modal" class="modal1"> 
    {# Модальне вікно, яке відображається, якщо користувач не зареєстрований / Modal window displayed if the user is not registered #}
    <div class="modal-content1"> 
        {# Вміст модального вікна / Content of the modal window #}
        <h1 class="registaration">YOU ARE NOT REGISTERED</h1> 
        {# Заголовок модального вікна / Modal window header #}
        <span class="arrow">→</span> 
        {# Стрілка, що вказує на посилання реєстрації / Arrow pointing to the registration link #}
        <a href="/Registration/" class="Reg_a">Registration</a> 
        {# Посилання на сторінку реєстрації / Link to the registration page #}
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() { 
        {# Додає обробник подій, який виконується після завантаження документу / Adds an event handler that executes after the document is loaded #}
        var perevirka = '{{ perevirka }}'; 
        {# Отримує значення змінної perevirka з сервера / Gets the value of the perevirka variable from the server #}
        const modal = document.getElementById("modal"); 
        {# Отримує модальне вікно за його ID / Gets the modal window by its ID #}
        if (perevirka === "False") { 
            {# Перевіряє, чи значення perevirka є "False" / Checks if the value of perevirka is "False" #}
            openModal(); 
            {# Викликає функцію відкриття модального вікна / Calls the function to open the modal window #}
        }
        function openModal() { 
            {# Функція для відкриття модального вікна / Function to open the modal window #}
            modal.style.display = "block"; 
            {# Встановлює стиль відображення модального вікна на "block" / Sets the display style of the modal window to "block" #}
        }
    });
</script>

{% endif %} 
{# Закінчення блоку умовного рендерингу / Ends the conditional rendering block #}

{% endblock %} 
{# Закінчення блоку вмісту / Ends the content block #}
```

### main_page templates:
```html
<!-- Підключення таблиці стилів з папки static через Flask / Linking stylesheet from the static folder using Flask -->
<link rel="stylesheet" href="{{url_for('static', filename='css/style.css')}}">

{% block content %} <!-- Відкриття блоку вмісту для Flask / Opening content block for Flask -->
<div class="main_page"> <!-- Основний контейнер для головної сторінки / Main container for the home page -->
  <a class="Home2" href="/Home/">Home</a> <!-- Посилання на домашню сторінку / Link to the home page -->
  <a class="Shop" href="/Shop/">Shop</a> <!-- Посилання на сторінку магазину / Link to the shop page -->
  <a class="Basket" href="/Basket/">Cart</a> <!-- Посилання на кошик / Link to the cart page -->
  <a class="Contacts" href="/Contacts/">Contacts</a> <!-- Посилання на сторінку контактів / Link to the contacts page -->
  <a class="Admin" href="/Admin/">Admin</a> <!-- Посилання на сторінку адміністратора / Link to the admin page -->
  {% if userName != '' %} <!-- Перевірка, чи не порожнє ім'я користувача / Check if the user name is not empty -->
    <h1 class="name">{{ userName }}</h1> <!-- Відображення імені користувача / Display the user name -->
  {% endif %}
  
  <p class="home1">HOME PAGE</p> <!-- Абзац з текстом "HOME PAGE" / Paragraph with "HOME PAGE" text -->
</div>
{% endblock %} <!-- Закриття блоку вмісту для Flask / Closing content block for Flask -->
```
### registration_page template:
```html
{% extends 'base.html' %} 
<!-- Розширює базовий шаблон / Extends the base template -->

{% block content %} 
<!-- Початок блоку контенту / Start of content block -->

<link rel="stylesheet" href="{{ url_for('static', filename='css/registration.css') }}"> 
<!-- Підключає файл стилів / Links the stylesheet -->

<h1>Registration</h1> 
<!-- Заголовок реєстрації / Registration heading -->

<form method="POST" id="Form"> 
    <!-- Початок форми з методом POST / Start of form with POST method -->
    <p class="p_name"> Login </p> 
    <!-- Підпис для поля логіну / Label for login field -->
    <input class="Login" type="text" name="name"> 
    <!-- Поле для вводу логіну / Input field for login -->

    <p class="p_email"> Email </p> 
    <!-- Підпис для поля електронної пошти / Label for email field -->
    <input class="Email" type="email" name="email"> 
    <!-- Поле для вводу електронної пошти / Input field for email -->

    <p class="p_password"> Password </p> 
    <!-- Підпис для поля пароля / Label for password field -->
    <input class="Password" type="password" name="password"> 
    <!-- Поле для вводу пароля / Input field for password -->

    <p class="p_password_confirmation"> Password_confirmation </p> 
    <!-- Підпис для поля підтвердження пароля / Label for password confirmation field -->
    <input class="Password_confirmation" type="password" name="password_confirmation"> 
    <!-- Поле для підтвердження пароля / Input field for password confirmation -->

    <button class="Submit" type="button" onclick="showModal()">SEND</button> 
    <!-- Кнопка відправки форми, яка викликає функцію showModal / Submit button that triggers the showModal function -->
</form>

<div id="modal" class="modal" style="display: none;"> 
    <!-- Модальне вікно, приховане за замовчуванням / Modal window, hidden by default -->
    <div class="modal-content"> 
        <!-- Контент модального вікна / Content of the modal window -->
        <h1 class="confirmed">CONFIRMED</h1> 
        <!-- Заголовок підтвердження / Confirmation heading -->
        <span class="arrow">→</span> 
        <!-- Стрілка / Arrow -->
        <a href="/Authorization/" class="Aut_r">Authorization</a> 
        <!-- Посилання на авторизацію / Link to authorization -->
    </div>
</div>

<script>
    const modal = document.getElementById("modal");

    // Функція для запобігання закриттю модального вікна / Function to prevent closing the modal window
    function preventModalClose(event) {
        event.stopPropagation(); // Зупиняє поширення події / Stops the event propagation
    }

    function showModal() {
        modal.style.display = "block"; // Відкриває модальне вікно / Opens the modal window
        modal.addEventListener("click", preventModalClose, false); // Додає обробник подій для запобігання закриттю модального вікна / Adds event listener to prevent closing the modal window
    }
</script>

{% endblock %} 
<!-- Кінець блоку контенту / End of content block -->
```
### shop_page template:
```html
{% block head %}
  <!-- Підключення скрипта set_cookie.js через тег <script> / Including the set_cookie.js script using the <script> tag -->
  <script src="{{ url_for('shop.static', filename = 'js/set_cookie.js') }}"></script>
{% endblock %}

{% block content %}
<!-- Підключення стилів з файлу style.css через тег <link> / Including styles from style.css using the <link> tag -->
<link rel="stylesheet" href="{{url_for('static', filename='css/style.css')}}">

<div class="main_page">
  <!-- Створення посилання на домашню сторінку з класом Home2 / Creating a link to the home page with class Home2 -->
  <a class="Home2" href="/Home/">Home</a>
  <!-- Створення посилання на сторінку магазину з класом Shop / Creating a link to the shop page with class Shop -->
  <a class="Shop" href="/Shop/">Shop</a>
  
  <!-- Створення посилання на кошик з класом Basket / Creating a link to the cart with class Basket -->
  <a class="Basket" href="/Basket/">Cart</a>
  <!-- Створення лічильника товарів у кошику / Creating a counter for items in the cart -->
  <div class="counter">
    <span class="value">0</span>
  </div>
  <!-- Створення посилання на сторінку контактів з класом Contacts / Creating a link to the contacts page with class Contacts -->
  <a class="Contacts" href="/Contacts/">Contacts</a>
  <!-- Створення посилання на сторінку адміністратора з класом Admin / Creating a link to the admin page with class Admin -->
  <a class="Admin" href="/Admin/">Admin</a>
</div>
<!-- Відображення горизонтальної лінії через тег <hr> / Displaying a horizontal line using the <hr> tag -->
<b><hr></b>

<div class='products'>
  <!-- Початок циклу для відображення продуктів / Beginning of a loop to display products -->
  {% for product in products %}
    <!-- Перевірка чи індекс продукту менший або дорівнює 3 / Checking if the product index is less than or equal to 3 -->
    {% if loop.index <= 3 %}
      <div class='box'>
        <!-- Відображення зображення продукту / Displaying the product image -->
        <img src="{{ url_for('static', filename='img/iphone15.png') }}" alt="iphone 15" class="iphone15">
        <div class='text'>
          <!-- Відображення назви продукту / Displaying the product name -->
          <h2 class="product_name">{{ product.name }}</h2>
          <!-- Відображення ціни продукту / Displaying the product price -->
          <h3 class="product_price">{{ product.price }} ₴</h3>
          <!-- Відображення знижки продукту / Displaying the product discount -->
          <h6 class="discount_s">Знижка 10%</h4>
          <!-- Відображення старої ціни продукту / Displaying the old product price -->
          <h5 class="ever_price">49 999₴</h5>
          <!-- Створення кнопки для купівлі продукту / Creating a button to buy the product -->
          <button class='Buy_Button' id='{{ product.id }}'> КУПИТИ </button>
  
          <p>ЄМНІСТЬ:</p>
          <!-- Відображення варіантів ємності продукту / Displaying product memory options -->
          <div class='memory'>
            <h4 id="h256">256гб</h4>
            <h4 id="h512">512гб</h4>
            <h4 id="h10">1тб</h4>
          </div>

          <div class='confirm'>
            <!-- Відображення іконки підтвердження / Displaying the confirmation icon -->
            <img src="{{ url_for('static', filename='img/Confirm_ico.png') }}" alt="Confirm_ico" class="confirm1">
            <!-- Відображення повідомлення про наявність товару / Displaying the message about product availability -->
            <h1>Товар в наявності</h1>
          </div>
        </div>
      </div>
      
      <!-- Відображення горизонтальної лінії через тег <hr> / Displaying a horizontal line using the <hr> tag -->
      <hr>
    {% endif %}
  {% endfor %}
</div>

{% endblock %}
```
### Ось ці всі шаблони які ми використовували у нашому проекті, завдяки ним, ми можемо побачити сторинки / Here are all the templates that we used in our project, thanks to them, we can see the pages
---
#### База даних - це організований набір інформації, який зберігається в комп'ютері. Уявіть собі велику цифрову картотеку, де можна швидко знайти потрібні дані. Наприклад, база даних магазину може містити інформацію про товари, ціни та клієнтів. Це дозволяє легко керувати інформацією, шукати потрібні дані та оновлювати їх. / A database is an organised collection of information stored in a computer. Imagine a large digital filing cabinet where you can quickly find the data you need. For example, a store database might contain information about products, prices, and customers. This makes it easy to manage the information, search for the data you need, and update it.
---
### Чому саме SQLite3: / Why SQLite3:

##### SQLite3 вбудована в Python, що спрощує її використання. Ми вже знайомі з цією базою даних з попереднього досвіду. Для роботи SQLite3 потрібен лише один файл, що містить всю базу даних. При використанні з Flask можуть знадобитися додаткові файли міграцій, але це не обов'язково для базового функціонування SQLite3. / SQLite3 is built into Python, which makes it easy to use. We are already familiar with this database from previous experience. SQLite3 requires only one file containing the entire database. When used with Flask, additional migration files may be required, but this is not necessary for the basic functioning of SQLite3.



---
#### ID в базах даних - це унікальний номер або код, який присвоюється кожному запису. Це як паспорт для інформації в базі даних.Уявіть, що у вас є шафа з багатьма ящиками. Кожен ящик - це окремий запис у базі даних, а номер на ящику - це ID. Завдяки цьому номеру ви можете швидко знайти потрібний ящик, не переглядаючи весь вміст шафи. / An ID in databases is a unique number or code that is assigned to each record. It's like a passport for the information in the database.Imagine you have a closet with many drawers. Each drawer is a separate record in the database, and the number on the drawer is the ID. With this number, you can quickly find the right drawer without having to look through the entire contents of the cabinet.
---
# Висновки: / Conclusions:
### Під час роботи над цим проектом ми дізналися багато цікавої та корисної інформації, для розробки сайтів, та вивчили багато нових технологій, покращили комунікацію розуміння коду, познайомилися з новомою мовою програмування **JavaScript** / While working on this project, we learnt a lot of interesting and useful information for website development, and learned a lot of new technologies, improved communication and understanding of the code, got acquainted with the new programming language **JavaScript**.
















