/**
 * In the HTML, there is an element with the id "click-me", you need to register
 * a new event listener that will trigger an alert when the element is clicked.
 * The alert text should contain "Button clicked"
 */
export function reactToClickEvent() {
  // Write your code here
  document.getElementById("click-me").onclick = function() {
    alert("hi")
  }
}

/**
 * You should register an event listener on the same button as the last exercise.
 * But this time you should add a new div below the button with the content "clicked"
 */
export function addEventToDomOnClick() {
  // Write your code here
  const button = document.querySelector("button")
  button.addEventListener("click", function() {
    const div = document.createElement("div")
    div.textContent = "clicked"
    button.parentNode.insertBefore(div, button.nextSibling)
})
}