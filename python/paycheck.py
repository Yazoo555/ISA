print("Please Select your choices")
print("1. Print Paycheck")
print("2. Change Benefits")
print("3. Exit")

while True:
    choice = input("Enter your choice: ")

    if choice == "1":
        paycheck = int(input("Enter your paycheck: "))
        print(f"Printing paycheck... Rs.{paycheck}")  
    elif choice == "2":
        print("Changing Benefits...")
    elif choice == "3":
        print("Exiting from the Program")
        break
    else:
        print("Invalid choice")

