var url = document.getElementById("urlAddress")
const gBtn = document.getElementById("generateBtn")


gBtn.addEventListener("click", () => {
  var inputUrl = { url: url.value }
  console.log(inputUrl)
  fetch('/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputUrl)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend
      // console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
})