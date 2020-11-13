// When windows load send the request to the API
window.onload = sendApiRequest();
//Get the element to add the pictures
const randomDogs = document.querySelector(".random-dogs");
//Send Api Request
async function sendApiRequest() {
  //   //Save Api into a variable
  let API_URL = `https://dog.ceo/api/breeds/image/random/3`;
  //   //Send the Api Request
  let response = await fetch(API_URL);
  let data = await response.json();
  console.log(data.message);
  //add an image to the html document for each dog image
  data.message.forEach((dogImage) => {
    randomDogs.innerHTML += `
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${dogImage}" alt="Card image cap">
      </div>
        </div>
      `;
  });
  //   progess bar hide
  Loading.style.display = "none";
}

const generatemoredogs = document.querySelector(".generatemoredogs");

generatemoredogs.addEventListener("click", () => {
  //progess bar show  when click the btn
  Loading.style.display = "";
  sendApiRequest();
});

// progress bar

const Loading = document.querySelector(".progress");
Loading.style.display = "none";
