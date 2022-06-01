
export default class Account {

    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.password = null;
        this.confirmPassword = null;
        this.email = null;
        this.date = null;
        this.checkboxAgree = null;
        this.sex = null;
        this.rememberPassword = false
        this.logined = false;
    }

    registerAcc(event) {
        
        var formInvalid = false;

        $('#register-form-input input').each(function() {
            if ($(this).val() === '') 
                formInvalid = true;
        });

        if ($('#register-password').val() != $('#register-confirm-password').val()) {
            formInvalid = true;
            alert('Passwords do not match');
        }
        
        if (document.querySelector('#register-checkbox-agree').checked == false) {
            formInvalid = true;
            alert('You need to accept the data processing agreement');
        }
        
        if (formInvalid == false) {

            // event.preventDefault();

            this.rememberPassword = false
            this.logined = false;
            sessionStorage.setItem("#login-remember-password", this.rememberPassword);
            sessionStorage.setItem("#login-logined", this.logined);

            this.firstName = $('#register-first-name').val();
            this.lastName = $('#register-last-name').val();
            this.password = $('#register-password').val();
            this.confirmPassword = $('#register-confirm-password').val();
            this.email = $('#register-email').val();
            this.date = $('#register-date').val();
            this.checkboxAgree = $('#register-checkbox-agree').val();
    
            var radioMale = document.querySelector('#register-radio-male');
            var radioFemale = document.querySelector('#register-radio-female');
    
            if (radioMale.checked == true)
                this.sex = radioMale.value;
            else
                this.sex = radioFemale.value;

            sessionStorage.setItem("#register-first-name", this.firstName)
            sessionStorage.setItem("#register-last-name", this.lastName)
            sessionStorage.setItem("#register-password", this.password)
            sessionStorage.setItem("#register-confirm-password", this.confirmPassword)
            sessionStorage.setItem("#register-email", this.email)
            sessionStorage.setItem("#register-date", this.date)
            sessionStorage.setItem("#register-checkbox-agree", this.checkboxAgree)
            sessionStorage.setItem("#register-radio-sex", this.sex)

            alert("Your information is saved");

            event.preventDefault();

            // document.body.innerHTML = `Your information is saved`;

            document.location.href = "http://127.0.0.1:5500/src/login.html";
        }
    }

    loginAcc(event) {

        var loginInvalid = false;

        if ($('#login-email').val() != sessionStorage.getItem("#register-email")) {
            loginInvalid = true;
            alert('Login do not match');
        }

        if ($('#login-password').val() != sessionStorage.getItem("#register-password")) {
            loginInvalid = true;
            alert('Password do not match');
        }
        
        if (document.querySelector('#login-checkbox-remember').checked == false)
            this.rememberPassword = false;
        else
            this.rememberPassword = true;

        if (loginInvalid == false) {
            // event.preventDefault();
            this.logined = true;

            sessionStorage.setItem("#login-remember-password", this.rememberPassword);
            sessionStorage.setItem("#login-logined", this.logined);

            alert("Successfully logined");

            // document.body.innerHTML = `Successfully logined`;

            event.preventDefault();

            document.location.href = "http://127.0.0.1:5500/src/profile.html";
        }
    }
}