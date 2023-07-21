const loadData = (card) =>{
  fetch(`https://openapi.programming-hero.com/api/ai/tools`)
  .then(res => res.json())
    .then(data =>displayData(data.data.tools.slice(0,6)))
}
// display ai universe hub

const displayData = (data) =>{
  // console.log(data)
  const cardContainer  = document.getElementById("card-container")
  cardContainer.innerText = ""
  data.forEach(element =>{
    // console.log(element)
    const {image,card,name, id, features} = element
    const div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML = `
          <div class="card">
              <img src="${image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ul style="list-style:none;">
                  <li>1 ${features[0]}</li>
                  <li>2 ${features[1]}</li>
                  <li>3 ${features[2]}</li>
                </ul>
               
              
              <div class="card-footer d-flex justify-content-between align-items-center">
                 <div>
                    <h4>${name}</h4>
                    <p id="list">${element.published_in}</p>
                 </div>
               <div onclick="modal_section('${id}')" type="button" class="text-end" data-bs-toggle="modal" data-bs-target="#detailsUniverse">
               <i class="fa-solid  fa-arrow-right"></i>
                </div>
              </div>
              </div>
            </div>
    `
    cardContainer.appendChild(div)
  })
}
// show all data  when show all button click


// loadData 

 
const modal_section=id=>{

  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  .then(res=>res.json())
  .then(data=>showModelDetails(data.data))
}

 






const showModelDetails = (data) =>{
  console.log(data.image_link[0])
  const modelImg = document.getElementById("model-img")
  modelImg.innerHTML = `
  <img class="img-fluid" src="${data.image_link[0]}" alt="">
  `
}











  // data.forEach(element =>{
  //   console.log(element)
  //   const modalfirstimg = document.getElementById("modal-first-img")
  //   modalfirstimg.innerText = ''
  //     modalfirstimg.innerHTML= `
  //     <img class="img-fluid" src="${element.image}" alt="">
  
  // `
  // })
  // const modalfirstimg = document.getElementById("modal-first-img")
  // modalfirstimg.innerHTML= `
  // <img class="img-fluid" src="${data.image_link[0]}" alt="">
  
  // `
//}




loadData( 'tools')

document.getElementById("showAll").addEventListener("click", () =>{
  fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then(res => res.json())
  .then(data =>displayData(data.data.tools))
})
// const list = document.getElementById('list');

// const sortAscending = () => {
//   const items = Array.from(list.children);
//   items.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
//   items.forEach(item => list.appendChild(item));
// }

// const sortButton = document.getElementById('sort-button');
// sortButton.addEventListener('click', sortAscending);