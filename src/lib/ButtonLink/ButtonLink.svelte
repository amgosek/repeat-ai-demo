<script lang="ts">
    import clsx from 'clsx';

    export let className: string | undefined = undefined;
    export let onClick: (event: MouseEvent) => void; // Typing the onClick handler
</script>

<button
    {...$$restProps}
    on:click={onClick}
    class={clsx(
        'relative inline-flex items-center justify-center h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 outline-none ring-orange-300 transition-colors hover:border-orange-200/40 hover:text-orange-300 focus:ring-2',
        'after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-orange-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 after:hover:bg-opacity-15',
        className
    )}
>
    <slot />
</button>
