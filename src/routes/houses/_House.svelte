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

<section>

<img src="{picture}" alt="{title}"/>
<p>{type} - {town}</p>
<p>{rating} ({reviewsCount}) {superhost ? '- Superhost' : ''}</p>

</section>
