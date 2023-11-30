#!/usr/bin/python3
# Author - Bereket Dereje

def magic_calculation(a, b):
    """Same as the given Python bytecode."""
    from magic_calculation_102 import add, sub
    if a < b:
        c = add(a, b)
        for i in range(4, 6):
            c = add(c, i)
        return (c)
    else:
        return (sub(a, b))
