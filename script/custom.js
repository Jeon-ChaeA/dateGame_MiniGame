let today = new Date(); //오늘의 날짜 설정
let month = today.getMonth() + 1;
let date = today.getDate();

let btn = document.getElementById('btn');
let resultElement = document.getElementById('result');
let modal = document.getElementById('modal');
let loadingImage = document.getElementById('loading');

btn.addEventListener('click', function() {
  let inputMonth = parseInt(document.getElementById('month').value);
  let inputDate = parseInt(document.getElementById('date').value);


  modal.style.display = 'block';
  loadingImage.style.display = 'block';
  
  setTimeout(function() {
    loadingImage.style.display = 'none';


    if (inputMonth === month && inputDate === date) {
      resultElement.textContent = '정답입니다🎉';
    } else {
      resultElement.textContent = `아쉽습니다😢 오늘은 ${month}월 ${date}일입니다💕`;
    }

    setTimeout(function() {
      modal.style.display = 'none';
      resultElement.textContent = ''; 
    }, 2000);
  }, 2000);
});