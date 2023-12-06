#!/usr/bin/python3
# Author - Bereket Dereje

def uniq_add(my_list=[]):
    add = 0

    for i in set(my_list):
        add += i

    return add
