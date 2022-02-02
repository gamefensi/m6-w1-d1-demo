const gadgetFactory = require("./gadgetFactory");

const myLaptop = gadgetFactory.createGadget("Laptop", {
  ram: 8,
  ssd: 256,
  name: "Bab's MacBook Pro"
});

const myTablet = gadgetFactory.createGadget("Tablet", {
  ram: 4,
  hdd: 128,
  network: "4G",
  name: "Bab's iPad"
});

const myOtherLaptop = gadgetFactory.createGadget("Laptop", {
  ram: 16,
  ssd: 256,
  name: "Bab's Gaming Laptop"
})

const myOtherTablet = gadgetFactory.createGadget("Tablet", {
  ram: 8,
  hdd: 256,
  network: "5G",
  name: "Bab's Super Tablet"
});

// add console.log here
console.log(myLaptop);
console.log(myTablet);
console.log(myOtherLaptop);
console.log(myOtherTablet);
