/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
    // Write your code here
    document.querySelector("#click-to-fetch").addEventListener('click', async () => {
            const url = "https://api.github.com/octocat"
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }
                const json = await response.text()
                const image = document.querySelector("#display-here")
                image.textContent = json
            } catch (error) {
                console.error(error.message)
            }
    })
}