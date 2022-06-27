const mail = document.querySelector('#main');
// 1 варіант

// 1 create element 
const title = document.createElement('h1');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
// 2 add atribute 
title.id = 'title';
figure.id = 'img-div';
img.id = 'image';
figcaption.id = 'img-figcaption';
img.src = 'https://mubi.com/cast/michel-legrand';
img.alt = "Імя товарища";
// 3 add text content 
title.textContent = '-Michel Legar';
figcaption.textContent = 'Michel'; 
// 4 inSErt to page 
main.append(title);
main.append(figure);
figure.append(img);
figure.append(figcaption);

console.log(img.src);



// ----------------------------------------------
// 2 варіант

const article = ` <article id="tribute-info">
        <div id="intro"><p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p></div>
        <p><u>Here are some major facts about him:</u></p>
        <p>
          <ul>
            <li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li>
            <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.</li>
            <li>His sister was a Soprano and a member of the Swingle Singers.</li>
            <li>Along his career, he composed more than two hundred film and television scores.</li>
            <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
            <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
            <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.</li>
            <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
          </ul>
      </p>
        <blockquote id="quote">
          <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
          <cite>-- Michel Legrand</cite>
        </blockquote>
        <hr>
        <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link" href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
      </article>`      

main.insertAdjacentHTML('beforeend', article);


// -------------------------------------------------
// 3 варіант
const items = [
  "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
  "His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.",
  "His sister was a Soprano and a member of the Swingle Singers.",
  "Along his career, he composed more than two hundred film and television scores.",
  "He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.",
  "He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.",
  "He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.",
  "He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.",
];
const createList = (items) => 
  items.reduce((acc, item) => acc + `<li>${item}</li>`, "");

const list = document.querySelector('ul');
list.insertAdjacentHTML("beforeend", createList(items));

console.log(createList(items));


// 4 вариант