<template>
  <h1 class="text-3xl my-8">Blog Posts</h1>
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Posts :posts="posts" />
  </section>
</template>

<script setup>
const { data: posts } = useAsyncData('posts', () => {
  return queryContent('/blog')
  .find()
})
</script>