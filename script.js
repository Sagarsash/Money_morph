let amountInput = document.getElementById('amount');
let fromInput = document.getElementById('from');
let toInput = document.getElementById('to');
let output = document.getElementById('output');

function convert() {
  let amount = amountInput.value;
  let from = fromInput.value;
  let to = toInput.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(response => response.json())
    .then(data => {
      let rate = data.rates[to]* amount
      // let result = amount * rate
      output.innerHTML = `${amount} ${from} = ${rate.toFixed(2)} ${to}`;
    })
    .catch(error => {
      console.log(error);
      output.innerHTML = 'Error';
    });
}
