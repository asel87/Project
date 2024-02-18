const items = document.querySelectorAll(".item");
let imageURLs = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
];
// initially empty
let deviceType = "";
let events = {
  mouse: {
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    start: "touchstart",
    end: "touchend",
  },
};
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};
isTouchDevice();

let currentIndex = 0;

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%"; // Set initial width to 100%
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);
  // Initial CSS properties for all items
  item.style.flex = index === currentIndex ? "9" : "3"; // Set flex to 9 for the first item
  item.style.transition = "flex 0.8s ease";
  item.addEventListener(events[deviceType].start, () => {
    currentIndex = index;
    items.forEach((item, i) => {
      item.style.flex = i === currentIndex ? "9" : "3"; // Expand the current item, contract others
      if (i === currentIndex) {
        img.style.width = "100%"; // Increase the width of the current image a little bit
      } else {
        img.style.width = "100%"; // Reset width for other images
      }
    });
  });
});
