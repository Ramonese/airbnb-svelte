//import { storiesOf } from '@storybook/svelte';
import House from "../src/routes/houses/_House.svelte";

export default {
  title: "House",
};

export const complete = () => ({
  Component: House,
  props: { 
    title: "Beautiful flat in Ostuni!", 
    type: "Entire house", 
    picture: "/assets/img/house-1.jpg",
    town: "Ostuni",
    rating: "200",
    reviewsCount: "105",
    superhost: true,
    id: "1772"
  },
  notes: "This is note"
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
