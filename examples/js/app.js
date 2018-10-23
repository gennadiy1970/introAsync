class App {
    constructor (parent = document) {
        this.parent = parent;
        this.btnAdd = parent.querySelector('.adding');
        this.btnClear = parent.querySelector('.clear');
        this.box = parent.querySelector('.box');
        this.state = 0;
    }
    add() {
        this.box.insertAdjacentHTML(
            'afterbegin',
            `<p>${this.state++}</p>`
            )
    }
    clear () {
        this.box.innerHTML = "";
        this.state = 0;
    }
    run () {
        this.btnAdd.addEventListener('click', this.add.bind(this));
        this.btnClear.addEventListener('click', this.clear.bind(this));
    }
}

// const app = new App (document.querySelector('.wrapper'))
const app = new App ()
app.run();