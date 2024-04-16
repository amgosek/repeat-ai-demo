<script>
    import WordMark from "./WordMark.svelte";
    import {menuItems} from '$lib/menuItems';
</script>

<footer class="bg-gray-700 text-white p-4 text-center">
    <div class="flex justify-between items-center w-full">
        <a href="/">
            <WordMark />
        </a>
        <p>© 2024 My Website. All rights reserved.</p>
        <ul class="flex space-x-4">
            {#each menuItems as { text, href }}
              <li><a href={href} class="hover:text-gray-300">{text}</a></li>
            {/each}
        </ul>
    </div>
</footer>
  