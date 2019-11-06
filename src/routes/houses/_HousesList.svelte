<script>
import House from "./_House.svelte";
import houses from "./_houses.js"

</script>
<style>
  .houses {
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 300px 300px;
    grid-gap: 40px;
  }
</style>
<div>
<h2>Place to stay</h2>
<section class="houses">
  {#each houses as house}
    <House {...house} />
  {/each}
</section>
{@debug houses} 
</div>