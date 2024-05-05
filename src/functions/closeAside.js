export const closeAside = () => {
     if (document.querySelector('aside').classList.contains('flex')) {
          document.querySelector('aside').classList.remove('showAside');
          document.querySelector('aside').classList.add('hiddenAside');
          setTimeout(() => {
               document.querySelector('aside').classList.remove('flex')
          }, 200)
     }
}