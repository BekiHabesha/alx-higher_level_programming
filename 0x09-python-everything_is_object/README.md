<H1 align="center", height="1500"> <ins> README.md File </ins> </H1>
<H1 align="center", height="1500"> <ins> 0x09. Python - Everything is object</ins> </H1>

<p align="center">
  <img src="https://i.ibb.co/k6kDwSx/0x09-Python-Everything-is-object-Alx-logo.png" />
</p>

##

* **File_name:📝** [**README.md**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x09-python-everything_is_object/README.md) **file** 📒
* **Created:🗓** 🕓 [**On January 05, 2024**](https://www.wincalendar.com/Holiday-Calendar/January-2024?v=2) 📅
* **Author: 🖊** 🎖 [***Bereket Dereje Mekkonen***](https://intranet.alxswe.com/users/my_profile)👨🏽‍💻
* **Project Title:💻**  🔠 [**0x09. Python - Everything is object**](https://intranet.alxswe.com/projects/252) 🔡
* **GitHub Repository:🗄** 📦 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master) 🗂
* **Directory:📀**  🗃 [**0x09-python-everything_is_object**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x09-python-everything_is_object) 💽
* **Project Tasks:📚** <ins>**🛑Mandatory♨️ and ‼️Advanced⁉️**</ins>
* **Tasks in number:🔢** <ins>**35 Tasks (29-Mandatory & 6-Advanced)**</ins>
* **🛑Mandatory_Tasks:♨️** <ins>**From Task 0 to 28**</ins>
* **‼️Advanced_Tasks:⁉️** <ins>**From Task 29 to 34**</ins>

##

### **PROJECT_TITLE: 💻**  🔠 [**0x09. Python - Everything is object**](https://intranet.alxswe.com/projects/252) 🔡

### **GITHUB_REPOSITORY: 🗄** 📦 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master) 🗂

### **DIRECTORY: 📀**  🗃 [**0x09-python-everything_is_object**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x09-python-everything_is_object) 💽

<p align="center">
  <img src="https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/252/r_208403_QPSN8.jpg" />
</p>

###

<h1 align="center"> 🔎 <ins>Background Context</ins> ⌛ </H1>

**Now that we understand that everything is an object and have a little bit of knowledge, let’s pause and look a little bit closer at how Python works with different types of objects.**
####
**BTW, have you ever modified a variable without knowing it or wanting to? I mean:**

```js
>>> a = 1
>>> b = a
>>> a = 2
>>> b
1
>>>
```
####

**OK. But what about this?**

```js
>>> l = [1, 2, 3]
>>> m = l
>>> l[0] = 'x'
>>> m
['x', 2, 3]
>>>
```
####

<p align="center">
  <img src="https://media.giphy.com/media/wAjfQ9MLUfFjq/giphy.gif" />
</p>

**This project is a little bit different than the usual projects. The first part is only questions about Python’s specificity like “What would be the result of…”. You should <ins>read all documentation first (as usual :))</ins>, then take the time to <ins>think and brainstorm with your peers</ins> about what you think and why. <ins>Try to do this without coding anything for a few hours</ins>**.

**Trying examples in the Python interpreter will give you most of the answers without having to think about it. <ins>Don’t go this route</ins>. First read, then think, then brainstorm together. Only then you can test in the interpreter.**

**It’s important that you truly understand the reasons behind the answers of all those tasks so that you can apply the same logic to other variables and other variable types**.

**Note that during interviews for Python positions, <ins>you will most likely have to answer to these type of questions</ins>**.

**All your answers should be only one line in a file. No space before or after the answer**.

##

<h1 align="center"> 📍 <ins>Resources</ins> 📌 :floppy_disk:</H1>

### **📖Read🗞 or 🖥️watch🎞 :** :heavy_check_mark:
* [**9.10. Objects and values**](https://intranet.alxswe.com/rltoken/MrtBogRzYETxnSKG97E7Sg)
* [**9.11. Aliasing**](https://intranet.alxswe.com/rltoken/Ro-7kVXtmWyAeOXEw7RhSg)
* [**Immutable vs mutable types**](https://intranet.alxswe.com/rltoken/X1lEmkwQRWI3fP4W7bq_qw)
* [**Mutation**](https://intranet.alxswe.com/rltoken/6d5UiQ__13J1EU8BdddCyg)(_Only this chapter_)
* [**9.12. Cloning lists**](https://intranet.alxswe.com/rltoken/-Gi4PX4srBYFKpZ5Er6sqA)
* [**Python tuples: immutable but potentially changing**](https://intranet.alxswe.com/rltoken/NZIom4L-tS0HjpY_uEVr9A)

<p align="center">
  <img src="https://files.realpython.com/media/Mutable-and-Immutable-Data-Types-in-Python_Watermarked.2566c67a719d.jpg" />
  <img src="https://i.stack.imgur.com/FjmY2.png" />
  <img src="https://www.stechies.com/userfiles/images/pythonlistcopy1200x700webp1578060386.webp" />
</p>

<H1 align="center">📝 <ins>Learning Objectives</ins> 🔖 :floppy_disk:</H1>

* At the end of this project, You are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/J02m-YVaLqu3rtRDGfg5NQ), **Without the help of Google:**

<p align="center">
  <img src="https://i.ibb.co/VLNRkLS/final-the-feynman-technique.png" />
</p>

#

<H2> 🖇️ <ins>General Learning Objectives</ins> 🪜:heavy_check_mark:</H2>

* **Why <ins>Python programming is awesome</ins>.**
* **What is an <ins>object</ins>.**
* **What is the difference between a <ins>class</ins>** and an <ins>**object</ins>** or <ins>**instance</ins>.**
* **What is the difference between <ins>**immutable object</ins> and <ins>**mutable object</ins>.**
* **What is a <ins>reference</ins>.**
* **What is an <ins>assignment</ins>.**
* **What is an <ins>alias</ins>**
* **How to know if <ins>two variables are identical</ins>.**
* **How to know if <ins>two variables are linked to the same object</ins>.**
* **How to display the <ins>variable identifier</ins>** (which is the <ins>**memory address in the CPython implementation</ins>**)
* **What is <ins>mutable</ins>** and <ins>**immutable</ins>.**
* **What are the <ins>built-in mutable types</ins>.**
* **What are the <ins>built-in immutable types</ins>.**
* **How does <ins>Python pass variables</ins>** to <ins>**functions</ins>.**

<p align="center">
  <img src="https://files.realpython.com/media/Pythons-tuple-Built-in-Data-Type-A-Deep-Dive-with-Examples_Watermarked.e85efb14c955.jpg" />
  <img src="https://media.licdn.com/dms/image/D5612AQE3QIPihP9nUw/article-inline_image-shrink_1500_2232/0/1697432025722?e=1709769600&v=beta&t=IyZpJGrQfBO_JOIgIsgBZeolsimDd0dg_OnXCf31FHw4" />
  <img src="https://www.w3resource.com/w3r_images/Python-data-type-list-excercise-9.png" />
</p>

###
<H2> 🛡 <ins>Copyright©️ - ❌ Plagiarism</ins> 🔰</H2>

* You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
* You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
* You are not allowed to publish any content of this project.
* Any form of plagiarism is strictly forbidden and will result in removal from the program.

<p align="center">
  <img src="https://i.ibb.co/Dr7zQyb/alx-do-hard-things.png" />
</p>

##

<H1 align="center"> ⚠️ <ins>Requirements</ins> ♻️</H1>

<H2> 📍 <ins>Python Scripts</ins> 🔑 :heavy_check_mark:</H2>

* **Allowed editors:** ${{\color{red}{\textsf{ vi\ \}}}}\$ , ${{\color{red}{\textsf{ vim\ \}}}}\$ , ${{\color{red}{\textsf{ emacs\ \}}}}\$.
* All your files will be **interpreted/compiled** on <ins>**Ubuntu 20.04 LTS**</ins> Using <ins>**python3**</ins> (version 3.8.5)
* All your files should **end with a new line**
* The first line of all your files should be exactly [**#!/usr/bin/python3**](./100-magic_string.py)
* A ${{\color{red}{\textsf{ README.md\ \}}}}\$, at the root of the folder of the project is mandatory.
* Your code should use the ${{\color{red}{\textsf{ pycodestyle\ \}}}}\$ (version ${{\color{red}{\textsf{ 2.8.*\ \}}}}\$).
* All **your files** must be **executable**.
* The length of your files will be tested using ${{\color{red}{\textsf{ wc*\ \}}}}\$.

###

<H2> 📍 ${{\color{red}{\textsf{ .txt\ \}}}}\$ <ins>Answer Files</ins> 📝 :heavy_check_mark:</H2>

* **Only one line**.
* **No Shebang**.
* All your files should **end with a new line**.

<p align="center">
  <img src="https://anvil.works/articles/img/pointers-in-my-python/006a-comparison.png" />
</p>

##

* **File_name:📝** [**README.md**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x09-python-everything_is_object/README.md) **file** 📒
* **Created:🗓** 🕓 [**On January 05, 2024**](https://www.wincalendar.com/Holiday-Calendar/January-2024?v=2) 📅
* **Author: 🖊** 🎖 [***Bereket Dereje Mekkonen***](https://intranet.alxswe.com/users/my_profile)👨🏽‍💻
* **Project Title:💻**  🔠 [**0x09. Python - Everything is object**](https://intranet.alxswe.com/projects/252) 🔡
* **GitHub Repository:🗄** 📦 [**alx-higher_level_programming**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master) 🗂
* **Directory:📀**  🗃 [**0x09-python-everything_is_object**](https://github.com/BekiHabesha/alx-higher_level_programming/tree/master/0x09-python-everything_is_object) 💽
* **Project Tasks:📚** <ins>**🛑Mandatory♨️ and ‼️Advanced⁉️**</ins>
* **Tasks in number:🔢** <ins>**35 Tasks (29-Mandatory & 6-Advanced)**</ins>
* **🛑Mandatory_Tasks:♨️** <ins>**From Task 0 to 28**</ins>
* **‼️Advanced_Tasks:⁉️** <ins>**From Task 29 to 34**</ins>

##

<p align="center">
  <img src="https://i.ibb.co/y5wmQyd/Alx-enginn-Build-ur-future.png" />
</p>

<H1 align="center"> 🪙 <ins> PROJECT TASKS (Mandatory 🕹and Advanced)</ins> 🎖</H1>

<H1 align="center"> 🛑 MANDATORY_TASKS ♨️ (From Task 0 to 28) 💽</h1>

## **No. 0. Who am I?**:heavy_check_mark:
* **File:**
  * [**0-answer.txt**](./0-answer.txt)
###
* What function would you use to get the type of an object?
* Write the name of the function in the file, without **()**.

##

## **No. 1. Where are you?**:heavy_check_mark:
* **File:**
  * [**1-answer.txt**](./1-answer.txt)
###
* How do you get the variable identifier (which is the memory address in the CPython implementation)?
* Write the name of the function in the file, without **()**.

##

## **No. 2. Right count**:heavy_check_mark:
* **File:**
  * [**2-answer.txt**](./2-answer.txt)
###
* In the following code, do <ins>**a**</ins> and <ins>**b**</ins> point to the same object? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

```js
>>> a = 89
>>> b = 100
```

##

## **No. 3. Right count =**:heavy_check_mark:
* **File:**
  * [**3-answer.txt**](./3-answer.txt)
###
* In the following code, do <ins>**a**</ins> and <ins>**b**</ins> point to the same object? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

```js
>>> a = 89
>>> b = 89
```

##

## **No. 4. Right count =**:heavy_check_mark:
* **File:**
  * [**4-answer.txt**](./4-answer.txt)
###
* In the following code, do <ins>**a**</ins> and <ins>**b**</ins> point to the same object? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

```js
>>> a = 89
>>> b = a
```

##

## **No. 5-answer.txt =+**:heavy_check_mark:
* **File:**
  * [**5-answer.txt**](./5-answer.txt)
###
* In the following code, do <ins>**a**</ins> and <ins>**b**</ins> point to the same object? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

```js
>>> a = 89
>>> b = a + 1
```

##

## **No. 6. Is equal**:heavy_check_mark:
* **File:**
  * [**6-answer.txt**](./6-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> s1 = "Best School"
>>> s2 = s1
>>> print(s1 == s2)
```

##

## **No. 7. Is the same**:heavy_check_mark:
* **File:**
  * [**7-answer.txt**](./7-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> s1 = "Best"
>>> s2 = s1
>>> print(s1 is s2)
```

##

## **No. 8. Is really equal**:heavy_check_mark:
* **File:**
  * [**8-answer.txt**](./8-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> s1 = "Best School"
>>> s2 = "Best School"
>>> print(s1 == s2)
```

##

## **No. 9. Is really the same**:heavy_check_mark:
* **File:**
  * [**9-answer.txt**](./9-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> s1 = "Best School"
>>> s2 = "Best School"
>>> print(s1 is s2)
```

##

## **No. 10. And with a list, is it equal**:heavy_check_mark:
* **File:**
  * [**10-answer.txt**](./10-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 == l2)
```

##

## **No. 11. And with a list, is it the same**:heavy_check_mark:
* **File:**
  * [**11-answer.txt**]](./11-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 is l2)
```

##

## **No. 12. And with a list, is it really equal**:heavy_check_mark:
* **File:**
  * [**12-answer.txt**](./12-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 == l2)
```

##

## **No. 13. And with a list, is it really the same**:heavy_check_mark:
* **File:**
  * [**13-answer.txt**](./13-answer.txt)
###
* What do these <ins>**3 lines print</ins>?**

```js
>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 is l2)
```

##

## **No. 14. List append**:heavy_check_mark:
* **File:**
  * [**14-answer.txt**](./14-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
l1 = [1, 2, 3]
l2 = l1
l1.append(4)
print(l2)
```

##

## **No. 15. List add**:heavy_check_mark:
* **File:**
  * [**15-answer.txt**](./15-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
l1 = [1, 2, 3]
l2 = l1
l1 = l1 + [4]
print(l2)
```

##

## **No. 16. Integer incrementation**:heavy_check_mark:
* **File:**
  * [**16-answer.txt**](./16-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
def increment(n):
    n += 1

a = 1
increment(a)
print(a)
```

##

## **No. 17. List incrementation**:heavy_check_mark:
* **File:**
  * [**17-answer.txt**](./17-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
def increment(n):
    n.append(4)

l = [1, 2, 3]
increment(l)
print(l)
```

##

## **No. 18. List assignation**:heavy_check_mark:
* **File:**
  * [**18-answer.txt**](./18-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
def assign_value(n, v):
    n = v

l1 = [1, 2, 3]
l2 = [4, 5, 6]
assign_value(l1, l2)
print(l1)
```

##

## **No. 19. Copy a list object**:heavy_check_mark:
* **File:**
  * [**19-copy_list.py**](./19-answer.txt)
###
* Write a **function** <ins>**def copy_list(l)</ins>:** that returns a  **copy** of a list.
  * The <ins>**input list</ins>** can contain **any type of objects**
  * Your file should be <ins>**maximum 3-line long</ins>**(no documentation needed)
  * You are not allowed to <ins>**import any module**</ins>

```js
guillaume@ubuntu:~/0x09$ cat 19-main.py
#!/usr/bin/python3
copy_list = __import__('19-copy_list').copy_list

my_list = [1, 2, 3]
print(my_list)

new_list = copy_list(my_list)

print(my_list)
print(new_list)

print(new_list == my_list)
print(new_list is my_list)

guillaume@ubuntu:~/0x09$ ./19-main.py
[1, 2, 3]
[1, 2, 3]
[1, 2, 3]
True
False
guillaume@ubuntu:~/0x09$ wc -l 19-copy_list.py 
3 19-copy_list.py
guillaume@ubuntu:~/0x09$ 
```

> [!NOTE]
> **No test cases needed.**

##

## **No. 20. Tuple or not?**:heavy_check_mark:
* **File:**
  * [**20-answer.txt**](./20-answer.txt)
###

```js
a = ()
```

* Is <ins>**a**</ins> a tuple? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

##

## **No. 21. Tuple or not?**:heavy_check_mark:
* **File:**
  * [**21-answer.txt**](./21-answer.txt)
###

```js
a = (1, 2)
```

* Is <ins>**a**</ins> a tuple? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

##

## **No. 22. Tuple or not?**:heavy_check_mark:
* **File:**
  * [**22-answer.txt**](./22-answer.txt)
###

```js
a = (1)
```

* Is <ins>**a**</ins> a tuple? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

##

## **No. 23. Tuple or not?**:heavy_check_mark:
* **File:**
  * [**23-answer.txt**](./23-answer.txt)
###

```js
a = (1, )
```

* Is <ins>**a**</ins> a tuple? Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

##

## **No. 24. Who I am?**:heavy_check_mark:
* **File:**
  * [**24-answer.txt**](./24-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
a = (1)
b = (1)
a is b
```

##

## **No. 25. Tuple or not**:heavy_check_mark:
* **File:**
  * [**25-answer.txt**](./25-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
a = (1, 2)
b = (1, 2)
a is b
```

##

## **No. 26. Empty is not empty**:heavy_check_mark:
* **File:**
  * [**26-answer.txt**](./26-answer.txt)
###
* What does this <ins>**script print</ins>?**

```js
a = ()
b = ()
a is b
```

##

## **No. 27. Still the same?**:heavy_check_mark:
* **File:**
  * [**27-answer.txt**](./27-answer.txt)
###

```js
>>> id(a)
139926795932424
>>> a
[1, 2, 3, 4]
>>> a = a + [5]
>>> id(a)
```

* Will the <ins>**last line of this script</ins>** print <ins>**139926795932424</ins>?** Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

##

## **No. 28. Same or not?**:heavy_check_mark:
* **File:**
  * [**28-answer.txt**](./28-answer.txt)
###

```js
>>> a
[1, 2, 3]
>>> id (a)
139926795932424
>>> a += [4]
>>> id(a)
```

* Will the <ins>**last line of this script</ins>** print <ins>**139926795932424</ins>?** Answer with <ins>**Yes**</ins> or <ins>**No**</ins>.

#

<h1 align="center"> ADVANCED_TASKS (From Task 29 to 34):cd:</h1>

## **No. 29. #pythonic**:heavy_check_mark:
* **File:**
  * [**100-magic_string.py**](./100-magic_string.py)
###
* Write a **function ** <ins>**magic_string()</ins>** that returns a  **string** <ins>**“BestSchool” n times</ins>**  the number of the iteration (see code):
  * **Format:** <ins>**see example</ins>**
  * Your file should be <ins>**maximum 4-line long</ins>**(no documentation needed)
  * You are not allowed to <ins>**import any module**</ins>

```js
guillaume@ubuntu:~/0x09$ cat 100-main.py
#!/usr/bin/python3
magic_string = __import__('100-magic_string').magic_string

for i in range(10):
    print(magic_string())

guillaume@ubuntu:~/0x09$ ./100-main.py | cat -e
BestSchool$
BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
guillaume@ubuntu:~/0x09$ wc -l 100-magic_string.py 
4 100-magic_string.py
guillaume@ubuntu:~/0x09$ 
```

> [!NOTE]
> **No test cases needed.**

##

## **No. 30. Low memory cost**:heavy_check_mark:
* **File:**
  * [**101-locked_class.py**](./101-locked_class.py)
###
* Write a **class** <ins>**LockedClass</ins>** with **no class or object attribute,** that prevents the **user from dynamically** creating new **instance attributes**, **except** if the **new instance attribute is called** **first_name**.
  * You are not allowed to <ins>**import any module**</ins>

```js
guillaume@ubuntu:~/0x09$ cat 101-main.py
#!/usr/bin/python3
LockedClass = __import__('101-locked_class').LockedClass

lc = LockedClass()
lc.first_name = "John"
try:
    lc.last_name = "Snow"
except Exception as e:
    print("[{}] {}".format(e.__class__.__name__, e))

guillaume@ubuntu:~/0x09$ ./101-main.py
[AttributeError] 'LockedClass' object has no attribute 'last_name'
guillaume@ubuntu:~/0x09$ 
```

> [!NOTE]
> **No test cases needed.**

##

## **No. 31. int 1/3**:heavy_check_mark:
* **File:**
  * [**103-line1.txt**](./103-line1.txt)
  * [**103-line2.txt**](./103-line2.txt)
###

```js
julien@ubuntu:/python3$ cat int.py 
a = 1
b = 1
julien@ubuntu:/python3$ 
```

* Assuming we are using a <ins>**CPython implementation of Python3</ins>** with **default options/configuration:** 
  * How many **int objects** are **created by the execution** of the **<ins>first line of the script**</ins>? (**<ins>103-line1.txt**</ins>)
  * How many **int objects** are **created by the execution** of the **<ins>second line of the script**</ins>? (**<ins>103-line2.txt**</ins>)

##

## **No. 32. int 2/3**:heavy_check_mark:
* **File:**
  * [**104-line1.txt**](./104-line1.txt)
  * [**104-line2.txt**](./104-line2.txt)
  * [**104-line3.txt**](./104-line3.txt)
  * [**104-line4.txt**](./104-line4.txt)
  * [**104-line5.txt**](./104-line5.txt)
###

```js
julien@ubuntu:/python3$ cat int.py 
a = 1024
b = 1024
del a
del b
c = 1024
julien@ubuntu:/python3$ 
```

* Assuming we are using a <ins>**CPython implementation of Python3</ins>** with **default options/configuration:** 
  * How many **int objects** are **created by the execution** of the **<ins>first line of the script**</ins>? (**<ins>104-line1.txt**</ins>)
  * How many **int objects** are **created by the execution** of the **<ins>second line of the script**</ins>? (**<ins>104-line2.txt**</ins>)
  * After the **execution of line 3,** is the **int object pointed by** **<ins>a**</ins> deleted? Answer with **<ins>Yes**</ins> or **<ins>No**</ins> (**<ins>104-line3.txt**</ins>)
  * After the **execution of line 4,** is the **int object pointed by** **<ins>b**</ins> deleted? Answer with **<ins>Yes**</ins> or **<ins>No**</ins> (**<ins>104-line4.txt**</ins>)
  * How many **int objects** are **created by the execution** of the **<ins>last line of the script**</ins>? (**<ins>104-line5.txt**</ins>)

##

## **No. 33. int 3/3**:heavy_check_mark:
* **File:**
  * [**105-line1.txt**](./105-line1.txt)
###

```js
julien@twix:/tmp/so$ cat int.py 
print("I")
print("Love")
print("Python")
julien@ubuntu:/tmp/so$ 
```

* Assuming we are using a <ins>**CPython implementation of Python3</ins>** with **default options/configuration:** 
  * Before the **execution of line 2** **<ins>(print("Love"))**</ins>, how many **int objects** have been **and are still in memory**? (**<ins>105-line1.txt**</ins>)
  * **Why?**(optional blog post :))
###
* **Hint:** **<ins>NSMALLPOSINTS**</ins> , **<ins>NSMALLNEGINTS**</ins>

<p align="center">
  <img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/70f9ea0e969dfcc407a7427aba4786d87a920494.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240105T165451Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4de537f906f2002241ec6d1180827708328d5a13d9759f31c8014430f5df90ee" />
</p>

##

## **No. 34. Clear strings**:heavy_check_mark:
* **File:**
  * [**106-line1.txt**](./106-line1.txt)
  * [**106-line2.txt**](./106-line2.txt)
  * [**106-line3.txt**](./106-line3.txt)
  * [**106-line4.txt**](./106-line4.txt)
  * [**106-line5.txt**](./106-line5.txt)
###

```js
guillaume@ubuntu:/python3$ cat string.py 
a = "SCHL"
b = "SCHL"
del a
del b
c = "SCHL"
guillaume@ubuntu:/python3$ 
```

* Assuming we are using a <ins>**CPython implementation of Python3</ins>** with **default options/configuration:**(For answers with numbers use integers, don’t spell out the word):
  * How many **string objects** are **created by the execution** of the **<ins>first line of the script**</ins>? (**<ins>106-line1.txt**</ins>)
  * How many **string objects** are **created by the execution** of the **<ins>second line of the script**</ins>? (**<ins>106-line2.txt**</ins>)
  * After the **execution of line 3,** is the **string pointed by** **<ins>a**</ins> deleted? Answer with **<ins>Yes**</ins> or **<ins>No**</ins> (**<ins>106-line3.txt**</ins>)
  * After the **execution of line 4,** is the **string pointed by** **<ins>b**</ins> deleted? Answer with **<ins>Yes**</ins> or **<ins>No**</ins> (**<ins>106-line4.txt**</ins>)
  * How many **string objects** are **created by the execution** of the **<ins>last line of the script**</ins>? (**<ins>106-line5.txt**</ins>)

#
