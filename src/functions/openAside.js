export const showMenu = () => {
     const mobileMenu = document.querySelector("aside");
     if (!mobileMenu.classList.contains('flex')) {
          mobileMenu.classList.remove('hidden')
          mobileMenu.classList.remove('hiddenAside');
          mobileMenu.classList.add('flex');
          mobileMenu.classList.add('showAside');
     }
     // mobileMenu.classList.remove('showAside');
     // mobileMenu.classList.remove('flex');
     // mobileMenu.classList.add('hiddenAside');
     //  else {
     // }
}