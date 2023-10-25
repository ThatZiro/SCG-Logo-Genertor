class Shape{
    constructor(_data){
        this.data = _data;
    }
    innerHTML(){
        let dy = ".3em";
        if(this.data.shape == "Triangle"){
          dy = "1em"  
        }

        return`<svg width="100" height="100">
    ${this.render()}
    <text x="50%" y="50%" font-size="24px" font-weight="bold" text-anchor="middle" dy="${dy}" fill="${this.data.color}">${this.data.text}</text>
</svg>`
    }
}


class Triangle extends Shape {
    constructor(_data){
        super(_data);
    }
    render(){
        return`<polygon points="50,5 95,95 5,95" stroke="black" stroke-width="1" fill="${this.data.background}" />`
    }
}

class Square extends Shape {
    constructor(_data){
        super(_data);
    }
    render(){
        return`<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="1" fill="${this.data.background}" />`
    }
}

class Circle extends Shape {
    constructor(_data){
        super(_data);
    }
    render(){
        return`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="${this.data.background}" />`
    }
}

module.exports = {Triangle, Square, Circle};