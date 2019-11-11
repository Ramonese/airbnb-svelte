<script>
  export let segment;
</script>

<style>
  nav {
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
		list-style: none;
		display: inline-flex

  }

  
  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  .nav-container {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 1px solid lightgrey;
		background: black;
		color: white;
  }
	.nav__logo {
		width: 100px;
		height: auto;
	}
	nav {
		text-align: right;
	}
</style>

<div class="nav-container">
  <a href="/"><img src="./static/logo-192.png" class="nav__logo" alt="logo" /></a> 
  <nav>
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href="become-a-host">
          Become a host
        </a>
      </li>
      <li>
        <a class={segment === 'register' ? 'selected' : ''} href="register">
          Sign up
        </a>
      </li>
      <li>
        <a class={segment === 'login' ? 'selected' : ''} href="login">Log in</a>
      </li>
    </ul>
  </nav>
</div>
