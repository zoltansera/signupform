class Field {
    element;
    label;
    isValid; //true=valid

    constructor(element, labelTxt) {
        this.element = document.getElementById(element);
        this.isValid = undefined;
        this.initErrLabel(labelTxt);
    }

    initErrLabel(msg) {
        this.label = document.createElement("label");
        this.label.className = "error_msg";
        this.label.style = "height: 0;";
        this.label.setAttribute("for", this.element.id);
        this.label.innerHTML = msg;
        this.element.parentNode.insertBefore(
            this.label,
            this.element.nextSibling
        );
    }

    getId() {
        return this.element.id;
    }

    getValidationState() {
        if (this.isValid != undefined) {
            return this.isValid;
        } else return false;
    }

    setTouched() {
        this.isValid = false;
    }

    addStyle(className) {
        this.element.classList.add(className);
    }

    delStyle(className) {
        this.element.classList.remove(className);
    }

    switchStyle() {
        if (this.isValid) {
            this.delStyle("input_error");
            this.addStyle("input_valid");
            this.label.style = "height: 0px;opacity: 0";
        } else {
            this.delStyle("input_valid");
            this.addStyle("input_error");
            this.label.style = "height: 4em;opacity: 1";
        }
    }

    setValidationState(setTo) {
        console.log(setTo);
        this.isValid = setTo;
        this.switchStyle();
    }
}

export { Field };
