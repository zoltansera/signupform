import { Field } from "./Field.js";

class Password extends Field {
    constructor(element, labelTxt) {
        super(element, labelTxt);
        this.element.addEventListener("keyup", (e) => {
            setTimeout(() => this.validateField(), 800);
        });
    }

    validateField() {
        let regex =
            /(\S*[!?-_=()\\\/.,:;\*'"+%~@&$ß¤×÷€|^ˇ˘°˛`˙´˝¨¸Łł\[\]đĐ{}#<>]+\S*)/;
        let nowsregex = /\s/;
        this.setValidationState(
            this.element.value.length >= 8 &&
                this.element.value.match(regex) != null &&
                this.element.value.match(nowsregex) == null
        );
    }
}

export { Password };
