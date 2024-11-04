document.querySelector('.delBtn');
const mortgageAmount = document.querySelector('.mortgageAmount');
const mortgageTerm = document.querySelector('.mortgageTerm');
const interestRate = document.querySelector('.interestRate');
const repayment = document.querySelector('.Repayment');
const interestOnly = document.querySelector('.interestOnly');
const monthlyRepayment = document.querySelector('.monthlyRepayment');
const totalRepayment = document.querySelector('.totalRepayment');

mortgageAmount = 0;
mortgageTerm = 0;
interestRate = 0;
repayment = 0;
interestOnly = 0;

calcBtn.addEventListener('click', hesapla);
delBtn.addEventListener('click', reset);


if (mortgageAmount==0 || mortgageTerm==0 || interestRate==0)
  alert ('Lütfen değerleri giriniz');
else {
  hesapla();
  // reset();
}
function reset() {
  mortgageAmount = 0;
  mortgageTerm = 0;
  interestRate = 0;
  repayment = 0;
  interestOnly = 0;
}
 
function hesapla() {
  const monthlyRate = Number((interestRate/100)/12);
  const bilesen = Number(1 + monthlyRate);
  const bilesenScnd = Number(Math.pow(bilesen, mortgageTerm));
  const totalAylik = Number(mortgageAmount * ((monthlyRate * bilesenScnd)/(bilesenScnd - 1)));
  const totalYillik = Number(totalAylik * 12);
}

monthlyRepayment.innerHTML = `<p>£ ${totalAylik}</p>`;
totalRepayment.innerHTML = `<p>£ ${totalYillik}</p>`;
