function init() {
    const acc = document.querySelector('.accordion');

    acc.addEventListener('click', (e) => createAcc(e, acc));
}

function disabledElements(item) {
    const panel = item.querySelector('.panel');
    const button = item.querySelector('.toggle-button');

    panel.classList.remove('show');
    button.classList.remove('active');
}

function createAcc(e, acc) {
    const targetElement = e.target;

    if (targetElement.tagName === 'BUTTON') {
        Array.prototype.map.call(acc.children, disabledElements);
        targetElement.nextElementSibling.classList.toggle('show');
        targetElement.classList.toggle('active');
    } 
}

window.addEventListener('load', init);
