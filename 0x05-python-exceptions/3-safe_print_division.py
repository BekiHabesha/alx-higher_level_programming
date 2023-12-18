#!/usr/bin/python3
# Author - Bereket Dereje

def safe_print_division(a, b):
    """Divides 2 integers and prints the result.

    Returns:
        The value of the division of a by b.
        otherwise: None
    """
    try:
        div = a / b
    except(TypeError, ZeroDivisionError):
        div = None
    finally:
        print("Inside result: {}".format(div))
    return (div)
