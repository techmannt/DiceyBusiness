let diceArr = [];

const computeRandomValue = () => Math.floor(Math.random() * 6) + 1;  // Add 1 so we can get 1-6 for dice.

class Die {

  constructor(value) {
    this.value = value;
    this.div = $("<div></div>");
    this.div.addClass("die");
    this.roll();
    $('main').append(this.div);
  }

  roll() {
    let newRandomValue = computeRandomValue();
    $(this.div).append(newRandomValue);
  }

  reRoll() {
    let newRandomValue = computeRandomValue();
    $(this.div).text(newRandomValue);
  }
}

$('.generateDieBtn').click(() => {
  let randomValue = computeRandomValue();
  let newDice = new Die(randomValue);
  diceArr.push(newDice);
});

$('.rollDieBtn').click(() => {
  diceArr.forEach(dice => {
    dice.reRoll();
  });
})
