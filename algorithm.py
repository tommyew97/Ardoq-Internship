# Algorithms for finding the product of the three largest numbers in a list.
# Two solutions, one using the .sort()-function and one which doesn't use this function.

def product_of_three_largest_numbers(numbers):
    numbers.sort()
    return numbers[-3]*numbers[-2]*numbers[-1]

def product_of_three_largest_numbers2(numbers):
    largest = find_largest_in_list(numbers)
    numbers.remove(largest)
    next_largest = find_largest_in_list(numbers)
    numbers.remove(next_largest)
    next_next_largest = find_largest_in_list(numbers)
    return largest*next_largest*next_next_largest

def find_largest_in_list(numbers):
    largest = numbers[0]
    for el in numbers:
        if el > largest:
            largest = el
    return largest
