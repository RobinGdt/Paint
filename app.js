const rectangle = document.querySelector('.formeRectangle');
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
    this.className += ' tenu';
}

function dragEnd() {

}

function dragOver(e) {
    e.preventDefault();

};

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
};

function dragLeave() {
    this.className = 'container1';
};

function dragDrop(e) {
    this.className = 'container1';
    this.append(rectangle);
    let x = e.pageX;
    let y = e.pageY;

    rectangle.style.top = y + "px";
    rectangle.style.left = x + "px";
};
