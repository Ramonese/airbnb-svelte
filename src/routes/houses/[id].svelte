<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`houses/${params.id}.json`)
    const data = await res.json()
    if (res.status === 200) {
      return { house: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import DateRangePicker from './_DateRangePicker.svelte'
  export let house
  let startDate = null
  let endDate = null
  let dateChosen = false
  let numberOfNightsBetweenDates = 0
  const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate) //clone
    const end = new Date(endDate)
    let dayCount = 0
    while (end > start) {
      console.log(dayCount)
      dayCount++
      start.setDate(start.getDate() + 1)
    }
    return dayCount
  }
</script>

<style>
  .house-container {
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-column-gap: 3rem;
  }
  aside {
    border: 1px solid grey;
  }
</style>

<svelte:head>
  <title>{house.title}</title>
</svelte:head>

<div class="house-container">

  <main>
    <header>
      <img src={house.picture} width="100%" style="" alt={house.title} />
    </header>
    <p>{house.type} - {house.town}</p>
    <p>{house.title}</p>
    <p>
      {house.guests} guests - {house.bedrooms} bedrooms - {house.beds} beds - {house.baths}
      baths
    </p>

    {#if house.superhost === true}
      <p>
        <strong>{house.hostName} is a Superhost</strong>
      </p>
      <p>
        Superhosts are experienced, highly rated hosts who are committed to
        providing great stays for guests.
      </p>
    {/if}

    <p>
      {@html house.description}
    </p>

    <a href="mailto:test@gmail.com">Contact host</a>

    <hr />

    <h3>Amenities</h3>

    {#each house.amenities as amenity}{amenity}{/each}

    {#if house.entirePlace === true}
      <p>
        <strong>Entire place</strong>
      </p>
      <p>
        You’ll have the space to yourself and will only share it with those
        you’re traveling with.
      </p>
    {/if}

    <h3>177 Reviews</h3>

    {#each house.reviews as review}
      <!-- <img src={review.avatar} alt="" /> -->
      <p>
        <strong>{review.user}</strong>
      </p>
      <p>{review.date}</p>
      <p>{review.comment}</p>
    {/each}
  </main>
  <aside>
    <h2>Pick date</h2>
    <DateRangePicker
      on:datesChanged={event => {
        startDate = event.detail.startDate
        endDate = event.detail.endDate
        dateChosen = true
        numberOfNightsBetweenDates = calcNumberOfNightsBetweenDates(startDate, endDate)
      }} />
    <p>${house.price}</p>
    {numberOfNightsBetweenDates}
    {#if dateChosen}
      <h2>Price for your stay</h2>
      <p>${house.price} x {numberOfNightsBetweenDates}</p>
      <p>
        Total
        <strong>${house.price * numberOfNightsBetweenDates}</strong>
      </p>
      <button class="reserve">Reserve</button>
    {/if}
  </aside>

</div>
