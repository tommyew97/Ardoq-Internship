def product_of_three_largest_numbers(numbers):
    numbers.sort()
    three_largest = numbers[-3:]
    sum = three_largest[0]
    for i in range(1, len(three_largest)):
        sum *= three_largest[i]
    return sum

def product_of_three_largest_numbers2(numbers):
    numbers.sort()
    return numbers[-3]*numbers[-2]*numbers[-1]

def product_of_three_larges_numbers3(numbers):
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

def product_of_three_largest_numbers4(numbers):
    result = max(numbers)
    numbers.remove(result)
    for i in range(2):
        largest = max(numbers)
        result *= largest
        numbers.remove(largest)
    return result
