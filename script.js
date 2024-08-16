let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                alert("Invalid mathematical expression");
            }
        } else if (e.target.innerHTML === "A/C") {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === "M+") {
            if (!isNaN(string)) {
                memory += parseFloat(string);
                string = "";
                document.querySelector('input').value = string;
            }
        } else if (e.target.innerHTML === "M-") {
            if (!isNaN(string)) {
                memory -= parseFloat(string);
                string = "";
                document.querySelector('input').value = string;
            }
        } else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
