// If Else
var password = "1234567"

if password == "123456" {
    print("Password is correct.")
} else if password == "123"{
    print("Passwor is not strong enough.")
} else {
    print("Password is not correct")
}

// Switch Case
switch password {
case "123":
    print("Password is too weak.")
case "123456":
    print("Password is strong enough.")
default:
    print("Password does not match.")
}

// Enum
enum PasswordOption {
    case weak
    case correct
    case doesNotMatch
}

var passwordTwo: PasswordOption = .correct

switch passwordTwo {
case .weak:
    print("Password is too weak.")
case .correct:
    print("Password is strong enough.")
case .doesNotMatch:
    print("Password does not match.")
}
