minHeight = 120
height = input("Enter the height\n")

if height.isdigit():
    height = float(height)
    if height>minHeight:
        print("Explore to the ride\n")
        
    else:
        print("Explore another game\n")
else:
 print("Enter a valid height\n")