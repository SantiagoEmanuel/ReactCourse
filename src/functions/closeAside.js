export const closeAside = () => {
  if (document.querySelector("aside").classList.contains("max-md:flex")) {
    document.querySelector("aside").classList.remove("showAside");
    document.querySelector("aside").classList.add("hiddenAside");
    setTimeout(() => {
      document.querySelector("aside").classList.remove("max-md:flex");
    }, 200);
  }
};
