<script>
  const profileImage = $state('https://firebasestorage.googleapis.com/v0/b/qurban-f58a1.appspot.com/o/pic.png?alt=media&token=f07470d1-28a9-4512-996b-7c423f410bcc')
  import Writings from "./components/writings.svelte";
</script>


<div class="min-h-screen w-full md:w-1/2 text-left bg-white pt-15 xs:pt-8 xs:px-5">
  <div>
    <div class="heading-section"> 
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
            <img src={profileImage} alt="Ade Mahendra" class="object-cover w-full h-full" />
          </div>
          <div>
            <h2 class="font-semibold text-gray-900 text-lg name">Ade Mahendra</h2>
            <p class="text-gray-600 text-[13px] lg:text-[15px] headline">#SoftwareEngineer #SocialActivist</p>
          </div>
        </div>
    
        <p class="text-neutral-700 text-base md:text-[16px] xl:text-[16px] mb-5 about">
          Well known as a Software Engineer, Social Activist, and Community Leader. 3+ YoE in diverse industries, Involved in a range of social activities and projects. Currently working at <a href="https://talentvis.com/" class="link">Talentvis</a> as a Font-End Developer. 
          Building <a href="https://github.com/hendradem" class="link">Mufindlabs</a> to deliver solutions that drive societal impact. 
          
        </p>
    
        <div class="flex items-start gap-2 mb-5">
          <a href="https://www.linkedin.com/in/hendradem" target="_blank" class="btn-black">
            See full profile →
          </a>
          <a href="https://github.com/hendradem" class="btn-white">
            Collaboration 🤾🏻‍♂️
          </a>
        </div> 
    </div>
  
    <div class="writing-section">
      <Writings />
    </div> 
  </div>
</div>

<style lang="postcss">
.about, .name, .headline {
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
