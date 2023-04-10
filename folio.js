let menu = document.querySelector('img');
let menuList = document.createElement('div');
menuList.className = 'list';
menuList.innerHTML = '<li>Portfolio</li> <li>About me</li> <li>Contact</li> ';
document.body.appendChild(menuList);
console.log(menuList.innerHTML);
//console.log(list);
menu.addEventListener('click', function() {
    return(menuList.innerHTML);
    // for (let menuList of )
});
