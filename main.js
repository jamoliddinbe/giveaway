const menu = [
    {
      id: 0,
      name: "jamoliddinbek",
      age: 16,
      img: "./img/odam.jpeg",
      home: `Novza `,
    },
    {
      id: 1,
      name: "ahmadjon",
      age: 18,
      img: "./img/odam.jpeg",
      home: ` Turkiston `,
    },
    {
      id: 2,
      name: "Shukurullo",
      age: 19,
      img: "./img/odam.jpeg",
      home: `Milliy bog`,
    },
    {
      id: 3,
      name: "Begzod",
      age: 14,
      img: "./img/odam.jpeg",
      home: ` Hadra `,
    },
    {
      id: 4,
      name: "Toxir",
      age: 18,
      img: "./img/odam.jpeg",
      home: ` Chilonzor `,
    },
    {
      id: 5,
      name: "Mominxoja",
      age: 15,
      img: "./img/odam.jpeg",
      home: `Tashkent city`,
    },
    {
      id: 6,
      name: "Muhammad",
      age: 17,
      img: "./img/odam.jpeg",
      home: `Olmazor `,
    },
    {
      id: 7,
      name: "Abdurakhim",
      age: 20,
      img: "./img/odam.jpeg",
      home: ` Milliy bog `,
    },
    {
      id: 8,
      name: "Sherxon",
      age: 18,
      img: "./img/odam.jpeg",
      home: `Paxtakor`,
    },
    {
        id: 9,
        name: "Ozodbek",
        age: 18,
        img: "./img/odam.jpeg",
        home: `Chorsu`,
      },
      {
        id: 10,
        name: "Rahimov",
        age: 18,
        img: "./img/odam.jpeg",
        home: `Toshkent`,
      },
      {
        id: 11,
        name: "Qodirali",
        age: 20,
        img: "./img/odam.jpeg",
        home: `Chilonzor`,
      },    
      {
        id: 12,
        name: "Saidakmal",
        age: 18,
        img: "./img/odam.jpeg",
        home: `Dostlik`,
      },
  ];



let p = document.querySelector('.box2')
let p2 = document.querySelector('.box3')
let p3 = document.querySelector('.box4')
let p4 = document.querySelector('.box')
let btn =  document.querySelector('.btn').onclick = myf


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
getRandomInt(13)


function myf (){
menu.filter(item => {
    if ( getRandomInt(13) == item.id ) {
      p.innerHTML = item.name,
      p2.innerHTML = item.age,
      p3.innerHTML = item.home,
      p4.src = item.img
    }
  })
}

