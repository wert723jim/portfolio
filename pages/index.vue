<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">Hello, I'm Jim !</h1>
    <p class="text-base text-gray-900 italic">Web Front-End Developer</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">Introduction</h2>
      <p class="text-lg py-2">
        I am a Web Front-End Developer from Taiwan. Try to use the programming skills to solve problems that people encounter in life and make their life more convenient and efficient. Believing that we can be whoever we want to be if we have dedicated our time into it.
      </p>
      <p class="text-lg py-2">
        I have been writing web for 1 year. I am working on some side projects to practice and sharpen my programming skills.
      </p>
    </div>
    <img src="~/assets/images/5404.jpg" alt="" class="w-1/2 object-cover md:max-w-sm p-8 mx-auto">
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Posts :posts="posts" />
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryContent('/blog')
    .sort({ date: 1 })
    .limit(3)
    .find()
})
</script>