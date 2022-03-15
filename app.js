const rectangle = document.querySelector('.formeRectangle');
const draw = document.querySelector('.container1');
const box = document.querySelectorAll('.box');
const rect = document.querySelector('.rectangle')
let dragItem = null;

draw.addEventListener('dragover', dragOver);
draw.addEventListener('dragenter', dragEnter);
draw.addEventListener('dragleave', dragLeave);
draw.addEventListener('drop', dragDrop);

for(let i of box){
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);

    const clone = i.cloneNode(true);

    i.addEventListener ('click',() => {
        draw.append(i);
        i.style.top = 410 + "px";
        i.style.left = 410 + "px";
        console.log('collé');

    });
};

function dragStart() {
    dragItem = this;
    this.className += ' tenu';
};

function dragEnd() {
    dragItem = this;
    rect.append(dragItem)
};

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

    this.append(dragItem);
    let ex = e.pageX;
    let ey = e.pageY;

    dragItem.style.top = ey + "px";
    dragItem.style.left = ex + "px";

};

let x, y, h, w;

function ts(e) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;

    h = rectangle.clientHeight;
    m = rectangle.clientWidth;
}

function ts(e) {
    mx = e.touches[0].clientX;
    my = e.touches[0].clientY;

    cx = mx - x;
    cy = my - y;

    rectangle.style.width = cx + w;
    rectangle.style.width = cy + h;
}