sum = 0
while True:
    num = int(input("Enter a positive number: "))
    
    if num == 0:
        break
    elif num < 0:
        print("Invalid input")
        continue
    elif num % 2 == 0:
        print("Skipping even number")
        continue
    else:
        sum += num
    
    print(f"The correct sum so far is {sum}")

print(f"The final sum is {sum}")

