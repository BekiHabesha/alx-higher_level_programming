#!/usr/bin/python3
# Author - Bereket Dereje

def safe_print_integer(value):
    """Print as integer with "{:d}".format().

    Args:
        value (int): The integer to print.
                   : can be any type (integer, string, etc.)

    Returns:
        If value has been correctly printed - True.
        Otherwise - False. and
        If a TypeError or ValueError occurs - False.
    """
    try:
        print("{:d}".format(value))
        return (True)
    except (TypeError, ValueError):
        return (False)
