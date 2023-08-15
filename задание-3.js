document.getElementById('submitButton').addEventListener('click', function() {
    let numberInput = document.getElementById('numberInput');
    let number = parseInt(numberInput.value);
    if (number < 1 || number > 10) {
      document.getElementById('resultContainer').textContent = 'Число вне диапазона от 1 до 10';
    } else {
      let url = 'https://picsum.photos/v2/list?limit=' + number;
  
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          // Обработка полученного ответа
        } else {
          document.getElementById('resultContainer').textContent = 'Ошибка при выполнении запроса';
        }
      };
      xhr.send();
    }
  });