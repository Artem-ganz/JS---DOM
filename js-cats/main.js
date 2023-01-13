const pets = [
    {
      name: "Скоттиш фолд", // Порода
      description: 'Золотой шотландский вислоухий кот ждет в гости кошечку для совместного времяпровождения. Одной встречи достаточно для получения красивого и здорового потомства. У полуторагодовалого',
      location: "Київ, Київська область",
      price: "4 500 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/4ZN2o7krAB7SsGcJjX93.webp'
    },
    {
      name: "Скоттиш фолд", // Порода
      description: 'Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.',
      location: "Київ, Київська область",
      price: "1 500 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/o4b5MCkz9QUV6sgVCPzV.webp'
    },
     {
      name: "Другая", // Порода
      description: 'Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех',
      location: "Київ, Київська область",
      price: "1 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/jKmG4ZOy05MmybPcazEl.webp'
    },
     {
      name: "Экзотическая короткошерстная", // Порода
      description: 'Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в',
      location: "Київ, Київська область",
      price: "5000 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/WZ0RZ4x6GQ2VUENFTPrm.webp'
    },
     {
      name: "Экзотическая короткошерстная", // Порода
      description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
      location: "Київ, Київська область",
      price: "1300 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/iV8s1E5lPpU7wdJIAO7K.webp'
    },
    
  ]
  
  let petsContainer = document.querySelector('.pets__container')
  pets.map((pet)=>{
    let price = parseInt(pet.price);
    console.log(price);
    petsContainer.innerHTML += `
        <div class="pets__item">
        <h3 class="pets__name">${pet.name}</h3>
        <img class="pets__img" src="${pet.url}" alt="img">
        <div class="pets__price">${pet.price}</div>
        <p class="pets__description">${pet.description}</p>
        <h5 class="pets__loc">${pet.location}</h5>
        </div> 
    `
  });

  //  переменные конопок
  let btn1 = document.querySelector('.nav__btn1');
  let btn2 = document.querySelector('.nav__btn2');
  let select = document.querySelector('#select');

  // кнопка по клику, от меньшего к большему сортирует
  btn1.onclick = () => {
    petsContainer.innerHTML = "";
    let arraySort = pets.sort((a,b) => parseInt(a.price) - parseInt(b.price));
    pets.map((pet) => {
      petsContainer.innerHTML += `
        <div class="pets__item"> 
        <h3 class="pets__name">${pet.name}</h3>
        <img class="pets__img" src="${pet.url}" alt="">
        <div class="pets__price">${pet.price}</div>
        <p class="pets__description">${pet.description}</p>
        <h5 class="pets__loc">${pet.location}</h5>
      </div>
      `;
    });
  };

  // кнопка по клику сортирует от большего к меньшему
  btn2.onclick = () => {
    petsContainer.innerHTML = "";
    let arraySort = pets.sort((a,b) => parseInt(b.price) - parseInt(a.price));
    pets.map((pet) => {
      petsContainer.innerHTML += `
        <div class="pets__item"> 
        <h3 class="pets__name">${pet.name}</h3>
        <img class="pets__img" src="${pet.url}" alt="">
        <div class="pets__price">${pet.price}</div>
        <p class="pets__description">${pet.description}</p>
        <h5 class="pets__loc">${pet.location}</h5>
      </div>
      `;
    });
  };


