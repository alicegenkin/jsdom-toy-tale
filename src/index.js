let addToy = false;

function getToys() {
  return fetch ('http://localhost:3000/toys')
  .then (res => res.json())
}


getToys()

function postToy(toy_data) {
  fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        "name": toy_data.name.value,
        "image": toy_data.image.value,
        "likes": 0

      })
    })
    .then(res => res.json())
    .then((obj_toy) => {
      renderToys(obj_toy)
    })
}

document.addEventListener("DOMContentLoaded", () => {
  //console.log(getToys())
  getToys().then(data => data.forEach(elem => renderToys(elem)))
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function renderToys(toy) {
let h2 = document.createElement('h2')
toyCollection.append(h2)
h2.innerText = toy.name
}

let toyCollection = document.querySelector('#toy-collection')

// getToys().then(toys => {
//   toys.forEach(toy => {
//     renderToys(toy)
//   })
//})
