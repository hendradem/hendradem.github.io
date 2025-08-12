<script> 
  const profileImage = $state('https://firebasestorage.googleapis.com/v0/b/qurban-f58a1.appspot.com/o/pic.png?alt=media&token=f07470d1-28a9-4512-996b-7c423f410bcc')
  import Projects from "./components/projects.svelte";
</script>


<div class="min-h-screen w-full md:w-[50%] text-left bg-white pt-15 xs:pt-8 xs:px-5 mb-15">
  <div>
    <div class="heading-section">  
        <div>
          <div class="w-30 h-30 rounded-full overflow-hidden bg-gray-200">
            <img src={profileImage} alt="Ade Mahendra" class="object-cover w-full h-full" />
          </div>
  
          <h2 class="font-semibold text-gray-900 text-[22px] name my-3">Ade Mahendra</h2>
        </div>
    
        <p class="text-neutral-700 text-base md:text-[16px] xl:text-[16px] mb-5 about">
          Well known as a Software Engineer, Social Activist, and a Community Leader. 4+ YoE in diverse industries, Involved in a range of social activities and projects. Currently working at <a href="https://talentvis.com/" class="link">Talentvis</a> as a Font-End Developer. 
          Building <a href="https://mufindlabs.github.io/" class="link">Mufindlabs</a> to deliver solutions that drive societal impact. Interested in Software Engineering, AI/ML, Coffee and Social Activism.
        </p> 

        <p class="text-neutral-700 text-base md:text-[16px] xl:text-[16px] mb-5 about">
          <a href="https://linkedin.com/in/hendradem/" class="link" target="_blank">LinkedIn</a>, 
          <a href="https://medium.com/@hendradem" class="link" target="_blank">Medium</a>, 
          <a href="https://github.com/hendradem" class="link" target="_blank">Github</a>, 
          <a href="https://drive.google.com/file/d/1zVvpb3MoMfjU-hNGICJMED5r3SQ7AHe9/view?usp=sharing" target="_blank" class="link">Get Resume</a>
        </p>  
    </div>

    <div>
      <Projects />
    </div>

  </div>
</div>

<!-- <style lang="postcss">
.about, .name {
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-style: normal;
}
</style> -->
