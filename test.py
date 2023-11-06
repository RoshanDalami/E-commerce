

user_data = []

special_char = ['!','@','#','$','*','&','%','(',')']

while True:
    full_name = input("Enter the full name of the customer: ")

    contact_number = input("Enter the contact number of the customer: ")
    if len(contact_number) == 10 and contact_number.startswith('0'):
        print("Mobile number is valid: ", contact_number)
    else:
        print("Invalid mobile number. It should be 10 digits and start with '0'. Please try again.")
        continue

    password = input("Enter the password of the user: ")

    has_alphabet = False
    has_digit_or_special = False

    for char in password:
        if char.isalpha():
            has_alphabet = True
        elif char.isdigit() or not char.isalnum():
            has_digit_or_special = True
        
    if has_alphabet and has_digit_or_special:
        print("Password is valid: ", password)
    else:
        print("Password is not valid. It should contain at least one letter and one digit or special character. Please try again.")
        continue

    password_confirmation = input("Re-enter the password for confirmation: ")
    if password == password_confirmation:
        print("Confirmation of password: ", password_confirmation)
    else:
        print("Passwords do not match. Please try again.")
        continue

    age = int(input("Enter the year of birth of the customer in YYYY: "))
    current_year = 2023
    current_age = current_year - age
    if current_age >= 18:
        print("The age of the user: ", current_age)
    else:
        print("User must be at least 18 years old. Please try again.")
        continue

    user_data.append({
        "full_name": full_name,
        "contact_number": contact_number,
        "password": password,
        "age": age
    })

    print("Signup process completed successfully.")
    break
