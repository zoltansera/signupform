import { Field } from "./Field.js";

class UserName extends Field {
    constructor(element, labelTxt) {
        super(element, labelTxt);
        this.element.addEventListener("keyup", (e) => {
            setTimeout(() => this.validateField(), 800);
        });
    }

    validateField() {
        let regex = /\s/;
        this.setValidationState(
            this.element.value.length > 5 &&
                this.element.value.match(regex) == null
        );
    }
}

export { UserName };
