var string = [];


let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let tr = e.target;
        let display = document.querySelector("input");
        // console.log(e.target);
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                display.value = string
            } catch (error) {
                display.value = "Error"

            }

        } else if (e.target.innerHTML == "C") {
            string = "";
            display.value = string
        } else if (e.target.innerHTML == "BACK") {
            string = string.slice(0, -1)
            display.value = string
        }
        else {
            string = string + tr.innerHTML;
            display.value = string
        }
    })
});








