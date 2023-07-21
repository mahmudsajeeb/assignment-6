<button onclick="fetchShowCardDetail('${card.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal">
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
 
const fetchShowCardDetail = id => {
    const url = https://openapi.programming-hero.com/api/ai/tool/${id};
    fetch(url)
      .then((res) => res.json())
      .then((data) => showCardDetail(data.data));
};
 
const showCardDetail = cardDetail =>{
    
    const cardModadTitle = document.getElementById('cardModalLabel');
    cardModadTitle.innerText = cardDetail.tool_name;

    const cardDiscription = document.getElementById('card-discription');
    cardDiscription.innerText = cardDetail.description;


}