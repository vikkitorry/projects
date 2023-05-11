const createModal = function(result) {
  const body = document.querySelector('body');
  const modal =
  `<div class="modal">
    <div class="close"></div>
    <h1>Settings</h1>
    <div class="container">
      Change Theme
      <div class="container-items">
        <div class="dark btn"></div>
        <div class="light btn active-btn"></div>
      </div>
    </div>
    <div class="container">
        Change Level
      <div class="container-items">
        <div class="easy-level btn active-btn"></div>
        <div class="normal-level btn"></div>
        <div class="hard-level btn"></div>
      </div>
    </div>
    <div class="container">
      Results
    <div class="results">
    <p>${localStorage.getItem(result[9]) || 'Date: 22.05.23 Steps: 05 Time: 01:14 Win: No'}</p>
    <p>${localStorage.getItem(result[8]) || 'Date: 21.05.23 Steps: 31 Time: 04:02 Win: No'}</p>
    <p>${localStorage.getItem(result[7]) || 'Date: 19.05.23 Steps: 17 Time: 05:32 Win: No'}</p>
    <p>${localStorage.getItem(result[6]) || 'Date: 19.05.23 Steps: 14 Time: 03:46 Win: No'}</p>
    <p>${localStorage.getItem(result[5]) || 'Date: 17.05.23 Steps: 08 Time: 02:15 Win: No'}</p>
    <p>${localStorage.getItem(result[4]) || 'Date: 15.05.23 Steps: 12 Time: 01:25 Win: No'}</p>
    <p>${localStorage.getItem(result[3]) || 'Date: 15.05.23 Steps: 28 Time: 10:28 Win: Yes'}</p>
    <p>${localStorage.getItem(result[2]) || 'Date: 15.05.23 Steps: 10 Time: 03:38 Win: No'}</p>
    <p>${localStorage.getItem(result[1]) || 'Date: 15.05.23 Steps: 21 Time: 02:35 Win: No'}</p>
    <p>${localStorage.getItem(result[0]) || 'Date: 14.05.23 Steps: 11 Time: 01:31 Win: No'}</p>
    </div>
  </div>
  </div>`
  body.insertAdjacentHTML('afterbegin', modal);
  modalWindow();
}

const modalWindow = function() {
  const modal = document.querySelector('.modal');
  const settings = document.querySelector('.settings');
  const close = document.querySelector('.close');
  settings.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
  });
  close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
  });
}

export {createModal};