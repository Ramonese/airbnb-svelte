import DateRangePicker from "../src/routes/houses/_DateRangePicker.svelte"

export default {
  title: "Calendar"
}
export const dateRangePicker = () => ({
  Component: DateRangePicker,
  parameters: {
    notes: "Calendar"
  },
});