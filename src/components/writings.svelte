<script>
    import { onMount } from 'svelte';
    import { formatTheDate } from '../lib/date';

    let wiritingsData = null
    const fetchWritings = async () => { 
        const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hendradem"
		
        fetch(url)
            .then(response => response.json())
            .then(data => wiritingsData = data)
            .catch(error => console.error('Error:', error)); 
	}

    onMount(() => {
		fetchWritings()
	});
</script>

<main>
    {#if wiritingsData}
        <p class="writing-headline text-neutral-700 text-sm">{wiritingsData?.feed?.description}</p>

        <div class="wrapper mt-5">
            {#each wiritingsData?.items as item}
                <a href={item?.link}>
                    <div class="writing-item-wrapper w-full mb-8 hover:cursor-pointer">
                        <div class="mx-auto">
                            <p class="text-xs tracking-widest mb-2 text-gray-500 uppercase">
                                { formatTheDate(item?.pubDate)}
                            </p>
                            
                            <h2 class="text-md truncate font-semibold mb-2 text-gray-900">
                                { item?.title }
                            </h2>
                            
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti, mollitia laborum impedit omnis facilis, voluptas nobis expedita cumque quia voluptatibus amet labore! Dolor reiciendis expedita, ducimus sed dolorem iste?
                            </p>
                        </div>  
                    </div>
                </a>
            {/each}
        </div>
    {/if}
</main>

<style lang="postcss">
    .writing-headline {
        font-family: "JetBrains Mono", monospace;
        font-optical-sizing: auto;
        font-style: normal;
    }
</style>