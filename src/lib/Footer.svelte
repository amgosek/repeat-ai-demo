<script>
    import WordMark from "./WordMark.svelte";
    import {menuItems} from '$lib/menuItems';
</script>

<footer class="">
    <nav 
        class="flex flex-col items-center 
            justify-between gap-6 border-t 
            border-gray-600 px-8 py-7 md:flex-row bg-gray-950"
    >
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
    </nav>
</footer>
  