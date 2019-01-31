document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e){

  const inputAmount = document.getElementById("amount").value;
  const inputInterest = document.getElementById("interest").value;
  const inputYears = document.getElementById("years").value;

  const principal = parseFloat(inputAmount);
  const calcInterest = parseFloat(inputInterest) / 100 / 12;
  const calcPayments = parseFloat(inputYears) * 12;

  const x = Math.pow(1 + calcInterest, calcPayments);
  const monthly = (principal * x * calcInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  const totalInterest = (monthly * calcPayments - principal).toFixed(2);

  const totalPayment = (monthly * calcPayments).toFixed(2);

  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
  document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

  e.preventDefault();
}