let user = "Enrolled Member";
let message;

switch (user){
    case "Employee":
        message = "You may access Dietary Services";
        break;
    case "Enrolled Member":
        message = "You may access Dietary Services and one-on-one consultations with a dietitian.";
        break;
    case "Subscriber":
        message = "You may access facilitation to Dietary Services."
        break;
    default:
        message = "You are not subscribed. You must enroll or subscribe to access this facility."
}

console.log(message);