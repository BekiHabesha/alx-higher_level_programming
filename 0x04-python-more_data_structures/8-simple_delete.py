#!/usr/bin/python3
# Author - Bereket Dereje

def simple_delete(my_dict, key=""):
    if key in my_dict:
        del my_dict[key]
    return my_dict
