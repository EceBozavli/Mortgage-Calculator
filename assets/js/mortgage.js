
const delBtn = document.querySelector('.delBtn');
const mortgageAmount = document.querySelector('.mortgageAmount');
const mortgageTerm = document.querySelector('.mortgageTerm');
const interestRate = document.querySelector('.interestRate');
const repayment = document.querySelector('.Repayment');
const interestOnly = document.querySelector('.interestOnly');
const monthlyRepayment = document.querySelector('.monthlyRepayment');
const totalRepayment = document.querySelector('.totalRepayment');
document.querySelector('.resultBefore').style.display = 'block';
document.querySelector('.resultsAfter').style.display = 'none';

  
  document.querySelector('.calcBtn').addEventListener('click', function() {
   
    let mortgageAmount = parseFloat(document.querySelector('.mortgageAmount').value);
    let mortgageTerm = parseFloat(document.querySelector('.mortgageTerm').value);
    let interestRate =parseFloat(document.querySelector('.interestRate').value);
    alert(interestRate);

    const monthlyRate = Number((interestRate/100)/12);
    const bilesen = Number(1 + monthlyRate);
    const bilesenScnd = Number(Math.pow(bilesen, mortgageTerm));
    const totalAylik = Number(mortgageAmount * ((monthlyRate * bilesenScnd)/(bilesenScnd - 1)));
    const totalYillik = Number(totalAylik * 12)* mortgageTerm;
    alert(totalAylik);
    alert(totalYillik);
    monthlyRepayment.innerHTML = `<p>£ ${totalAylik.toFixed(3)}</p>`;
    totalRepayment.innerHTML = `<p>£ ${totalYillik.toFixed(3)}</p>`;

    document.querySelector('.resultBefore').style.display = 'none';
    document.querySelector('.resultsAfter').style.display = 'block';


    
  });
  
  
  
  document.querySelector('.delBtn').addEventListener('click', function() {
    document.querySelector('.mortgageAmount').value = '';
    document.querySelector('.mortgageTerm').value = '';
    document.querySelector('.interestRate').value = '';
    document.querySelector('.monthlyRepayment').innerHTML = '';
    document.querySelector('.totalRepayment').innerHTML = '';
  
  
  });


 







