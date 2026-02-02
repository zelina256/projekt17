let infos = [
    {
        title: "title 1",
        image: "images/kerpudha.jpg",
        description: "New description"
    },
    {
        title: "title 2",
        image: "images/peshku.jpg",
        description: "Description"
    },
       {
        title: "title 3",
        image: "images/tulipani.jpg",
        description: "Description tulipan"
    },
]

let vendiIInformacioneve = document.getElementById("infos")
for (let i = 0; i < infos.length; i++) {
    vendiIInformacioneve.innerHTML = vendiIInformacioneve.innerHTML +
        `
    <div class="col">
      <div class="card" >
        <img src="${infos[i].image}" class="card-img-top"
         alt="${infos[i].title}">
        <div class="card-body">
            <h5 class="card-title">${infos[i].title}</h5>
            <p class="card-text">${infos[i].description}</p>
        </div>
        </div>
    </div>
    `
}