let addToy = false;

function getToys() {
  return fetch ('http://localhost:3000/toys')
  .then (res => res.json())
}

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
  getToys().then(data => console.log(data.forEach(elem => renderToys(elem))))
  renderToys()
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
console.log(toy)
h2.innerText = toy.name
}

getToys().then(toys => {
  toys.forEach(toy => {
    renderToys(toy)
  })
})
