/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    // Write your code here
    let mous = document.getElementById("mouse-coordinates")

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX
        const y = event.clientY
        mous.textContent = `x: ${x}, y: ${y}`
    })
}

const randomRGB = () => {
    const o = Math.round
    const r = Math.random
    const s = 255
    return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
    // Write your code here
    let cursor = document.querySelector("#focus-me")
    let initialLabels = []
    cursor.labels.forEach(el => {
        initialLabels.push(el.textContent)
    })


    let label1 = cursor.previousElementSibling
    let label2 = cursor.nextElementSibling

    let reset1 = cursor.previousElementSibling.textContent
    let reset2 = cursor.nextElementSibling.textContent
    enteringColor = `#6495ed`

    cursor.addEventListener("focus", (e) => {
        cursor.style.borderColor = randomRGB()
    })
    cursor.addEventListener("blur", (e) => {
        cursor.style.borderColor = enteringColor
    })
    cursor.addEventListener("mouseover", (e) => {
        cursor.labels.forEach(label => label.textContent = "Yes, you hover me !")
    })
    cursor.addEventListener("mouseout", (e) => {
        cursor.labels.forEach((label, index) => label.textContent = initialLabels[index])
    })


}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    // Write your code here
    const cursor = document.querySelector("#focus-me")
    cursor.addEventListener("input", (e) => {
        enteringColor = randomRGB()
        cursor.labels.forEach(label => label.style.color = enteringColor)
    })
}