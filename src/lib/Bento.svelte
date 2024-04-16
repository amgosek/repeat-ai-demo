<script>
    import { bentoItems } from '$lib/bentoItems';
</script>

<section>
    <h2>Bento Heading</h2>
    <p>Bento body that breaks up the section between the heading above and the section under.</p>
    {#each bentoItems as item}  <!-- Corrected the variable name from 'bento' to 'bentoItems' -->
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <img src={item.img} alt={item.title} />  <!-- Corrected the image source attribute -->
    {/each}
</section>
