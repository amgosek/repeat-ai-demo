<script>
    import "../app.css";
    import '@fontsource-variable/dm-sans';
    import Header from '$lib/Layout/Header.svelte';
    import Footer from '$lib/Layout/Footer.svelte';
  </script>
  
  <Header />
    <slot />
  <Footer />