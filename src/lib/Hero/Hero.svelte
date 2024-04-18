<script lang="ts">
    import TriangleGrid from "./TriangleGrid.svelte";
    import ButtonLink from "$lib/ButtonLink/ButtonLink.svelte";

    function handleStart(event: MouseEvent): void {
        console.log('Button clicked!', event);
        // Add your action for "Get Started" here
    }
</script>

<section class="px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24 flex flex-col items-center">
    <div class="w-full max-w-6xl mx-auto text-center text-white">
        <!-- TriangleGrid with controlled width -->
        <div class="relative w-full">
            <TriangleGrid />
        </div>
        
        <h1 class="max-w-3xl mx-auto text-5xl font-medium md:text-7xl">Videos they'll watch again. And again.</h1>
        <p class="mt-6 max-w-md mx-auto text-gray-300">Discover our services and offerings and find out more about how we can help you. Reach out to us now before its too late!</p>
        <ButtonLink onClick={handleStart} class="mt-8 bg-gray-600 opacity-40 p-2 rounded-md">
            Get Started
        </ButtonLink>
        
        <!-- Image with controlled width matching TriangleGrid -->
        <div class="glass-container mt-16 w-full">
            <div class="relative w-full">
                <div class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 mix-blend-screen blur-[120px] filter"></div>
                <div class="absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/50 mix-blend-screen blur-[120px] filter"></div>
                <img class="rounded-lg w-full max-w-6xl mx-auto" src={"/hero.jpg"} alt="Logo of our company">
            </div>
        </div>
    </div>
</section>
