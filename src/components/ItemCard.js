import singleVault from "../scripts/class/Vault.js";

export default function itemCard (name, price, id) {
    const content = `
    <div class="flex flex-col py-2 ${id}">

            <div class="flex flex-row  w-full bg-white rounded-md shadow-md p-2">
                <div class="flex flex-row flex-wrap justify-between w-full px-2.5">
                    <p>${name}
                    </p>
                    <p>$${price}</p>
                </div>
                <button id="${id}delete"class="bg-red-500 rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                </button>
            </div>

    </div>
`;
$('#cart').append(content);
    $(`#${id}delete`).click(()=>{
        singleVault.deleteProductCart(id);
        $(`#${id} p`).text('Agregar al carrito');
        $(`.${id}`).remove()})


}