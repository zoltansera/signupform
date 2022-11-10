import { UserName } from "./classes/UserName.js";
import { Email } from "./classes/Email.js";
import { Password } from "./classes/Password.js";

var uname;
var email;
var passw;

$(document).ready(function () {
    uname = new UserName(
        "uname",
        "User name must be at least 6 characters, no whitespace allowed."
    );

    email = new Email("email", "Please provide a valid email address.");

    passw = new Password(
        "passw",
        "Password rules: at least 8 characters, must contain a special character, no whitespace allowed."
    );
});

function validate() {
    let result = true;
    result &= uname.getValidationState();
    result &= email.getValidationState();
    result &= passw.getValidationState();
    alert(result ? "ACCEPTED" : "NOT ACCEPTED");
}

export { validate };
