<script lang="ts">
	import ButtonLink from "$lib/ButtonLink/ButtonLink.svelte";
    import clsx from "clsx";
    import Gear from '~icons/ph/gear';

    function handleStart(event: MouseEvent): void {
        console.log('Button clicked!', event);
    }
</script>

<section class="mb-[100px]">
    <div class="w-full max-w-6xl mx-auto text-center text-white">
        <div class="relative w-full">
            <div class="absolute -z-10 aspect-video w-full
                max-w-2xl rounded-full bg-violet-500/40
                mix-blend-screen blur-[120px] filter" 
            />
            <h2 class="text-balance text-center text-5xl font-medium md:text-7xl">
                Your Videos.<br>Your Workflow.
            </h2>
            
            <div class="relative mt-16 grid items-center gap-8 
                rounded-xl border border-violet-50/20 
                bg-gradient-to-b from-gray-50/15 to-gray-50/5 
                px-8 py-8 backdrop-blur-sm lg:grid-cols-3 
                lg:gap-0 lg:py-12"
            >
            <div class="grid-background" />
                <div>
                    <div class="w-fit rounded-lg bg-violet-800 p-4 text-3xl">
                        <Gear />
                    </div>
                    <h3 class="mt-6 text-2xl font-normal">Create the next viral video.</h3>
                    <div class="prose prose-invert mt-4 mb-6 max0w-xl">
                        <p>Body text that trails on as this section should have a lot of words compared to something else.</p>
                        <p>Here is another p tag to add some more text and see how its formatted.</p>

                    </div>
                    <ButtonLink onClick={handleStart}>Get started</ButtonLink>
                </div>
                <img class={clsx("opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]")} 
                    src={"/showcase-image.png"} 
                    alt="Logo of our company"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

            </div>

        </div>
    </div>
</section>

<style>
    .grid-background {
        background-image: url('/grid-pattern.png');
        position: absolute;
        inset: 0;
        background-repeat: repeat;
        z-index: -1;
        background-position: center;
        opacity: .15;
        mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
    }
</style>