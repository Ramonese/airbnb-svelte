import House from "../src/routes/houses/_House.svelte";

export default {
  title: "House Card",
  parameters: {
    notes: "This is a description of component"
  }

};

export const complete = () => ({
  Component: House,
  props: { 
    title: "Beautiful flat in Ostuni!", 
    type: "Entire house", 
    picture: "localhost:3000/static/img/house-1.jpg",
    town: "Ostuni",
    rating: "200",
    reviewsCount: "105",
    superhost: true,
    id: "1772"
  },
  parameters: {
    notes: "This is another note"
  },
   
});
export const basic = () => ({
  Component: House,
  props: {
    title: "",
    type: "Entire house",
    picture: "/assets/img/house-1.jpg",
    town: "London",
    rating: "0",
    reviewsCount: "0",
    superhost: false,
    id: "22"
  }
});
