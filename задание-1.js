//XML, который будем парсить
const xmlString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

// Создаем DOMParser
const parser = new DOMParser();

// Парсим XML и создаем DOM-дерево
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Получаем все элементы <student>
const studentElements = xmlDoc.getElementsByTagName("student");

// Создаем пустой массив для хранения результатов
const result = {
  list: [],
};

// Обходим каждый элемент <student> и создаем объект для каждого из них
for (let i = 0; i < studentElements.length; i++) {
    const studentElement = studentElements[i];
    const nameElement = studentElement.getElementsByTagName("name")[0];
    
    const firstName = nameElement.getElementsByTagName("first")[0].textContent;
    const secondName = nameElement.getElementsByTagName("second")[0].textContent;
    
    const age = studentElement.getElementsByTagName("age")[0].textContent;
    const prof = studentElement.getElementsByTagName("prof")[0].textContent;
    const lang = nameElement.getAttribute("lang");
    
    // Создаем объект студента и добавляем его в итоговый массив
    const student = {
      name: `${firstName} ${secondName}`,
      age: parseInt(age, 10),
      prof,
      lang,
    };
    
    result.list.push(student);
  }
  
  // Выводим результат в консоль
  console.log(result);