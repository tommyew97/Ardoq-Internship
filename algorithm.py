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
    largest = numbers[0]
    for el in numbers:
        if el > largest:
            largest = el
    numbers.remove(largest)
    next_largest = numbers[0]
    for el in numbers:
        if el > next_largest:
            next_largest = el
    numbers.remove(next_largest)
    next_next_largest = numbers[0]
    for el in numbers:
        if el > next_next_largest:
            next_next_largest = el
    return largest*next_largest*next_next_largest
