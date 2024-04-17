<script>
    import { bentoItems } from '$lib/bentoItems';
	import clsx from 'clsx';
</script>

<section class="mb-[50px]">
    <div class="w-full max-w-6xl mx-auto text-center text-white">
        <div class="relative w-full">
            <h2 class="mx-auto bg-clip-text text-balance text-center text-5xl font-medium md:text-7xl max-w-3xl">
                The new
            </h2>
            <h2 class="mx-auto bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent text-balance text-center text-5xl font-medium md:text-7xl max-w-3xl">
                Gold Standard
            </h2>
            <div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
                <p>Bento body that breaks up the section between the heading above and the section under.</p>
            </div>
            <div class="mx-auto grid mt-16 max-w-4xl grid-rows-
            [auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
                {#each bentoItems as item}
                <div class={clsx("grid glass-container row-span-3 grid-rows-subgrid gap-4 rounded-lg bg-gray-950/60 p-4 before:bg-gray-100/10", item.wide ? 'md:col-span-2' : 'md:col-span-1')}>
                    <h3 class="text-2xl">{item.title}</h3>
                    <p class="max-w-md text-balance text-gray-300">{item.body}</p>
                    <img class="max-h-36 w-auto" src={item.img} alt={item.title} />
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
