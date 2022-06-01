
export default class OutputAccount {

    constructor() {}

    firstNameGet() {
        return `${sessionStorage.getItem('#register-first-name')}`;
    }

    lastNameGet() {
        return `${sessionStorage.getItem('#register-last-name')}`;
    }

    passwordGet() {
        return `${sessionStorage.getItem('#register-password')}`;
    }

    confirmPasswordGet() {
        return `${sessionStorage.getItem('#register-confirm-password')}`;
    }

    dateGet() {
        return `${sessionStorage.getItem('#register-date')}`;
    }

    emailGet() {
        return `${sessionStorage.getItem('#register-email')}`;
    }

    sexGet() {
        return `${sessionStorage.getItem('#register-radio-sex')}`;
    }

    checkboxAgreeGet() {
        return `${sessionStorage.getItem('#register-checkbox-agree')}`;
    }

    rememberPasswordGet() {
        return `${sessionStorage.getItem('#login-remember-password')}`;
    }

    loginedGet() {
        return `${sessionStorage.getItem('#login-logined')}`;
    }
}