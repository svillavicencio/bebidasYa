// const cardList = document.getElementById('cardList');

export default function drinkCard (name, value, icon, id) {

    const content = `
    <div class="card">
        <div class="container flex mb-2">
            <div class="card__image">
                <img src="${icon}" alt="" class="rounded-md">
            </div>
            <div class="card__info">
                <p class="text-center text-2xl font-bold">${name}</p>
                <p class="text-left text-xl font-semibold ">$${value}</p>
            </div>
        </div>

        <button id=${id} class="card__button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <p class="text-center ml-2">Agregar al carrito</p>
        </button>
    </div>
`;

    $('#cardList').append(content);




    
    // let card = document.createElement('div');
    // card.classList.add('card')

    
    // cardList.appendChild(card);
    // return card.querySelector('button');
}

