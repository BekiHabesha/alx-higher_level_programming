<H1 align="center", height="1500"> <ins> README.md File </ins> </H1>
<H1 align="center"> <ins> 0x0F. Python -Object-relational mapping README.md</ins> </H1>

<p align="center">
  <img src="https://i.ibb.co/y0KmCT2/0x0-F-Python-Object-relational-mapping-Alx-logo.png" />
</p>

##

* **File_name:📋** 📖 [**README.md**](https://github.com/BekiHabesha/alx-higher_level_programming/blob/master/0x0F-python-object_relational_mapping/README.md)
* **Created: 📅** <ins>**On March 15, 2024**</ins>🕙
* **Author:🖊️** 👨🏻‍💻 [***Bereket Dereje Mekkonen***](https://intranet.alxswe.com/users/BereketDerejeMekkonen) 🧑‍💻
* **Project Title: 🔠**  💻 [**0x0F. Python -Object-relational mapping**](https://intranet.alxswe.com/projects/283) 📝🔡
* **GitHub repository: 📦** 🗂 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming) 🗂
* **Directory: 💼** 📂 [**0x0F-python-object_relational_mapping**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x0F-python-object_relational_mapping)
* **Project Tasks: 📚** <ins>**Mandatory💯**</ins>
* **Tasks in number: 🔢** <ins>**18 Tasks (15-Mandatory and 3-Advanced)**</ins>
* **Mandatory_Tasks:** 💯 <ins>**From Task 0 to 14**</ins> 💯
* **Advanced_Tasks:** ⁉️ <ins>**From Task 15 to 17**</ins> ♨️

###   

<p align="center">
  <img src="https://www.altexsoft.com/static/blog-post/2023/12/242d6d32-29d5-4d4d-881e-a28f16a12039.jpg" />
</p>
                     
##

## <ins>**PROJECT_TITLE</ins>: 🔠**   💻 [**0x0F. Python -Object-relational mapping**](https://intranet.alxswe.com/projects/283) 📝🔡

## <ins>**GITHUB_REPOSITORY</ins>: 📦**  🗂 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming) 🗂

## <ins>**DIRECTORY</ins>: 💼** 📂 [**0x0F-python-object_relational_mapping**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x0F-python-object_relational_mapping)

<p align="center">
  <img src="https://www.fullstackpython.com/img/visuals/orms-bridge.png" />
</p>

###

<h1> <ins>Before you start…</ins> :floppy_disk:</H1>

**Please make sure your MySQL server is in 8.0 ->** [**How to install MySQL 8.0 in Ubuntu 20.04**](https://intranet.alxswe.com/rltoken/paGukker_0KoG3D9FqymNQ)

###

<h1> <ins>Background Context</ins> :floppy_disk:</H1>

In this project, you will link two amazing worlds: Databases and Python!<br>
In the first part, you will use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}\$ to connect to a MySQL database and execute your SQL queries.<br>
In the second part, you will use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}\$ (don’t ask me how to pronounce it…) an Object Relational Mapper (ORM).<br>
The biggest difference is: no more SQL queries! Indeed, the purpose of an ORM is to abstract the storage to the usage. With an ORM, your biggest concern will be “What can I do with my objects” and not “How this object is stored? where? when?”. You won’t write any SQL queries only Python code. Last thing, your code won’t be “storage type” dependent. You will be able to change your storage easily without re-writing your entire project.
###

### **Without ORM:**

```js
conn = MySQLdb.connect(host="localhost", port=3306, user="root", passwd="root", db="my_db", charset="utf8")
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC") # HERE I have to know SQL to grab all states in my database
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
```
###

### **With an ORM:**

```js
engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format("root", "root", "my_db"), pool_pre_ping=True)
Base.metadata.create_all(engine)

session = Session(engine)
for state in session.query(State).order_by(State.id).all(): # HERE: no SQL query, only objects!
    print("{}: {}".format(state.id, state.name))
session.close()
```

###

**Do you see the difference? Cool, right?**<br>
The biggest difficulty with ORM is: **The syntax!**<br>
Indeed, all of them have the same type of syntax, but not always. Please read tutorials and don’t read the entire documentation before starting, just jump on it if you don’t get something.

###

<h1> <ins>Resources</ins> :floppy_disk:</H1>

### **Read or watch:** :heavy_check_mark:
* [**Object-relational mappers**](https://intranet.alxswe.com/rltoken/a8DUOWhXpNX3TEwgyT-U8A)
* [**mysqlclient/MySQLdb documentation**](https://intranet.alxswe.com/rltoken/JtFaKjnqxudr6Hi05Us1Lw) (*please don’t pay attention to* ***_mysql***)
* [**MySQLdb tutorial**](https://intranet.alxswe.com/rltoken/TdUSYFNGbXJG1WjCEoq5FA)
* [**SQLAlchemy tutorial**](https://intranet.alxswe.com/rltoken/YyL5hsscviNH04XGW-XpfA)
* [**SQLAlchemy**](https://intranet.alxswe.com/rltoken/j9azWF2Db_2rNolTxOF3SA)
* [**mysqlclient/MySQLdb**](https://intranet.alxswe.com/rltoken/0zLhY9KqKjn-zmdb7X598Q)
* [**Introduction to SQLAlchemy**](https://intranet.alxswe.com/rltoken/pw50Bl1Bj84wksxm018dwA)
* [**Flask SQLAlchemy**](https://intranet.alxswe.com/rltoken/B-xIdMtGvpus8vHxAIRrPg)
* [**10 common stumbling blocks for SQLAlchemy newbies**](https://intranet.alxswe.com/rltoken/deIzPMrfK8Ixqm-AboFHWg)
* [**Python SQLAlchemy Cheatsheet**](https://intranet.alxswe.com/rltoken/dZfUNK3lJicGMK5PU0bE7Q)
* [**SQLAlchemy ORM Tutorial for Python Developers**](https://intranet.alxswe.com/rltoken/hNxBKC8lHge5XjsRO8ksHQ) (***Warning:*** *This tutorial is with PostgreSQL, but the concept of SQLAlchemy is the same with MySQL*)
* [**SQLAlchemy Tutorial**](https://intranet.alxswe.com/rltoken/5G_R2NmQRFqiZb84qxYERQ)
* [**Python Virtual Environments: A primer**](https://intranet.alxswe.com/rltoken/OXle6kXpmD88D0WbgbTWqg)

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:679/0*3uedj0JV8LWYNc8Q" />
  <img src="https://miro.medium.com/v2/resize:fit:1400/0*T2lo_qEchbm5KfS5" />
  <img src="https://docs.sqlalchemy.org/en/13/_images/sqla_arch_small.png" />
  <img src="https://www.fullstackpython.com/img/visuals/sqlalchemy-orm-example.png" />
  <img src="https://dominickm.com/wp-content/uploads/2020/07/Screenshot-from-2020-07-05-19-03-10.png" />
</p>

###

<H1><ins>Learning Objectives</ins>:floppy_disk:</H1>

At the end of this project, you are expected to be able to [**explain to anyone**](https://intranet.alxswe.com/rltoken/vPPdh3HKg3t23YFxUqHpFg)**, without the help of Google:**

<p align="center">
  <img src="https://www.norberthires.blog/content/images/2022/01/the-feynman-technique.png" />
</p>

###

<H2> <ins>General</ins> :heavy_check_mark:</H2>

* **Why Python programming is awesome**
* **How to connect to a MySQL database from a Python script**
* **How to** ${{\color{red}{\textsf{ SELECT\ \}}}}\$ **rows in a MySQL table from a Python script**
* **How to** ${{\color{red}{\textsf{ INSERT\ \}}}}\$ **rows in a MySQL table from a Python script**
* **What ORM means**
* **How to map a Python Class to a MySQL table**
* **How to create a Python Virtual Environment**

<p align="center">
  <img src="https://soshace.com/wp-content/uploads/2023/03/orm-879.png" />
  <img src="https://images.ctfassets.net/23aumh6u8s0i/3n0YP76FgDncQCjCcNpj8y/7d8b894146ceb3e54df60555e6c7f5c9/class_diagram_tuto" />
  <img src="https://adityaswami89.files.wordpress.com/2014/09/orm.png" />
  <img src="https://www.tutorialspoint.com/jpa/images/object_relational_mapping.png" />
  <img src="https://unrealpython.files.wordpress.com/2021/03/orm-process.jpg" />
</p>

##

<H2> <ins>Copyright - Plagiarism</ins> :heavy_check_mark:</H2>

* You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
* You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
* You are not allowed to publish any content of this project.
* Any form of plagiarism is strictly forbidden and will result in removal from the program.

<p align="center">
  <img src="https://i.ibb.co/8csnv7s/Alx-do-hard-things.jpg" />
</p>

##

<H1><ins>Requirements</ins> :floppy_disk:</H1>

<H2>General :heavy_check_mark:</H2>

* **Allowed editors:** ${{\color{red}{\textsf{ vi\ \}}}}\$ , ${{\color{red}{\textsf{ vim\ \}}}}\$ , ${{\color{red}{\textsf{ emacs\ \}}}}\$.
* All your <ins>**files</ins>** will be **executed** on <ins>**Ubuntu 20.04 LTS**</ins> using ${{\color{red}{\textsf{ python3\ \}}}}\$ (version 3.8.5)
* Your <ins>**files</ins>** will be **executed** with ${{\color{red}{\textsf{ MySQLdb\ \}}}}\$ version ${{\color{red}{\textsf{ 2.0.x\ \}}}}\$
* Your <ins>**files</ins>** will be **executed** with ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}\$ version ${{\color{red}{\textsf{ 1.4.x\ \}}}}\$
* All your <ins>**files**</ins> should **end with a new line**
* The <ins>**first line of all your bash files</ins>** should be exactly [**#!/usr/bin/python3**](./0-select_states.py)
* A ${{\color{red}{\textsf{ README.md\ \}}}}$ <ins>**file**</ins>, at the root of the folder of the project is mandatory.
* Your code should use the **pycodestyle** (version 2.8.*).
* All your <ins>**files**</ins> must be **executable**
* The length of your files will be tested using ${{\color{red}{\textsf{ wc\ \}}}}\$
* All your modules should have a documentation (**python3 -c 'print(__import__("my_module").__doc__)'**)
* All your classes should have a documentation (**python3 -c 'print(__import__("my_module").MyClass.__doc__)'**)
* All your functions (inside and outside a class) should have a documentation (**python3 -c 'print(__import__("my_module").my_function.__doc__)'**) and (**python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'**)
* <ins>***A documentation***</ins> is not a simple word, **it’s a real sentence** explaining **what’s the purpose of the <ins>module</ins>, <ins>class</ins> or <ins>method</ins>** (the length of it will be verified)
* You are not allowed to use ${{\color{red}{\textsf{ execute\ \}}}}\$ with sqlalchemy

<p align="center">
  <img src="" />
  <img src="" />
  <img src="" />
  <img src="" />
  <img src="" />
</p>

###* All your files should start by a comment describing the task
* All SQL keywords should be in uppercase (, ${{\color{red}{\textsf{ WHERE\ \}}}}\$ …)

* The <ins>**length</ins>** of your files will be <ins>**tested</ins>** using  


<H1><ins>More Info</ins> :floppy_disk:</H1>

<H2>Install and activate venv :heavy_check_mark:</H2>

To create a Python Virtual Environment, allowing you to install specific dependencies for this python project, we will install venv:

```js
$ sudo apt-get install python3.8-venv
$ python3 -m venv venv
$ source venv/bin/activate
```

###

<H2>Install ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ module version ${{\color{red}{\textsf{ 2.0.x\ \}}}}$ :heavy_check_mark:</H2>

For installing ${{\color{red}{\textsf{ MySQLdb\ \}}}}$, you need to have ${{\color{red}{\textsf{ MySQL\ \}}}}$ installed: [**How to install MySQL 8.0 in Ubuntu 20.04**](https://intranet.alxswe.com/rltoken/paGukker_0KoG3D9FqymNQ)

```js
$ sudo apt-get install python3-dev
$ sudo apt-get install libmysqlclient-dev
$ sudo apt-get install zlib1g-dev
$ sudo pip3 install mysqlclient
...
$ python3
>>> import MySQLdb
>>> MySQLdb.version_info 
(2, 0, 3, 'final', 0)
```

###

<H2>Install ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$ module version ${{\color{red}{\textsf{ 1.4.x\ \}}}}$ :heavy_check_mark:</H2>

```js
$ sudo pip3 install SQLAlchemy
...
$ python3
>>> import sqlalchemy
>>> sqlalchemy.__version__ 
'1.4.22'
```
###

### **Also, you can have this warning message:**

```js
/usr/local/lib/python3.4/dist-packages/sqlalchemy/engine/default.py:552: Warning: (1681, "'@@SESSION.GTID_EXECUTED' is deprecated and will be re
moved in a future release.")                                                                                                                    
  cursor.execute(statement, parameters)
```
* ***You can ignore it.***

<p align="center">
  <img src="https://realpython.com/cdn-cgi/image/width=640,format=auto/https://files.realpython.com/media/Python-and-Sqlite-and-SqlAlchemy-Oh-My_Watermarked.7f4554804353.jpg" />
</p>

##

## <ins>**PROJECT_TITLE</ins>: 🔠**   💻 [**0x0F. Python -Object-relational mapping**](https://intranet.alxswe.com/projects/283) 📝🔡

## <ins>**GITHUB_REPOSITORY</ins>: 📦**  🗂 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming) 🗂

## <ins>**DIRECTORY</ins>: 💼** 📂 [**0x0F-python-object_relational_mapping**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x0F-python-object_relational_mapping)

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:850/1*wzp35B7iCyjE2QfWjPNJEw.png" />
</p>

##

* **File_name:📋** 📖 [**README.md**](https://github.com/BekiHabesha/alx-higher_level_programming/blob/master/0x0F-python-object_relational_mapping/README.md)
* **Created: 📅** <ins>**On March 15, 2024**</ins>🕙
* **Author:🖊️** 👨🏻‍💻 [***Bereket Dereje Mekkonen***](https://intranet.alxswe.com/users/BereketDerejeMekkonen) 🧑‍💻
* **Project Title: 🔠**  💻 [**0x0F. Python -Object-relational mapping**](https://intranet.alxswe.com/projects/283) 📝🔡
* **GitHub repository: 📦** 🗂 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming) 🗂
* **Directory: 💼** 📂 [**0x0F-python-object_relational_mapping**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x0F-python-object_relational_mapping)
* **Project Tasks: 📚** <ins>**Mandatory💯**</ins>
* **Tasks in number: 🔢** <ins>**18 Tasks (15-Mandatory and 3-Advanced)**</ins>
* **Mandatory_Tasks:** 💯 <ins>**From Task 0 to 14**</ins> 💯
* **Advanced_Tasks:** ⁉️ <ins>**From Task 15 to 17**</ins> ♨️

###

<p align="center">
  <img src="https://i.ibb.co/y5wmQyd/Alx-enginn-Build-ur-future.png" />
</p>

<H1 align="center"> <ins> PROJECT TASKS (Mandatory and Advanced)</ins>:floppy_disk:</H1>

<H1 align="center">MANDATORY_TASKS (From Task 0 to 14) :cd:</h1>

## **No. 0. Get all states** :heavy_check_mark:
* **File:**
  * [**0-select_states.py**](./0-select_states.py)
  * [**0-select_states.sql**](./0-select_states.sql)
###
* Write a script that lists all ${{\color{red}{\textsf{ states\ \}}}}$ from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 0\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ (no argument validation needed)
  * You must use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ (${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ MySQLdb\ \}}}}$)
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql
-- Create states table in hbtn_0e_0_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_0_usa;
USE hbtn_0e_0_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./0-select_states.py root root hbtn_0e_0_usa
(1, 'California')
(2, 'Arizona')
(3, 'Texas')
(4, 'New York')
(5, 'Nevada')
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

##

## **No. 1. Filter states** :heavy_check_mark:
* **File:**
  * [**1-filter_states.py**](./1-filter_states.py)
  * [**0-select_states.sql**](./0-select_states.sql)
###
* Write a script that lists all ${{\color{red}{\textsf{ states\ \}}}}$  with a ${{\color{red}{\textsf{ name\ \}}}}$ starting with ${{\color{red}{\textsf{ N\ \}}}}$ (upper N) from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 0\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ (no argument validation needed)
  * You must use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ (${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ MySQLdb\ \}}}}$)
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql
-- Create states table in hbtn_0e_0_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_0_usa;
USE hbtn_0e_0_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./1-filter_states.py root root hbtn_0e_0_usa
(4, 'New York')
(5, 'Nevada')
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 2. Filter states by user input** :heavy_check_mark:
* **File:**
  * [**2-my_filter_states.py**](./2-my_filter_states.py)
  * [**0-select_states.sql**](./0-select_states.sql)
###
* Write a script that takes in an argument and displays all values in the ${{\color{red}{\textsf{ states\ \}}}}$ table of ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 0\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$ where ${{\color{red}{\textsf{ name\ \}}}}$ matches the argument.
  * Your script should take 4 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$, ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ and ${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ ${{\color{red}{\textsf{ searched\ \}}}}$ (no argument validation needed)
  * You must use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ (${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ MySQLdb\ \}}}}$)
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * You must use ${{\color{red}{\textsf{ format\ \}}}}$ to create the SQL query with the user input
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql
-- Create states table in hbtn_0e_0_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_0_usa;
USE hbtn_0e_0_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./2-my_filter_states.py root root hbtn_0e_0_usa 'Arizona'
(2, 'Arizona')
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 3. SQL Injection...**:heavy_check_mark:
* **File:**
  * [**3-my_safe_filter_states.py**](./3-my_safe_filter_states.py)
  * [**0-select_states.sql**](./0-select_states.sql)
###
Wait, do you remember the previous task? Did you test [**"Arizona'; TRUNCATE TABLE states ; SELECT * FROM states WHERE name = '"**](3-my_safe_filter_states.py) as an input?

```js
guillaume@ubuntu:~/0x0F$ ./2-my_filter_states.py root root hbtn_0e_0_usa "Arizona'; TRUNCATE TABLE states ; SELECT * FROM states WHERE name = '"
(2, 'Arizona')
guillaume@ubuntu:~/0x0F$ ./0-select_states.py root root hbtn_0e_0_usa
guillaume@ubuntu:~/0x0F$ 
```
###

**What? Empty?**<br>
Yes, it’s an [**SQL injection**](https://intranet.alxswe.com/rltoken/qzLjdkHPTue2U1isMj5fJA) to delete all records of a table…
###

* Once again, write a script that takes in arguments and displays all values in the ${{\color{red}{\textsf{ states\ \}}}}$ table of ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 0\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$ where ${{\color{red}{\textsf{ name\ \}}}}$ matches the argument. But this time, write one that is safe from MySQL injections!
  * Your script should take 4 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$, ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ and ${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ ${{\color{red}{\textsf{ searched\ \}}}}$ (safe from MySQL injection)
  * You must use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ (${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ MySQLdb\ \}}}}$)
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql
-- Create states table in hbtn_0e_0_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_0_usa;
USE hbtn_0e_0_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

guillaume@ubuntu:~/0x0F$ cat 0-select_states.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./3-my_safe_filter_states.py root root hbtn_0e_0_usa 'Arizona'
(2, 'Arizona')
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 4. Cities by states** :heavy_check_mark:
* **File:**
  * [**4-cities_by_state.py**](./4-cities_by_state.py)
  * [**4-cities_by_state.sql**](./4-cities_by_state.sql)
###
* Write a script that lists all ${{\color{red}{\textsf{ cities\ \}}}}$ from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 4\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ (${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ MySQLdb\ \}}}}$)
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ cities.id\ \}}}}$
  * You can use only ${{\color{red}{\textsf{ execute\ \}}}}$**()** once
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 4-cities_by_state.sql
-- Create states table in hbtn_0e_4_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_4_usa;
USE hbtn_0e_4_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

CREATE TABLE IF NOT EXISTS cities ( 
    id INT NOT NULL AUTO_INCREMENT, 
    state_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(state_id) REFERENCES states(id)
);
INSERT INTO cities (state_id, name) VALUES (1, "San Francisco"), (1, "San Jose"), (1, "Los Angeles"), (1, "Fremont"), (1, "Livermore");
INSERT INTO cities (state_id, name) VALUES (2, "Page"), (2, "Phoenix");
INSERT INTO cities (state_id, name) VALUES (3, "Dallas"), (3, "Houston"), (3, "Austin");
INSERT INTO cities (state_id, name) VALUES (4, "New York");
INSERT INTO cities (state_id, name) VALUES (5, "Las Vegas"), (5, "Reno"), (5, "Henderson"), (5, "Carson City");

guillaume@ubuntu:~/0x0F$ cat 4-cities_by_state.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./4-cities_by_state.py root root hbtn_0e_4_usa
(1, 'San Francisco', 'California')
(2, 'San Jose', 'California')
(3, 'Los Angeles', 'California')
(4, 'Fremont', 'California')
(5, 'Livermore', 'California')
(6, 'Page', 'Arizona')
(7, 'Phoenix', 'Arizona')
(8, 'Dallas', 'Texas')
(9, 'Houston', 'Texas')
(10, 'Austin', 'Texas')
(11, 'New York', 'New York')
(12, 'Las Vegas', 'Nevada')
(13, 'Reno', 'Nevada')
(14, 'Henderson', 'Nevada')
(15, 'Carson City', 'Nevada')
guillaume@ubuntu:~/0x0F$  
```
* **No test cases needed**

###

## **No. 5. All cities by state**:heavy_check_mark:
* **File:**
  * [**5-filter_cities.py**](./5-filter_cities.py)
  * [**4-cities_by_state.sql**](./4-cities_by_state.sql)
###
* Write a script that takes in the name of a state as an argument and lists all ${{\color{red}{\textsf{ cities\ \}}}}$ of that state, using the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 4\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 4 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$, ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ and ${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ (SQL injection free!)
  * You must use the module ${{\color{red}{\textsf{ MySQLdb\ \}}}}$ (${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ MySQLdb\ \}}}}$)
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ cities.id\ \}}}}$
  * You can use only ${{\color{red}{\textsf{ execute\ \}}}}$**()** once
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 4-cities_by_state.sql
-- Create states table in hbtn_0e_4_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_4_usa;
USE hbtn_0e_4_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

CREATE TABLE IF NOT EXISTS cities ( 
    id INT NOT NULL AUTO_INCREMENT, 
    state_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(state_id) REFERENCES states(id)
);
INSERT INTO cities (state_id, name) VALUES (1, "San Francisco"), (1, "San Jose"), (1, "Los Angeles"), (1, "Fremont"), (1, "Livermore");
INSERT INTO cities (state_id, name) VALUES (2, "Page"), (2, "Phoenix");
INSERT INTO cities (state_id, name) VALUES (3, "Dallas"), (3, "Houston"), (3, "Austin");
INSERT INTO cities (state_id, name) VALUES (4, "New York");
INSERT INTO cities (state_id, name) VALUES (5, "Las Vegas"), (5, "Reno"), (5, "Henderson"), (5, "Carson City");

guillaume@ubuntu:~/0x0F$ ./5-filter_cities.py root root hbtn_0e_4_usa Texas

guillaume@ubuntu:~/0x0F$ cat 4-cities_by_state.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./5-filter_cities.py root root hbtn_0e_4_usa Texas
Dallas, Houston, Austin
guillaume@ubuntu:~/0x0F$ ./5-filter_cities.py root root hbtn_0e_4_usa Hawaii

guillaume@ubuntu:~/0x0F$   
```
* **No test cases needed**

###

## **No. 6. First state model** :heavy_check_mark:
* **File:**
  * [**model_state.py**](./model_state.py)
  * [**6-model_state.py**](./6-model_state.py)
  * [**6-model_state.sql**](./6-model_state.sql)
###
<p align="center">
  <img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/f84fe6edb9436c8560996c6d72e17ea51dab28e1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240315T211035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6b1b0a35cf2d104189302ff3ddddd62709aa7bdde61d7f3186db9e6d3b37ccb9" />
</p>

* Write a python file that contains the class definition of a ${{\color{red}{\textsf{ state\ \}}}}$ and an instance ${{\color{red}{\textsf{ Base\ \}}}}$ **=** ${{\color{red}{\textsf{ declarative\ \}}}}$**_**${{\color{red}{\textsf{ base\ \}}}}$**():**
  * ${{\color{red}{\textsf{ State\ \}}}}$ class:
    * inherits from ${{\color{red}{\textsf{ Base\ \}}}}$ [**Tips**](https://intranet.alxswe.com/rltoken/SFKIwNZ3IG6_4TL6dEsIuA)
    * links to the MySQL table ${{\color{red}{\textsf{ states\ \}}}}$
    * class attribute ${{\color{red}{\textsf{ id\ \}}}}$ that represents a column of an auto-generated, unique integer, can’t be null and is a primary key
    * class attribute ${{\color{red}{\textsf{ name\ \}}}}$ that represents a column of a string with maximum 128 characters and can’t be null
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * **WARNING:** all classes who inherit from ${{\color{red}{\textsf{ Base\ \}}}}$ **must** imported before calling ${{\color{red}{\textsf{ Base.metadata.create\ \}}}}$**_**${{\color{red}{\textsf{ all\ \}}}}$**(**${{\color{red}{\textsf{ engine\ \}}}}$**)**

```js
guillaume@ubuntu:~/0x0F$ cat 6-model_state.sql
-- Create database hbtn_0e_6_usa
CREATE DATABASE IF NOT EXISTS hbtn_0e_6_usa;
USE hbtn_0e_6_usa;
SHOW CREATE TABLE states;

guillaume@ubuntu:~/0x0F$ cat 6-model_state.sql | mysql -uroot -p
Enter password: 
ERROR 1146 (42S02) at line 4: Table 'hbtn_0e_6_usa.states' doesn't exist
guillaume@ubuntu:~/0x0F$ cat 6-model_state.py
#!/usr/bin/python3
"""Start link class to table in database 
"""
import sys
from model_state import Base, State

from sqlalchemy import (create_engine)

if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(sys.argv[1], sys.argv[2], sys.argv[3]), pool_pre_ping=True)
    Base.metadata.create_all(engine)

guillaume@ubuntu:~/0x0F$ ./6-model_state.py root root hbtn_0e_6_usa
guillaume@ubuntu:~/0x0F$ cat 6-model_state.sql | mysql -uroot -p
Enter password: 
Table   Create Table
states  CREATE TABLE `states` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `name` varchar(128) NOT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=latin1
guillaume@ubuntu:~/0x0F$  
```
* **No test cases needed**

###

## **No. 7. All states via SQLAlchemy**:heavy_check_mark:
* **File:**
  * [**7-model_state_fetch_all.py**](./7-model_state_fetch_all.py)
  * [**7-model_state_fetch_all.sql**](./7-model_state_fetch_all.sql)
###
* Write a script that lists all ${{\color{red}{\textsf{ state\ \}}}}$ objects from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 7-model_state_fetch_all.sql
-- Insert states
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

guillaume@ubuntu:~/0x0F$ cat 7-model_state_fetch_all.sql | mysql -uroot -p hbtn_0e_6_usa
Enter password: 
guillaume@ubuntu:~/0x0F$ ./7-model_state_fetch_all.py root root hbtn_0e_6_usa
1: California
2: Arizona
3: Texas
4: New York
5: Nevada
guillaume@ubuntu:~/0x0F$  
```
* **No test cases needed**

###

## **No. 8. First state**:heavy_check_mark:
* **File:**
  * [**8-model_state_fetch_first.py**](./8-model_state_fetch_first.py)
###
* Write a script that prints the first ${{\color{red}{\textsf{ state\ \}}}}$ objects from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * You are not allowed to fetch all states from the database before displaying the result
  * The results must be displayed as they are in the example below
  * If the table ${{\color{red}{\textsf{ states\ \}}}}$ is empty, print ${{\color{red}{\textsf{ Nothing\ \}}}}$ followed by a new line
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ ./8-model_state_fetch_first.py root root hbtn_0e_6_usa
1: California
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 9. Contains `a`**:heavy_check_mark:
* **File:**
  * [**9-model_state_filter_a.py**](./9-model_state_filter_a.py)
###
* Write a script that lists all ${{\color{red}{\textsf{ state\ \}}}}$ objects that contain the letter ${{\color{red}{\textsf{ a\ \}}}}$ from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$
  * The results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ ./9-model_state_filter_a.py root root hbtn_0e_6_usa
1: California
2: Arizona
3: Texas
5: Nevada
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 10. Get a state** :heavy_check_mark:
* **File:**
  * [**10-model_state_my_get.py**](./10-model_state_my_get.py)
###
* Write a script that prints the ${{\color{red}{\textsf{ state\ \}}}}$ object with the ${{\color{red}{\textsf{ name\ \}}}}$ passed as argument from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 4 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$, ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ and ${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ ${{\color{red}{\textsf{ to\ \}}}}$ ${{\color{red}{\textsf{ search\ \}}}}$ (SQL injection free)
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * You can assume you have one record with the state name to search
  * Results must display the ${{\color{red}{\textsf{ states.id\ \}}}}$
  * If no state has the name you searched for, display ${{\color{red}{\textsf{ Not\ \}}}}$ ${{\color{red}{\textsf{ found\ \}}}}$
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ ./10-model_state_my_get.py root root hbtn_0e_6_usa Texas
3
guillaume@ubuntu:~/0x0F$ ./10-model_state_my_get.py root root hbtn_0e_6_usa Illinois
Not found
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 11. Add a new state**:heavy_check_mark:
* **File:**
  * [**11-model_state_insert.py**](./11-model_state_insert.py)
  * [**7-model_state_fetch_all.py**](./7-model_state_fetch_all.py)
###
* Write a script that adds the ${{\color{red}{\textsf{ state\ \}}}}$ object “Louisiana” to the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Print the new ${{\color{red}{\textsf{ states.id\ \}}}}$ after creation
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ ./11-model_state_insert.py root root hbtn_0e_6_usa 
6
guillaume@ubuntu:~/0x0F$ ./7-model_state_fetch_all.py root root hbtn_0e_6_usa 
1: California
2: Arizona
3: Texas
4: New York
5: Nevada
6: Louisiana
guillaume@ubuntu:~/0x0F$  
```
* **No test cases needed**

###

## **12. Update a state**:heavy_check_mark:
* **File:**
  * [**12-model_state_update_id_2.py**](./12-model_state_update_id_2.py)
  * [**7-model_state_fetch_all.py**](./7-model_state_fetch_all.py)
###
* Write a script that changes the name of a ${{\color{red}{\textsf{ state\ \}}}}$ object from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Change the name of the ${{\color{red}{\textsf{ state\ \}}}}$ where ${{\color{red}{\textsf{ id\ \}}}}$ **=** ${{\color{red}{\textsf{ 2\ \}}}}$ to ${{\color{red}{\textsf{ New\ \}}}}$ ${{\color{red}{\textsf{ Mexico\ \}}}}$
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ ./12-model_state_update_id_2.py root root hbtn_0e_6_usa 
guillaume@ubuntu:~/0x0F$ ./7-model_state_fetch_all.py root root hbtn_0e_6_usa 
1: California
2: New Mexico
3: Texas
4: New York
5: Nevada
6: Louisiana
guillaume@ubuntu:~/0x0F$  
```
* **No test cases needed**

###

## **No. 13. Delete states**:heavy_check_mark:
* **File:**
  * [**13-model_state_delete_a.py**](./13-model_state_delete_a.py)
  * [**7-model_state_fetch_all.py**](./7-model_state_fetch_all.py)
###
* Write a script that deletes all ${{\color{red}{\textsf{ state\ \}}}}$ objects with a name containing the letter ${{\color{red}{\textsf{ a\ \}}}}$ from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 6\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ ./13-model_state_delete_a.py root root hbtn_0e_6_usa 
guillaume@ubuntu:~/0x0F$ ./7-model_state_fetch_all.py root root hbtn_0e_6_usa 
2: New Mexico
4: New York
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 14. My genres**:heavy_check_mark:
* **File:**
  * [**model_city.py**](./model_city.py)
  * [**14-model_city_fetch_by_state.py**](./14-model_city_fetch_by_state.py)
  * [**14-model_city_fetch_by_state.sql**](./14-model_city_fetch_by_state.sql)
###
* Write a Python file similar to [**model_state.py**](./model_state.py) named [**model_city.py**](./model_city.py) that contains the class definition of a ${{\color{red}{\textsf{ City\ \}}}}$
  * ${{\color{red}{\textsf{ City\ \}}}}$ class:
    * inherits from ${{\color{red}{\textsf{ Base\ \}}}}$ (imported from ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$)
    * links to the MySQL table ${{\color{red}{\textsf{ cities\ \}}}}$
    * class attribute ${{\color{red}{\textsf{ id\ \}}}}$ that represents a column of an auto-generated, unique integer, can’t be null and is a primary key
    * class attribute ${{\color{red}{\textsf{ name\ \}}}}$ that represents a column of a string with maximum 128 characters and can’t be null
    * class attribute ${{\color{red}{\textsf{ state\ \}}}}$**_**${{\color{red}{\textsf{ id\ \}}}}$ that represents a column of an integer, can’t be null and is a foreign key to ${{\color{red}{\textsf{ states.id\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
###

* Write a script [**14-model_city_fetch_by_state.py**](./14-model_city_fetch_by_state.py) that prints all ${{\color{red}{\textsf{ city\ \}}}}$ objects from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 14\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must import ${{\color{red}{\textsf{ State\ \}}}}$ and ${{\color{red}{\textsf{ Base\ \}}}}$ from  ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ **-** ${{\color{red}{\textsf{ from\ \}}}}$ ${{\color{red}{\textsf{ model\ \}}}}$**_**${{\color{red}{\textsf{ state\ \}}}}$ ${{\color{red}{\textsf{ import\ \}}}}$ ${{\color{red}{\textsf{ Base\ \}}}}$${{\color{red}{\textsf{ ,\ \}}}}$ ${{\color{red}{\textsf{ State\ \}}}}$
  * Your script should connect to a MySQL server running on ${{\color{red}{\textsf{ localhost\ \}}}}$ at port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ cities.id\ \}}}}$
  * Results must be displayed as they are in the example below (**<state name>: (<city id>) <city name>**)
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 14-model_city_fetch_by_state.sql
-- Create database hbtn_0e_14_usa, tables states and cities + some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_14_usa;
USE hbtn_0e_14_usa;

CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

CREATE TABLE IF NOT EXISTS cities ( 
    id INT NOT NULL AUTO_INCREMENT, 
    state_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(state_id) REFERENCES states(id)
);
INSERT INTO cities (state_id, name) VALUES (1, "San Francisco"), (1, "San Jose"), (1, "Los Angeles"), (1, "Fremont"), (1, "Livermore");
INSERT INTO cities (state_id, name) VALUES (2, "Page"), (2, "Phoenix");
INSERT INTO cities (state_id, name) VALUES (3, "Dallas"), (3, "Houston"), (3, "Austin");
INSERT INTO cities (state_id, name) VALUES (4, "New York");
INSERT INTO cities (state_id, name) VALUES (5, "Las Vegas"), (5, "Reno"), (5, "Henderson"), (5, "Carson City");

guillaume@ubuntu:~/0x0F$ cat 14-model_city_fetch_by_state.sql | mysql -uroot -p
Enter password: 
guillaume@ubuntu:~/0x0F$ ./14-model_city_fetch_by_state.py root root hbtn_0e_14_usa
California: (1) San Francisco
California: (2) San Jose
California: (3) Los Angeles
California: (4) Fremont
California: (5) Livermore
Arizona: (6) Page
Arizona: (7) Phoenix
Texas: (8) Dallas
Texas: (9) Houston
Texas: (10) Austin
New York: (11) New York
Nevada: (12) Las Vegas
Nevada: (13) Reno
Nevada: (14) Henderson
Nevada: (15) Carson City
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

#

<H1 align="center">ADVANCED_TASKS (From Task 15 to Task 17) :cd:</h1>

## **No. 15. City relationship**:heavy_check_mark:
* **File:**
  * [**relationship_city.py**](./relationship_city.py)
  * [**relationship_state.py**](./relationship_state.py)
  * [**100-relationship_states_cities.py**](./100-relationship_states_cities.py)
  * [**100-relationship_states_cities.sql**](./100-relationship_states_cities.sql)
###

* Improve the files [**model_city.py**](./model_city.py) and [**model_state.py**](./model_state.py), and save them as [**relationship_city.py**](./relationship_city.py) and [**relationship_state.py**](./relationship_state.py)
:
  * ${{\color{red}{\textsf{ City\ \}}}}$ class:
    * No change
  * ${{\color{red}{\textsf{ State\ \}}}}$ class:
    * In addition to previous requirements, the class attribute ${{\color{red}{\textsf{ cities\ \}}}}$ must represent a relationship with the class ${{\color{red}{\textsf{ City\ \}}}}$ . If the ${{\color{red}{\textsf{ State\ \}}}}$ object is deleted, all linked ${{\color{red}{\textsf{ City\ \}}}}$ objects must be automatically deleted. Also, the reference from a ${{\color{red}{\textsf{ City\ \}}}}$ object to his ${{\color{red}{\textsf{ State\ \}}}}$ should be named ${{\color{red}{\textsf{ state\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
###

* Write a script that creates the ${{\color{red}{\textsf{ State\ \}}}}$  “California” with the ${{\color{red}{\textsf{ City\ \}}}}$ “San Francisco” from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 100\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$: ([**100-relationship_states_cities.py**](./100-relationship_states_cities.py))
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * You must use the ${{\color{red}{\textsf{ cities\ \}}}}$ relationship for all ${{\color{red}{\textsf{ State\ \}}}}$ objects
  * Your code should not be executed when imported

```js
guillaume@ubuntu:~/0x0F$ cat 100-relationship_states_cities.sql
-- Create the database hbtn_0e_100_usa
CREATE DATABASE IF NOT EXISTS hbtn_0e_100_usa;
USE hbtn_0e_100_usa;

SELECT * FROM states;
SELECT * FROM cities;

guillaume@ubuntu:~/0x0F$ cat 100-relationship_states_cities.sql | mysql -uroot -p
Enter password: 
ERROR 1146 (42S02) at line 5: Table 'hbtn_0e_100_usa.states' doesn't exist
guillaume@ubuntu:~/0x0F$ ./100-relationship_states_cities.py root root hbtn_0e_100_usa
guillaume@ubuntu:~/0x0F$ cat 100-relationship_states_cities.sql | mysql -uroot -p
Enter password: 
id  name
1   California
id  name    state_id
1   San Francisco   1
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###

## **No. 16. List relationship**:heavy_check_mark:
* **File:**
  * [**101-relationship_states_cities_list.py**](./101-relationship_states_cities_list.py)
  * [**101-relationship_states_cities_list.sql**](./101-relationship_states_cities_list.sql)
###
* Write a script that lists all ${{\color{red}{\textsf{ State\ \}}}}$ objects, and corresponding ${{\color{red}{\textsf{ City\ \}}}}$ objects, contained in the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 101\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ (no argument validation needed)
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * The connection to your MySQL server must be to ${{\color{red}{\textsf{ localhost\ \}}}}$ on port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * You must only use one query to the database
  * You must use the ${{\color{red}{\textsf{ cities\ \}}}}$ relationship for all ${{\color{red}{\textsf{ State\ \}}}}$ objects
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ states.id\ \}}}}$ and ${{\color{red}{\textsf{ cities.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
<state id>: <state name>
<tabulation><city id>: <city name>
```
<br>
```js
guillaume@ubuntu:~/0x0F$ cat 101-relationship_states_cities_list.sql
-- Create states table in hbtn_0e_101_usa with some data
CREATE DATABASE IF NOT EXISTS hbtn_0e_101_usa;
USE hbtn_0e_101_usa;
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");

CREATE TABLE IF NOT EXISTS cities ( 
    id INT NOT NULL AUTO_INCREMENT, 
    state_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(state_id) REFERENCES states(id)
);
INSERT INTO cities (state_id, name) VALUES (1, "San Francisco"), (1, "San Jose"), (1, "Los Angeles"), (1, "Fremont"), (1, "Livermore");
INSERT INTO cities (state_id, name) VALUES (2, "Page"), (2, "Phoenix");
INSERT INTO cities (state_id, name) VALUES (3, "Dallas"), (3, "Houston"), (3, "Austin");
INSERT INTO cities (state_id, name) VALUES (4, "New York");
INSERT INTO cities (state_id, name) VALUES (5, "Las Vegas"), (5, "Reno"), (5, "Henderson"), (5, "Carson City");

guillaume@ubuntu:~/0x0F$ cat 101-relationship_states_cities_list.sql | mysql -uroot -p
guillaume@ubuntu:~/0x0F$ ./101-relationship_states_cities_list.py root root hbtn_0e_101_usa
1: California
    1: San Francisco
    2: San Jose
    3: Los Angeles
    4: Fremont
    5: Livermore
2: Arizona
    6: Page
    7: Phoenix
3: Texas
    8: Dallas
    9: Houston
    10: Austin
4: New York
    11: New York
5: Nevada
    12: Las Vegas
    13: Reno
    14: Henderson
    15: Carson City
guillaume@ubuntu:~/0x0F$  
```
* **No test cases needed**

###

## **No. 17. From city**:heavy_check_mark:
* **File:**
  * [**102-relationship_cities_states_list.py**](./102-relationship_cities_states_list.py)
###
* Write a script that lists all ${{\color{red}{\textsf{ City\ \}}}}$ objects from the database ${{\color{red}{\textsf{ hbtn\ \}}}}$**_**${{\color{red}{\textsf{ 0e\ \}}}}$**_**${{\color{red}{\textsf{ 101\ \}}}}$**_**${{\color{red}{\textsf{ usa\ \}}}}$:
  * Your script should take 3 arguments: ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ username\ \}}}}$, ${{\color{red}{\textsf{ mysql\ \}}}}$ ${{\color{red}{\textsf{ password\ \}}}}$ and ${{\color{red}{\textsf{ database\ \}}}}$ ${{\color{red}{\textsf{ name\ \}}}}$ (no argument validation needed)
  * You must use the module ${{\color{red}{\textsf{ SQLAlchemy\ \}}}}$
  * The connection to your MySQL server must be to ${{\color{red}{\textsf{ localhost\ \}}}}$ on port ${{\color{red}{\textsf{ 3306\ \}}}}$
  * You must only use one query to the database
  * You must use the ${{\color{red}{\textsf{ state\ \}}}}$ relationship to access to the ${{\color{red}{\textsf{ State\ \}}}}$ object linked to the ${{\color{red}{\textsf{ City\ \}}}}$ object
  * Results must be sorted in ascending order by ${{\color{red}{\textsf{ cities.id\ \}}}}$
  * Results must be displayed as they are in the example below
  * Your code should not be executed when imported

```js
<city id>: <city name> -> <state name>
```
<br>
```js
guillaume@ubuntu:~/0x0F$ ./102-relationship_cities_states_list.py root root hbtn_0e_101_usa
1: San Francisco -> California
2: San Jose -> California
3: Los Angeles -> California
4: Fremont -> California
5: Livermore -> California
6: Page -> Arizona
7: Phoenix -> Arizona
8: Dallas -> Texas
9: Houston -> Texas
10: Austin -> Texas
11: New York -> New York
12: Las Vegas -> Nevada
13: Reno -> Nevada
14: Henderson -> Nevada
15: Carson City -> Nevada
guillaume@ubuntu:~/0x0F$ 
```
* **No test cases needed**

###
