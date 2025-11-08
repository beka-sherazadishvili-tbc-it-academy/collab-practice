const productList = document.querySelectorAll('.product-card h2');
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    if(value.length >= 3) {
        for(let item of productList) {
            const cartName = item.innerText.toLowerCase();

            if(!(cartName.split(value).length >= 2)) {
                item.parentElement.style.display = 'none';
            }
        }
    } else {
        for(let item of productList) {
            item.parentElement.style.display = 'grid';
        }
    }
})

 
