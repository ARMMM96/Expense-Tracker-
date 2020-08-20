const balacne = document.querySelector('#balance');
const moneyPlus = document.querySelector('#monay-plus');
const monyMinus = document.querySelector('#moeny-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
];

let transactions = dummyTransactions;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
  
    ${transaction.text} <span> ${sign} ${Math.abs(transaction.amount)}</span>
    
    <button class="delete-btn">X</button>

  `;

  list.appendChild(item);
}

// Init app
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
}

init();
