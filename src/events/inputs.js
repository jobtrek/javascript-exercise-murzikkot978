/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    // Write your code here
    const input = document.querySelector("#write-some-text")
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const mess = input.value.trim()
            alert(mess)
        }
    })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    // Write your code here
    const input = document.querySelector("#list-input")
    const output = document.querySelector("#list")

    function addtolist() {
        const text = input.value.trim()
        if (text) {
            const li = document.createElement("li")
            li.textContent = text
            output.appendChild(li)
            input.value = ''
        }

    }

    input.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            addtolist()
        }
    })
    input.addEventListener("blur", addtolist)
}


/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    // Write your code here
    const output = document.querySelector("#list")
    output.addEventListener("click", (event) => {
        event.target.remove()
    })
}