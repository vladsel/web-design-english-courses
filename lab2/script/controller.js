
export default class Controller {

    constructor(outProfile, inputAcc, modeModel, outMode) {
        this.outProfile = outProfile;
        this.inputAcc = inputAcc;
        this.modeModel = modeModel;
        this.outMode = outMode;

        if ($('#register-sign-up').val() != null)
            document.querySelector('#register-sign-up').addEventListener('click', (event) => this.inputAcc.registerAcc(event));

        if ($('#login-sign-in').val() != null)
            document.querySelector('#login-sign-in').addEventListener('click', (event) => this.inputAcc.loginAcc(event));

        if ($('#profile-table').val() != null) {
            if (this.outProfile.loginedGet() == "true")
                this.printTable();
            else
                alert("You need to login to see the profile information");
        }

        if ($('#study-table').val() != null) {
            if (sessionStorage.getItem("init-words-flag") != "true")
                this.modeModel.initWords();
            if (sessionStorage.getItem("init-board-flag") != "true")
                this.modeModel.initBoard();
            this.printStudyBoard();
            if ($('#study-next').val() != null) {
                if (this.outProfile.loginedGet() == "true")
                    document.querySelector('#study-next').addEventListener('click', 
                        (event) => document.location.href = "http://127.0.0.1:5500/src/control.html");
                else
                    document.querySelector('#study-next').addEventListener('click', 
                        (event) => alert("You need to login to test knowledge"));
            }
        }

        if ($('#control-form').val() != null) {
            if (sessionStorage.getItem("init-words-flag") != "true")
                this.modeModel.initWords();
            if (sessionStorage.getItem("init-board-flag") != "true")
                this.modeModel.initBoard();
            this.printControlBoard();

            if ($('#control-next').val() != null) {
                if (this.outProfile.loginedGet() == "true")
                    document.querySelector('#control-next').addEventListener('click', 
                        (event) => modeModel.checkWords(event));
                else {
                    alert("You need to login to test knowledge");
                    document.location.href = "http://127.0.0.1:5500/src/login.html";
                }
            }
        }
    }

    firstNameToHTML() {
        if (this.outProfile.firstNameGet() != "null")
            document.querySelector('#profile-first-name').innerHTML = this.outProfile.firstNameGet();
        else
            document.querySelector('#profile-first-name').innerHTML = `unknown first name`;
    }

    lastNameToHTML() {
        if (this.outProfile.lastNameGet() != "null")
            document.querySelector('#profile-last-name').innerHTML = this.outProfile.lastNameGet();
        else
            document.querySelector('#profile-last-name').innerHTML = `unknown last name`;
    }

    dateToHTML() {
        if (this.outProfile.dateGet() != "null")
            document.querySelector('#profile-date').innerHTML = this.outProfile.dateGet();
        else
            document.querySelector('#profile-date').innerHTML = `unknown date`;
    }

    emailToHTML() {
        if (this.outProfile.emailGet() != "null")
            document.querySelector('#profile-email').innerHTML = this.outProfile.emailGet();
        else
            document.querySelector('#profile-email').innerHTML = `unknown email`;
    }

    sexToHTML() {
        if (this.outProfile.sexGet() != "null")
            document.querySelector('#profile-sex').innerHTML = this.outProfile.sexGet();
        else
            document.querySelector('#profile-sex').innerHTML = `unknown sex`;
    }

    printTable() {
        this.firstNameToHTML();
        this.lastNameToHTML();
        this.dateToHTML();
        this.emailToHTML();
        this.sexToHTML();
    }

    modeRow1Col1ToHTML() {
        if (this.outMode.modeRow1Col1Get() != "null")
            document.querySelector('#study-row-1-col-1').innerHTML = this.outMode.modeRow1Col1Get();
        else
            document.querySelector('#study-row-1-col-1').innerHTML = `unknown first name`;
    }

    modeRow1Col2ToHTML() {
        if (this.outMode.modeRow1Col2Get() != "null")
            document.querySelector('#study-row-1-col-2').innerHTML = this.outMode.modeRow1Col2Get();
        else
            document.querySelector('#study-row-1-col-2').innerHTML = `unknown first name`;
    }

    modeRow2Col1ToHTML() {
        if (this.outMode.modeRow2Col1Get() != "null")
            document.querySelector('#study-row-2-col-1').innerHTML = this.outMode.modeRow2Col1Get();
        else
            document.querySelector('#study-row-2-col-1').innerHTML = `unknown first name`;
    }

    modeRow2Col2ToHTML() {
        if (this.outMode.modeRow2Col2Get() != "null")
            document.querySelector('#study-row-2-col-2').innerHTML = this.outMode.modeRow2Col2Get();
        else
            document.querySelector('#study-row-2-col-2').innerHTML = `unknown first name`;
    }

    modeRow3Col1ToHTML() {
        if (this.outMode.modeRow3Col1Get() != "null")
            document.querySelector('#study-row-3-col-1').innerHTML = this.outMode.modeRow3Col1Get();
        else
            document.querySelector('#study-row-3-col-1').innerHTML = `unknown first name`;
    }

    modeRow3Col2ToHTML() {
        if (this.outMode.modeRow3Col2Get() != "null")
            document.querySelector('#study-row-3-col-2').innerHTML = this.outMode.modeRow3Col2Get();
        else
            document.querySelector('#study-row-3-col-2').innerHTML = `unknown first name`;
    }

    modeRow4Col1ToHTML() {
        if (this.outMode.modeRow4Col1Get() != "null")
            document.querySelector('#study-row-4-col-1').innerHTML = this.outMode.modeRow4Col1Get();
        else
            document.querySelector('#study-row-4-col-1').innerHTML = `unknown first name`;
    }

    modeRow4Col2ToHTML() {
        if (this.outMode.modeRow4Col2Get() != "null")
            document.querySelector('#study-row-4-col-2').innerHTML = this.outMode.modeRow4Col2Get();
        else
            document.querySelector('#study-row-4-col-2').innerHTML = `unknown first name`;
    }

    modeRow5Col1ToHTML() {
        if (this.outMode.modeRow5Col1Get() != "null")
            document.querySelector('#study-row-5-col-1').innerHTML = this.outMode.modeRow5Col1Get();
        else
            document.querySelector('#study-row-5-col-1').innerHTML = `unknown first name`;
    }

    modeRow5Col2ToHTML() {
        if (this.outMode.modeRow5Col2Get() != "null")
            document.querySelector('#study-row-5-col-2').innerHTML = this.outMode.modeRow5Col2Get();
        else
            document.querySelector('#study-row-5-col-2').innerHTML = `unknown first name`;
    }

    printStudyBoard() {
        this.modeRow1Col1ToHTML();
        this.modeRow1Col2ToHTML();
        this.modeRow2Col1ToHTML();
        this.modeRow2Col2ToHTML();
        this.modeRow3Col1ToHTML();
        this.modeRow3Col2ToHTML();
        this.modeRow4Col1ToHTML();
        this.modeRow4Col2ToHTML();
        this.modeRow5Col1ToHTML();
        this.modeRow5Col2ToHTML();
    }

    printControlBoard() {
        this.modeRow1Col1ToHTML();
        this.modeRow2Col1ToHTML();
        this.modeRow3Col1ToHTML();
        this.modeRow4Col1ToHTML();
        this.modeRow5Col1ToHTML();
    }
}