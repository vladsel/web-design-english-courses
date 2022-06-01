
export default class Mode {

    constructor() {}

    initWords() {
        sessionStorage.setItem("Encourage", "поощрять")
        // sessionStorage.setItem("Encourage", "Поощрять");

        sessionStorage.setItem("Advise", "советовать")
        // sessionStorage.setItem("Advise", "Советовать");

        sessionStorage.setItem("Internship", "стажировка")
        // sessionStorage.setItem("Internship", "Стажировка");

        sessionStorage.setItem("Obvious", "очевидный")
        // sessionStorage.setItem("Obvious", "Очевидный");

        sessionStorage.setItem("Railway", "железная дорога")
        // sessionStorage.setItem("Railway", "Железная дорога");

        sessionStorage.setItem("init-words-flag", "true");
    }

    initBoard() {
        sessionStorage.setItem("#study-row-1-col-1", "Encourage")
        sessionStorage.setItem("#study-row-1-col-2", "Поощрять")

        sessionStorage.setItem("#study-row-2-col-1", "Advise")
        sessionStorage.setItem("#study-row-2-col-2", "Советовать")

        sessionStorage.setItem("#study-row-3-col-1", "Internship")
        sessionStorage.setItem("#study-row-3-col-2", "Стажировка")

        sessionStorage.setItem("#study-row-4-col-1", "Obvious")
        sessionStorage.setItem("#study-row-4-col-2", "Очевидный")

        sessionStorage.setItem("#study-row-5-col-1", "Railway")
        sessionStorage.setItem("#study-row-5-col-2", "Железная дорога")

        sessionStorage.setItem("init-board-flag", "true");
    }

    checkWords(event) {
        var emptyForm = false;

        $('#control-form input').each(function() {
            if ($(this).val() === '') 
                emptyForm = true;
        });

        if (emptyForm == false) {
            // event.preventDefault();

            if ($('#control-form-input-row-1-col-2').val().toLowerCase().trim() ==
                sessionStorage.getItem(sessionStorage.getItem("#study-row-1-col-1"))) {
                    document.querySelector('#control-div-input-row-1-col-2').innerHTML = `true`;
            }
            else
                document.querySelector('#control-div-input-row-1-col-2').innerHTML = `false`;

            if ($('#control-form-input-row-2-col-2').val().toLowerCase().trim() ==
                sessionStorage.getItem(sessionStorage.getItem("#study-row-2-col-1"))) {
                    document.querySelector('#control-div-input-row-2-col-2').innerHTML = `true`;
            }
            else
                document.querySelector('#control-div-input-row-2-col-2').innerHTML = `false`;

            if ($('#control-form-input-row-3-col-2').val().toLowerCase().trim() ==
                sessionStorage.getItem(sessionStorage.getItem("#study-row-3-col-1"))) {
                    document.querySelector('#control-div-input-row-3-col-2').innerHTML = `true`;
            }
            else
                document.querySelector('#control-div-input-row-3-col-2').innerHTML = `false`;

            if ($('#control-form-input-row-4-col-2').val().toLowerCase().trim() ==
                sessionStorage.getItem(sessionStorage.getItem("#study-row-4-col-1"))) {
                    document.querySelector('#control-div-input-row-4-col-2').innerHTML = `true`;
            }
            else
                document.querySelector('#control-div-input-row-4-col-2').innerHTML = `false`;

            if ($('#control-form-input-row-5-col-2').val().toLowerCase().trim() ==
                sessionStorage.getItem(sessionStorage.getItem("#study-row-5-col-1"))) {
                    document.querySelector('#control-div-input-row-5-col-2').innerHTML = `true`;
            }
            else
                document.querySelector('#control-div-input-row-5-col-2').innerHTML = `false`;

            event.preventDefault();
        }
    }
}

