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
    const appendDiv = document.createElement("div");
    let imgSerial = datas.indexOf(data);
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

const nextImage = (imgSerial) => {
  if (imgSerial >= 0 && imgSerial < 19) {
    imgSerial = parseInt(dataList.length - 1) + 1;
  }
  const data = dataList[imgSerial].largeImageURL;
  loadDetails(data, imgSerial);
};

const prevImage = (imgSerial) => {
  if (imgSerial <= 19 && imgSerial > 0) {
    imgSerial = parseInt(dataList.length - 1) - 1;
  }
  const data = dataList[imgSerial].largeImageURL;
  loadDetails(data, imgSerial);
};

const loadDetails = (data, imgSerial) => {
  const img = document.createElement("img");
  img.setAttribute("src", data);

  const nextBTN = document.createElement("img");
  nextBTN.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/892/892512.png"
  );
  nextBTN.setAttribute(
    "class",
    "position-absolute start-0 top-50 bottom-50 m-auto cursor-pointer"
  );
  nextBTN.setAttribute("width", "80");
//   nextBTN.setAttribute('onclick', `${nextImage(`${imgSerial}`)}`)

  const prevBTN = document.createElement("img");
  prevBTN.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/892/892528.png"
  );
  prevBTN.setAttribute(
    "class",
    "position-absolute end-0 top-50 bottom-50 m-auto cursor-pointer"
  );
  prevBTN.setAttribute("width", "80");
//   prevBTN.setAttribute('onclick', prevImage(imgSerial))

  detailDiv.innerHTML = "";
  detailDiv.appendChild(img);
  detailDiv.append(prevBTN);
  detailDiv.append(nextBTN);
};

// const nextBTN = ' <span><img class="border-0 outline-0" src="https://cdn-icons-png.flaticon.com/512/892/892512.png" alt="Prev" width="200"></span>'
// const prevBTN = '<span><img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" alt="Next" width="200"></span>'
