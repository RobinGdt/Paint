const rectangle = document.querySelector('.formeRectlangle');
const draw = document.querySelector('.container1');

// AJOUT DES EVENEMENTS DRAG 

rectangle.addEventListener('dragstart', dragStart);
rectangle.addEventListener('dragend', dragEnd);

// AJOUT DES EVENEMENTS DRAGOVER

draw.addEventListener('dragover', dragOver);
draw.addEventListener('dragenter', dragEnter);
draw.addEventListener('dragleave', dragLeave);
draw.addEventListener('drop', dragDrop);


// FONCTIONS DES EVENEMENTS DRAG


function dragStart() {
    console.log('dragover');
}

function dragEnd() {
    console.log('dragend');

    this.className = 'formeRectangle';
}

function dragOver(e) {
    console.log('dragover');

    e.preventDefault();

};
function dragEnter(e) {
    console.log('dragenter');

    e.preventDefault();
    this.className += 'hovered';

};
function dragLeave() {
    console.log('dragleave');

    this.className = 'container1';
};
function dragDrop() {
    console.log('dragdrop');

    this.className = 'container1';
    this.append(rectangle)
};

draw.addEventListener('mousedown', (e) => {
    console.log(e);
});
