<script>
    import "../app.css";
    import '@fontsource-variable/dm-sans';
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
  </script>
  
  <Header />

  <slot />

  <Footer />