#!/usr/bin/python3
# Author - Bereket Dereje

def safe_print_list(my_list=[], x=0):
    """Print x elememts of a list.

    Args:
        my_list (list): The list to print elements from.
                      : can contain any type (integer, string, etc.)
        x (int): The number of elements to print.

    Returns:
        The real number of elements printed.
    """
    n = 0
    for m in range(x):
        try:
            print("{}".format(my_list[m]), end="")
            n += 1
        except IndexError:
            break
    print("")
    return (n)
