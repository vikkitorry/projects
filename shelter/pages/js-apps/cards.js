//create html card
function createCard(pet) {
    return `<div class="friends__card" data-name="${pet.name}" >
                <div class="friends__card-wrapper-pic">
                    <img src="../../assets/img/friends-${pet.img}-1280.jpg" alt="${pet.type}" class="friends__card-pic">
                 </div>
                <p class="friend-name">${pet.name}</p>
                <div class="btn__container">
                    <button class="btn btn-friend">Learn more</button>
                </div>
            </div>`;
};

//shuffle obj in array
function shuffle(arr, n) {
    let pets = [].concat(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [pets[i], pets[r]] = [pets[r], pets[i]];
    };
    return pets.slice(0, n);
};

//create html block of list card
function createListCards(pets) {
    return pets.reduce((acc, card) => (acc += createCard(card)), '');
};

export {createCard, shuffle, createListCards};