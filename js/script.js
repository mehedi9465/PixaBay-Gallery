const KEY = '12991928-c7c6409774c494db9971343c7';

const getData = (query) => {
    fetch(`https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => loadData(data.hits))
    .catch(err => console.log(err))
}

document.getElementById('button-addon2').addEventListener('click', () => {
    const inputValue = document.getElementById('InputField').value;
    getData(inputValue);
});

const loadData = datas => {
    console.log(datas);
    if (datas.length === 0) {
        alert('No result found');
        return;
    }
    const imageContainer = document.getElementById('image-Container');
    imageContainer.innerHTML = '';
    datas.forEach(data => {
        const appendDiv = document.createElement('div');
        appendDiv.innerHTML = `
        <div id="image" class="col text-center"     onclick="loadDetails('${data.largeImageURL}')">
            <img src="${data.largeImageURL}" class="card-img-top" alt="...">
        </div>
        `;
        imageContainer.appendChild(appendDiv);
    });
}

const detailDiv = document.getElementById('details');

document.getElementById('InputField').addEventListener('click', () => {
    document.getElementById('InputField').value = '';
});

const loadDetails = (data) => {
    console.log(data);
    const img = document.createElement('img');
    img.setAttribute('src', data);
    detailDiv.innerHTML = '';
    detailDiv.appendChild(img);
};


