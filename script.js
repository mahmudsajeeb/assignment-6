// show data on modal
let loadAllDataForID = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then((res) => res.json())
    .then((id) => loadWithId(id));
};
let loadWithId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => displayWithId(data.data));
};

// modal
let displayWithId = (data) => {
  console.log(data);
  // const dataArray = Object.entries(data.data).map(([key, value]) => {
  //   return { [key]: value };
  // });
  // data.forEach((element) => {
  //   console.log(element);
  // getModalContainer.innerHTML = "";
  let getModalContainer = document.getElementById("modalBody");
  let crtDiv2 = document.createElement("div");
  getModalContainer.innerHTML = `
    <div class="card ms-5" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">${data.tool_name}</h5>
      </div>
      <div class="d-flex">
        <div class="card m-2 bg-danger text-primary">
          <div class="card-body">
            <h5>${data.pricing[0].plan}</h5>
            <h5>${data.pricing[0].price}</h5>
          </div>
        </div>
        <div class="card m-2 bg-danger-subtle text-success">
          <div class="card-body">
            <h5>${data.pricing[1].plan}</h5>
            <h5>${data.pricing[1].price}</h5>
          </div>
        </div>
        <div class="card m-2 bg-warning-subtle text-danger">
          <div class="card-body">
            <h5>${data.pricing[2].plan}</h5>
            <h5>${data.pricing[2].price}</h5>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="ul ms-3">
          <h5>Features</h5>
          <ul>
            <li>${
              data.features[1].feature_name
                ? data.features[1].feature_name
                : "no data font "
            }</li>
            <li>${
              data.features[2].feature_name
                ? data.features[2].feature_name
                : "no data fond"
            }</li>
            <li>${
              data.features[3].feature_name
                ? data.features[3].feature_name
                : "no data fond"
            }</li>
          </ul>
        </div>
        <div class="ul ms-3">
          <h5>Integrations</h5>
          <ul>
            <li>${
              data.integrations[1] ? data.integrations[1] : "no data fond"
            }</li>
            <li>${
              data.integrations[2] ? data.integrations[2] : "no data fond"
            }</li>
            <li>${
              data.integrations[3] ? data.integrations[3] : "no data found"
            }</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card ms-5" style="width: 30rem">
     <div class="d-flex ms-5"> 
      <img src="${
        data.image_link ? data.image_link : "There is no image fond"
      }" class="card-img-top" alt="..." />
      <h4><span class="badge bg-danger">${
        data.accuracy.score ? data.accuracy.score : "font fond"
      }</span></h4>
     </div>
      <div class="card-body">
        <h2>${data.tool_name ? data.tool_name : "no data fond"}</h2>
        <p class="card-text text-center">{data.data.description}</p>
      </div>
    </div>
      `;
  getModalContainer.appendChild(crtDiv2);
  // });
};
loadAllDataForID();