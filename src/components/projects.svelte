<script> 
    import ProjectsData from "../data/projects.json"
    import Icon from "@iconify/svelte";
</script>

<main> 
    <div class="mb-2">
        <h2 class="font-semibold text-gray-800 text-[18px]">Featured Projects</h2>
    </div>

    <!-- Project Cards -->
    <div class="grid md:grid-cols-1 gap-4">
    {#each ProjectsData as project}
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-neutral-800">
            <div class="flex items-start justify-between mb-2">
            <div class="flex items-center gap-2">
                <span class="text-lg text-neutral-700">
                <Icon icon={project.icon} />
                </span>
                <a
                href={project.link}
                target="_blank"
                class="font-semibold text-lg text-neutral-700"
                >
                {project.title}
                </a>
            </div>
            </div>
            <p class="text-gray-600 text-sm mb-3">
            {project.description}
            </p>
            <div class="flex flex-wrap gap-2 text-xs">
            {#each project.tags as tag}
                <span class={`px-2 py-0.5 ${tag.bgColor} text-gray-800 font-semibold rounded-md`}>
                {tag.label}
                </span>
            {/each}
            </div>
        </div>
        {/each}
    </div>
  

</main>
