class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {

        let elem = document.createElement('div');
        let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`

        document.body.appendChild(elem);

        elem.style.cssText = param;
    }

}

// create object class

const item = new Options(200, 200, "green", 15, "center");

item.createDiv();