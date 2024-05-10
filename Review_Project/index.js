const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const person_img = document.getElementById("person-img");
const name = document.getElementById("name");
const role = document.getElementById("role");
const review = document.getElementById("review");

const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
const random_btn = document.querySelector(".random-btn");

let container_item = 0;

document.addEventListener("DOMContentLoaded",()=>{
    setShowPerson(reviews[container_item]);
})

function setShowPerson(item){
    console.log(item);
    person_img.src = item.img;
    name.textContent = item.name;
    role.textContent = item.job;
    review.textContent = item.text;
}

next_btn.addEventListener("click",()=>{
    container_item++;
    if(container_item>reviews.length-1) {container_item = 0;}
    setShowPerson(reviews[container_item]);
})

prev_btn.addEventListener("click",function(){
    container_item--;
    if(container_item<0) {container_item = reviews.length-1};
    setShowPerson(reviews[container_item]);
})

random_btn.addEventListener("click",function(){
    container_item = Math.floor(Math.random()*reviews.length);
    console.log(container_item);
    setShowPerson(reviews[container_item]);
})

