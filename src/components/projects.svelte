<script> 
    import Icon from "@iconify/svelte";

</script>

<main> 
        <p class="writing-headline text-neutral-700 text-sm">Projects</p>

        <p class="text-neutral-800 text-sm my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div class="wrapper mt-2 text-neutral-900"> 
            <div class="writing-item-wrapper flex w-full p-2 gap-2 rounded-md border border-neutral-200">
                <div class="bg-orange-400 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon icon="material-symbols:code" class="text-2xl text-white" />
                </div>
                <div>
                    <p>Project title</p>
                </div>
            </div> 
        </div> 
</main>

<style lang="postcss">
    .writing-headline {
        font-family: "JetBrains Mono", monospace;
        font-optical-sizing: auto;
        font-style: normal;
    }
</style>