function orderSmoothie() {
    const size = document.getElementById('size').value;
    const fruits = Array.from(document.getElementById('fruit').selectedOptions).map(option => option.value);
    const base = document.getElementById('base').value;
    const additives = Array.from(document.querySelectorAll('input[name="additives"]:checked')).map(checkbox => checkbox.value);

    const smoothie = new Smoothie(size, fruits, base, additives);
    document.getElementById('orderSummary').innerHTML = smoothie.describe();
}

class Smoothie {
    constructor(size, fruits, base, additives) {
        this.size = size;
        this.fruits = fruits;
        this.base = base;
        this.additives = additives;
    }

    describe() {
        return `<h2>Your Smoothie:</h2>
                <p>Size: ${this.size}</p>
                <p>Fruits: ${this.fruits.join(', ')}</p>
                <p>Base: ${this.base}</p>
                <p>Additives: ${this.additives.join(', ')}</p>`;
    }
}
