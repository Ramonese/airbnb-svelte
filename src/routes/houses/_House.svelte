<script>
  export let type;
  export let town;
  export let title;
  export let rating;
  export let picture;
  export let reviewsCount;
  export let superhost;
  export let id;
</script>

<section class="house__card">

<img src="{picture}" alt=""/>
<h2>{title}</h2>
<p>{type}</p>
<h3>{town}</h3>
<p>{rating} ({reviewsCount}) {superhost ? '- Superhost' : ''}</p>
<a href="/houses/{id}">{id}</a>

</section>
<style>
.house__card {
  width: auto;
  padding: 2em;
  border-radius: 5px;
  background: lightseagreen;
  max-width: 30rem;
}
h2 {
  color: black
}
img {
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>