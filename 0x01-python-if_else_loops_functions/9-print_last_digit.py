#!/usr/bin/python3
# Author - Bereket Dereje

def print_last_digit(number):
    """prints the last digit of a number"""
    print(abs(number) % 10, end="")
    return (abs(number) % 10)
