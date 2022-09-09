const menuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLink.length; i++) {
    let link = menuLink[i];
    let item = link.closest('.menu__item');
    
    const menuSub = item.querySelector('.menu_sub');
	link.onclick = function() {
		if(menuSub) {
			menuSub.classList.toggle('menu_active');
			return false;
		}
    }
}
