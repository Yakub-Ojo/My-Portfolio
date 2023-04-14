const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close_icon');
const menu = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const { body } = document;

menuBtn.addEventListener('click', () => {
  closeBtn.style.display = 'block';
  menuBtn.style.display = 'none';
  menu.style.display = 'Flex';
  overlay.classList.remove('hidden');
  body.style.overflow = 'hidden';
});

const closeMenu = () => {
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  menu.style.display = 'none';
  overlay.classList.add('hidden');
  body.style.overflow = 'scroll';
};

closeBtn.addEventListener('click', () => {
  closeMenu();
});

const navItems = document.querySelectorAll('.nav-list a');
if (window.innerWidth < 767) {
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
}



// THE MODAL POP UP SECTION STARTS 


const projectData = [
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: "Keeping track of hundreds of components",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ["Ruby on Rails", "CSS", "JavaSCript", "HTML"],
    tags2: ["Codepen", "Github", "Javascript", "Boostrap", "Terminal"],
    tagMob: ["Ruby on Rails", "CSS", "Javascript"],    
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: "Keeping track of hundreds of components",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ["Ruby on Rails", "CSS", "JavaSCript", "HTML"],
    tags2: ["Codepen", "Github", "Javascript", "Boostrap", "Terminal"],
    tagMob: ["Ruby on Rails", "CSS", "Javascript"],    
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: "Keeping track of hundreds of components",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ["Ruby on Rails", "CSS", "JavaSCript", "HTML"],
    tags2: ["Codepen", "Github", "Javascript", "Boostrap", "Terminal"],
    tagMob: ["Ruby on Rails", "CSS", "Javascript"],    
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: "Keeping track of hundreds of components",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ["Ruby on Rails", "CSS", "JavaSCript", "HTML"],
    tags2: ["Codepen", "Github", "Javascript", "Boostrap", "Terminal"],
    tagMob: ["Ruby on Rails", "CSS", "Javascript"],    
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: "Keeping track of hundreds of components",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ["Ruby on Rails", "CSS", "JavaSCript", "HTML"],
    tags2: ["Codepen", "Github", "Javascript", "Boostrap", "Terminal"],
    tagMob: ["Ruby on Rails", "CSS", "Javascript"],    
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: "Keeping track of hundreds of components",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ["Ruby on Rails", "CSS", "JavaSCript", "HTML"],
    tags2: ["Codepen", "Github", "Javascript", "Boostrap", "Terminal"],
    tagMob: ["Ruby on Rails", "CSS", "Javascript"],  
      
  },
];

const projectPage = document.querySelector('#page');
for (let i = 0; i < projectData.length; i += 1) {
  projectPage.innerHTML += `
  <div class="card flex column">
  <img src="${projectData[i].image}" alt="card-image1" />
  <div class="card-details flex column">
    <h3>${projectData[i].head}</h3>
    <h3>${projectData[i].head2}</h3>
    <ul class="list flex">
      <li>${projectData[i].tags[0]}</li>
      <li>${projectData[i].tags[1]}</li>
      <li>${projectData[i].tags[2]}</li>
      <li>${projectData[i].tags[3]}</li>
    </ul>
    <button type="button" id="btn-${i}">See project</button>
  </div>
</div>
  `
}

