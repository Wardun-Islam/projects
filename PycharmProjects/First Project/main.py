import re

result = None
currentInput = None
operation_sign = None
finish = False
second = False


def print_cuttent_result():
    global result
    print("Current Result: " + str(result))


def get_number_input():
    global result
    global second
    global currentInput
    global operation_sign
    global finish
    if result == None and second == False:
        currentInput = input('Enter number:')
        if currentInput == 'quit':
            print_cuttent_result()
            finish = True
            return
        operation_sign = input('Enter operation sign:')
        if operation_sign == 'quit':
            print_cuttent_result()
            finish = True
            return
        second = True
        get_number_input()

    elif result == None and second == True:
        result = float(currentInput)
        currentInput = input('Enter number:')
        if currentInput == 'quit':
            print_cuttent_result()
            finish = True
            return
        mathmetical_operation()

    else:
        print_cuttent_result()
        operation_sign = input('Enter operation sign:')
        if operation_sign == 'quit':
            print_cuttent_result()
            finish = True
            return
        currentInput = input('Enter number:')
        if currentInput == 'quit':
            print_cuttent_result()
            finish = True
            return
        mathmetical_operation()


def mathmetical_operation():
    global currentInput
    global operation_sign
    global result
    global second
    global finish
    if (currentInput) != None:
        if operation_sign != None:
            if operation_sign == '+':
                if result != None:
                    result = result + float(currentInput);
                    get_number_input()
                else:
                    result = 0;
                    result = result + float(currentInput);
                    get_number_input()
            elif operation_sign == '-':
                if result != None:
                    result = result - float(currentInput);
                    get_number_input()
                else:
                    result = 0;
                    result = result - float(currentInput);
                    get_number_input()
            elif operation_sign == '*':
                if result != None:
                    result = result * float(currentInput);
                    get_number_input()
                else:
                    result = 1;
                    result = result * float(currentInput);
                    get_number_input()
            elif operation_sign == '/':
                if result != None:
                    if currentInput == 0:
                        print('Undefined Operation: 0 cannot be divisor')
                        get_number_input()
                    else:
                        result = result / float(currentInput);
                        get_number_input()
                else:
                    result = 1;
                    result = result / float(currentInput);
                    get_number_input()
            elif operation_sign == '%':
                if result != None:
                    if currentInput == 0:
                        print('Undefined Operation: 0 cannot be divisor')
                        get_number_input()
                    else:
                        result = result % float(currentInput);
                        get_number_input()
                else:
                    result = 1;
                    result = result % float(currentInput);
                    get_number_input()
            elif operation_sign == '=':
                second = False
                currentInput = None
                result = None
                operation_sign = None
                get_number_input()
            else:
                print('Wrong sign')
                get_number_input()


while finish is not True:
    get_number_input()
