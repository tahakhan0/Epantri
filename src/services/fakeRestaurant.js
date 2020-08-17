// const restaurant = [
//   {
//     id: "jgabb4ub24218088014011",
//     name: "Shezan",
//   },
// ];

const menu = [
  {
    id: "5b21ca3eeb7f6fbccd47181b",
    name: "Chicken Tikka",
    menu: { _id: "5b21ca3eeb7f6fbccd471814", category: "Chicken" },
    price: "$5.99",
    calories: "1200",
    available: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181c",
    name: "Chicken Masala",
    menu: { id: "5b21ca3eeb7f6fbccd471814", category: "Chicken" },
    price: "$7.99",
    calories: "1200",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181d",
    name: "Chicken Dum Ka Margh",
    menu: { id: "5b21ca3eeb7f6fbccd471814", category: "Chicken" },
    price: "$12.99",
    calories: "1200",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181e",
    name: "Mutton Masala",
    menu: { id: "5b21ca3eeb7f6fbccd471815", category: "Mutton" },
    price: "$6.99",
    calories: "1200",
    available: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181f",
    name: "Mutton Fry",
    menu: { id: "5b21ca3eeb7f6fbccd471815", category: "Mutton" },
    price: "$11.99",
    calories: "1200",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181g",
    name: "Chicken Fried Rice",
    menu: { id: "5b21ca3eeb7f6fbccd471816", category: "Rice" },
    price: "$12.99",
    calories: "1400",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181h",
    name: "Mutton Biryani",
    menu: { id: "5b21ca3eeb7f6fbccd471816", category: "Rice" },
    price: "$19.99",
    calories: "1000",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181i",
    name: "Chicken Biryani",
    menu: { id: "5b21ca3eeb7f6fbccd471816", category: "Rice" },
    price: "$19.99",
    calories: "1900",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181j",
    name: "Ice cream",
    menu: { id: "5b21ca3eeb7f6fbccd471817", category: "Deserts" },
    price: "$19.99",
    calories: "1900",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181k",
    name: "Gulab Jamun",
    menu: { id: "5b21ca3eeb7f6fbccd471817", category: "Deserts" },
    price: "$19.99",
    calories: "1900",
    available: true,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181l",
    name: "Gajar ka Halwa",
    menu: { id: "5b21ca3eeb7f6fbccd471817", category: "Deserts" },
    price: "$19.99",
    calories: "1900",
    available: true,
  },
];

const categories = [
  {
    id: "5b21ca3eeb7f6fbccd471815",
    name: "Mutton",
  },
  {
    id: "5b21ca3eeb7f6fbccd471814",
    name: "Chicken",
  },
  {
    id: "5b21ca3eeb7f6fbccd471816",
    name: "Rice",
  },
  {
    id: "5b21ca3eeb7f6fbccd471817",
    name: "Deserts",
  },
];

const weeklyTimings = [
  {
    name: "Monday",
    start: "9",
    startPeriod: "AM",
    end: "18",
    endPeriod: "AM",
  },
  {
    name: "Tuesday",
    start: "9",
    end: "1",
    startPeriod: "AM",
    endPeriod: "AM",
  },
  {
    name: "Wednesday",
    start: "9",
    end: "3",
    startPeriod: "AM",
    endPeriod: "AM",
  },
  {
    name: "Thursday",
    start: "9",
    end: "6",
    startPeriod: "AM",
    endPeriod: "AM",
  },
  {
    name: "Friday",
    start: "9",
    end: "1",
    startPeriod: "AM",
    endPeriod: "AM",
  },
  {
    name: "Saturday",
    start: "12",
    end: "1",
    startPeriod: "PM",
    endPeriod: "AM",
  },
  {
    name: "Sunday",
    start: "9",
    end: "6",
    startPeriod: "AM",
    endPeriod: "PM",
  },
];

const menuTags = [
  {
    name: "breakfast",
    start: "8",
    end: "12",
    startPeriod: "AM",
    endPeriod: "PM",
  },
  {
    name: "lunch",
    start: "1",
    end: "5",
    startPeriod: "PM",
    endPeriod: "PM",
  },
  {
    name: "dinner",
    start: "6",
    end: "11",
    startPeriod: "PM",
    endPeriod: "PM",
  },
];

export function getWeeklyTimings() {
  return weeklyTimings;
}

export function getMenuTags() {
  return menuTags;
}

export function getMenu() {
  return menu;
}

export function getCategories() {
  return categories;
}
