export const showMenu = () => {
     const mobileMenu = document.querySelector("aside");
     if (!mobileMenu.classList.contains('max-md:flex')) {
          mobileMenu.classList.remove('hidden')
          mobileMenu.classList.remove('hiddenAside');
          mobileMenu.classList.add('max-md:flex');
          mobileMenu.classList.add('showAside');
     }
     // mobileMenu.classList.remove('showAside');
     // mobileMenu.classList.remove('flex');
     // mobileMenu.classList.add('hiddenAside');
     //  else {
     // }
}