
character = input("Enter a character: ")

character = character.lower()

if len(character) == 1 and character.isalpha():
    if character in "aeiou":
        print(f"{character} is a vowel.")
    else:
        print(f"{character} is a consonant.")
else:
    print("Please enter a single alphabet character.")