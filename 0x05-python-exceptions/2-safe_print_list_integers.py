#!/usr/bin/python3
# Author - Bereket Dereje

def safe_print_list_integers(my_list=[], x=0):
    """Print the first x elements of a list that are only integers.

    Args:
        my_list (list): The list to print elements from.
                      : can contain any type (integer, string, etc.)
        x (int): The number of elements to access in my_list to print.

    Returns:
        The number of elements printed.
    """
    n = 0
    for i in range(0, x):
        try:
            print("{:d}".format(my_list[i]), end="")
            n += 1
        except (ValueError, TypeError):
            continue
    print("")
    return (n)
