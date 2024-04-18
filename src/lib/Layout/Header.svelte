<script lang="ts">
    import WordMark from "./WordMark.svelte";
    import {menuItems} from '$lib/Layout/menuItems';  
    import ButtonLink from "$lib/ButtonLink/ButtonLink.svelte";

    function handleStart(event: MouseEvent): void {
        console.log('Button clicked!', event);
        // Add your action for "Get Started" here
    }
</script>
  
<header>
    <nav
        class="flex flex-col items-center 
            justify-between gap-6 border-t 
            border-gray-600 px-8 py-7 md:flex-row bg-gray-950"
    >
        <div class="flex justify-between items-center w-full">
            <a href="/">
                <WordMark />
            </a>
            <ul class="flex space-x-4">
                {#each menuItems as { text, href, buttonlink }}
                  <li>
                    {#if buttonlink}
                      <ButtonLink onClick={handleStart}>
                        {text}
                      </ButtonLink>
                    {:else}
                      <a href={href} class="hover:text-gray-300">{text}</a>
                    {/if}
                  </li>
                {/each}
            </ul>
        </div>
    </nav>
</header>
