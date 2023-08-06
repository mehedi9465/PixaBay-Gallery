const KEY = "12991928-c7c6409774c494db9971343c7";
let dataList = [];

const getData = (query) => {
  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&pretty=true`
  )
    .then((response) => response.json())
    .then((data) => loadData(data.hits))
    .catch((err) => console.log(err));
};

document.getElementById("button-addon2").addEventListener("click", () => {
  const inputValue = document.getElementById("InputField").value;
  getData(inputValue);
});

const loadData = (datas) => {
  dataList = [...datas];
  if (datas.length === 0) {
    alert("No result found");
    return;
  }
  const imageContainer = document.getElementById("image-Container");
  imageContainer.innerHTML = "";
  datas.forEach((data) => {
    let imgSerial = datas.indexOf(data);
    const appendDiv = document.createElement("div");
    appendDiv.innerHTML = `
        <div id="image" class="col text-center" onclick="loadDetails('${data.largeImageURL}', '${imgSerial}')">
            <img src="${data.largeImageURL}" class="card-img-top" alt="...">
        </div>
        `;
    imageContainer.appendChild(appendDiv);
  });
};

const detailDiv = document.getElementById("details");

document.getElementById("InputField").addEventListener("click", () => {
  document.getElementById("InputField").value = "";
});

const loadDetails = (data, imgSerial) => {
  // console.log(imgSerial);
  const img = document.createElement("img");
  img.setAttribute("src", data);

  const nextBTN = document.createElement("span");
  // nextBTN.innerHTML = `<button class="btn btn-secondary border-0 outline-0">Next</button>`
  nextBTN.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" width='80' class="position-absolute end-0 top-50 bottom-50 m-auto cursor-pointer" alt="..." onclick="onNext('${imgSerial}')" />`;

  const prevBTN = document.createElement("span");
  // prevBTN.innerHTML = `<button class="btn btn-secondary border-0 outline-0">Prev</button>`
  prevBTN.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/892/892512.png" width='80' class="position-absolute start-0 top-50 bottom-50 m-auto cursor-pointer" alt="..." onclick="onPrev('${imgSerial}')" />`;

  detailDiv.innerHTML = "";
  detailDiv.append(prevBTN);
  detailDiv.appendChild(img);
  detailDiv.append(nextBTN);
};

const onNext = (imgSerial) => {
if(imgSerial >= 0 && )
  console.log(imgSerial);
};

const onPrev = (imgSerial) => {
  console.log(imgSerial);
};

// const nextBTN = ' <span><img class="border-0 outline-0" src="https://cdn-icons-png.flaticon.com/512/892/892512.png" alt="Prev" width="200"></span>'
// const prevBTN = '<span><img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" alt="Next" width="200"></span>'
