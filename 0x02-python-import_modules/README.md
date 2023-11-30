<H1 align="center", height="1500"> <ins> README.md File </ins> </H1>
<H1> <ins> 0x02. Python - import & modules</ins> </H1>

![Beki Habesha.]( https://i.ibb.co/wrSyjQY/0x02-Python-import-modules-ALX-Logo.png)

##
* **File_name:** <ins>**README.md file**</ins>
* **Created:** <ins>**On November 30, 2023**</ins>
* **Author:** <ins>***Bereket Dereje Mekkonen***</ins>
* **Project:** <ins>**0x02. Python - import & modules**</ins>
* **GitHub repository:** <ins>**alx-higher_level_programming**</ins>
* **Directory:** <ins>**0x02-python-import_modules**</ins>
* **Project Tasks:** <ins>**Mandatory and Advanced**</ins>
* **Tasks in number:** <ins>**10 Tasks (6-Mandatory & 4-Advanced)**</ins>
* **Mandatory_Tasks:** <ins>**From Task 0 to 5**</ins>
* **Advanced_Tasks:** <ins>**From Task 6 to 9**</ins>

###   
                     
![Alx.]( https://i.ibb.co/ZV48Drd/Alx-next-generation.png)

##

### **PROJECT_TITLE:**
<h2 align="center"> <ins>0x02. Python - import & modules</ins> </h2>

### **GITHUB_REPOSITORY:**
<h2 align="center"> <ins>alx-higher_level_programming</ins> </h2>

### **DIRECTORY:**
<h2 align="center"> <ins>0x02-python-import_modules</ins> </h2>

###

![Alx.]( https://miro.medium.com/v2/resize:fit:720/format:webp/1*CgTC2l33OuUnXDca64UlyA.jpeg)

<h1> <ins>Resources</ins>:floppy_disk:</H1>

### **Read or watch:**:heavy_check_mark:
* [Modules](https://intranet.alxswe.com/rltoken/SY-cMfnwbHoPFaJ-D_LWig)
* [Command line arguments](https://intranet.alxswe.com/rltoken/5e3TphtJ6WSVkWsdd2eX_A)
* [Pycodestyle – Style Guide for Python Code](https://intranet.alxswe.com/rltoken/FlkAJ_kPXHC4Y65WrRvA4A)
###

#### **man or help:**:heavy_check_mark:
* **<ins>python3</ins>**<br>
  
![Beki.]( https://image.slidesharecdn.com/lecture1-231007164309-d0e8dca1/85/lecture-1pptx-6-320.jpg?cb=1696697395)

###

<H1><ins>Learning Objectives</ins>:floppy_disk:</H1>

* At the end of this project, You are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/wwTE_cGg7Ug-Vp3IQ6tmXA), **Without the help of Google:**

###

<H2> <ins>General Learning Objectives</ins>:cd::heavy_check_mark:</H2>

* **Why <ins>Python programming</ins> is awesome.**
* **How to <ins>import functions from another file</ins>.**
* **How to use <ins>imported functions</ins>.**
* **How to <ins>create a module</ins>.**
* **How to use the <ins>built-in function dir()</ins>.**
* **How to <ins>prevent code in your script</ins> from being <ins>executed when imported</ins>.**
* **How to use <ins>command line arguments</ins> with your <ins>Python programs</ins>.**

![Alx.]( https://i.ibb.co/Dr7zQyb/alx-do-hard-things.png)

###
<H2> <ins>Copyright - Plagiarism</ins>:cd::heavy_check_mark:</H2>

* You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
* You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
* You are not allowed to publish any content of this project.
* Any form of plagiarism is strictly forbidden and will result in removal from the program.

![My alx. ]( https://i.ibb.co/F3yxSVj/alx-do-better-edited.png)

##

<H1 align="center"> <ins>Requirements</ins>:floppy_disk:</H1>

<H2><ins>General Requirements</ins> :heavy_check_mark:</H2>

* Allowed editors: <ins>**vi**</ins>, <ins>**vim**</ins>, <ins>**emacs**</ins>.
* All your files will be **interpreted/compiled** on <ins>**Ubuntu 20.04 LTS**</ins> Using <ins>**python3**</ins> (version 3.8.5)
* All your files should **end with a new line**
* The first line of all your files should be exactly <ins>**#!/usr/bin/python3**</ins>
* A <ins>**README.md file**</ins>, at the root of the folder of the project is mandatory.
* Your code should use the **pycodestyle** (version 2.8.*). 
* All **your files** must be **executable**.
* The length of your files will be tested using **wc**.

![My alx. ]( https://bairesdev.mo.cloudinary.net/blog/2023/06/Is-Python-good-for-software-development.jpg?tx=w_1080,q_auto)

##

<H1 align="center"> <ins> PROJECT TASKS (Mandatory and Advanced)</ins>:floppy_disk:</H1>

<H1 align="center">MANDATORY_TASKS (From Task 0 to 5):cd:</h1>

# No. 0. Import a simple function from a simple file 
  * 0-add.py
   * Write a program that imports the function def add(a, b): from the file add_0.py and prints the result of the addition 1 + 2 = 3.
     * You have to use print function with string format to display integers.
     * You have to assign:
       * the value 1 to a variable called a.
       * the value 2 to a variable called b.
       * and use those two variables as arguments when calling the functions add and print.
     * a and b must be defined in 2 different lines: a = 1 and another b = 2.
     * Your program should print: <a value> + <b value> = <add(a, b) value> followed with a new line.
     * You can only use the word add_0 once in your code.
     * You are not allowed to use * for importing or __import__.
     * Your code should not be executed when imported - by using __import__.
#


# No. 1. My first toolbox!
  * 1-calculation.py
   * Write a program that imports functions from the file calculator_1.py, does some Maths, and prints the result.
     * Do not use the function print (with string format to display integers) more than 4 times.
     * You have to define:
       * the value 10 to a variable a
       * the value 5 to a variable b
       * and use those two variables only, as arguments when calling functions (including print).
     * a and b must be defined in 2 different lines: a = 10 and another b = 5
     * Your program should call each of the imported functions.
     * the word calculator_1 should be used only once in your file
     * You are not allowed to use * for importing or __import__
     * Your code should not be executed when imported
#


# No. 2. How to make a script dynamic!
  * 2-args.py
   * Write a program that prints the number of and the list of its arguments.
     * The output should be:
       * Number of argument(s) followed by argument (if number is one) or arguments (otherwise), followed by
       * : (or . if no arguments were passed) followed by
       * a new line, followed by (if at least one argument),
       * one line per argument:
         * the position of the argument (starting at 1) followed by :, followed by the argument value and a new line
     * Your code should not be executed when imported
     * The number of elements of argv can be retrieved by using: len(argv).
     * You do not have to fully understand lists yet, but imagine that argv can be used just like a C array: you can use an index to walk through it
#


# No. 3. Infinite addition
  * 3-infinite_add.py
    * Write a program that prints the result of the addition of all arguments.
      * The output should be the result of the addition of all arguments, followed by a new line
      * You can cast arguments into integers by using int() (you can assume that all arguments can be casted into integers)
      * Your code should not be executed when imported
#


# No. 4. Who are you?
  * 4-hidden_discovery.py
    * Write a program that prints all the names defined by the compiled module hidden_4.pyc (please download it locally).
      * You should print one name per line, in alpha order
      * You should print only names that do not start with __
      * Your code should not be executed when imported
      * Make sure you are running your code in Python3.8.x (hidden_4.pyc has been compiled with this version)
#


# No. 5. Everything can be imported
  * 5-variable_load.py
    * Write a program that imports the variable a from the file variable_load_5.py and prints its value.
      * You are not allowed to use * for importing or __import__
      * Your code should not be executed when imported

#

<h1 align="center"> ADVANCED_TASKS (From Task 6 to 9):cd:</h1>

# No. 6. Build my own calculator!
  * 100-my_calculator.py
    * Write a program that imports all functions from the file calculator_1.py and handles basic operations.
      * Usage: ./100-my_calculator.py a operator b
        * If the number of arguments is not 3, your program has to:
          * print Usage: ./100-my_calculator.py <a> <operator> <b> followed with a new line
          * exit with the value 1
        * operator can be:
          * + for addition
          * - for subtraction
          * * for multiplication
          * / for division
        * If the operator is not one of the above:
          * print Unknown operator. Available operators: +, -, * and / followed with a new line
          * exit with the value 1
        * You can cast a and b into integers by using int() (you can assume that all arguments will be castable into integers)
        * The result should be printed like this: <a> <operator> <b> = <result>, followed by a new line
      * You are not allowed to use * for importing or __import__
      * Your code should not be executed when imported
#


# No. 7. Easy print
  * 101-easy_print.py
    * Write a program that prints #pythoniscool, followed by a new line, in the standard output.
      * Your program should be maximum 2 lines long
      * You are not allowed to use print or eval or open or import sys in your file 101-easy_print.py
#


# No. 8. ByteCode -> Python #3
  * 102-magic_calculation.py
    * Write the Python function def magic_calculation(a, b): that does exactly the same as the following Python bytecode:
      * Tip: Python bytecode
#


# No. 9. Fast alphabet
  * 103-fast_alphabet.py
    * Write a program that prints the alphabet in uppercase, followed by a new line.
      * Your program should be maximum 3 lines long
      * You are not allowed to use:
        * any loops
        * any conditional statements
        * str.join()
        * any string literal
        * any any system calls
#
