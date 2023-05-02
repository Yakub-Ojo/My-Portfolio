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
console.log(navItems);
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
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],

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
  `;
}

const model = document.getElementById('modal1');
for (let j = 0; j < projectData.length; j += 1) {
  const projectBtn = document.querySelectorAll(`[id=btn-${j}]`);
  projectBtn.forEach((e) => {
    e.addEventListener('click', () => {
      // console.log("Button is clicked");
      model.style.display = 'block';
      model.innerHTML = `
      <div class="pop-up">
      <span class="close-btn">X</span>
      <img src= "${projectData[j].imgPopMob}" alt="popup-image" class="pop-mobile-image">
      <img class="pop-image" src="${projectData[j].imgPopDes}" alt="card-image1" />
      <div class="pop-details">
        <h3>${projectData[j].headPop}</h3>
        <div class="pop-button">
          <button type="button">See live <img src="Icons/Icon.svg" alt=""></button>
          <button type="button"> <span>See source</span> <img src="Icons/Vector.svg" alt=""></button>
        </div>
      </div>
      <ul class="pop-list">
        <li>${projectData[j].tags2[0]}</li>
        <li>${projectData[j].tags2[1]}</li>
        <li>${projectData[j].tags2[2]}</li>
        <li>${projectData[j].tags2[3]}</li>
        <li>${projectData[j].tags2[4]}</li>
      </ul>
  
      <ul class="pop-list-mobile">
        <li>${projectData[j].tagMob[0]}</li>
        <li>${projectData[j].tagMob[1]}</li>
        <li>${projectData[j].tagMob[2]}</li>
      </ul>
      <p class="pop-desc">${projectData[j].text}</p>
      <div class="pop-button-mobile">
        <button type="button"> <span>See live </span> <img src="Icons/Icon.svg" alt=""></button>
        <button type="button"> <span>See source</span> <img src="Icons/Vector.svg" alt=""></button>
      </div>
    </div>
      `;
      const close = document.querySelector('.close-btn');
      close.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}
