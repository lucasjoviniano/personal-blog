<template>
  <Default>
    <article>
      <h2 class="text-4xl my-8">{{ recommendation.title }}</h2>
      <nuxt-content :document="recommendation"/>
    </article>
  </Default>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recommendation = await $content('recommendations', params.slug).fetch()

    return { recommendation }
  }
}
</script>

<style>
.nuxt-content p {
  padding: 1rem;
}

.nuxt-content h1 {
  font-size: 2.25rem;
  line-height: 2rem;
  padding: 1rem;
  font-weight: 700;
}

.nuxt-content ol{
  list-style-type: disc;
  list-style-position: inside;
  padding: 1rem;
}

.nuxt-content p > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  max-width: 500px;
}
</style>
