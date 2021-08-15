<template>
  <Default>
    <div>
      <ul class='p-16'>
        <li v-for="rec in recommendations" :key="rec.slug">
          <nuxt-link :to="{name: 'rec-slug', params: { slug: rec.slug }}">
            <div>
              <h2 class='text-xl'>{{ rec.title }}</h2>
              <p>{{ formatDate(rec.date) }}</p>
            </div>

          </nuxt-link>
        </li>
      </ul>
    </div>
  </Default>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const recommendations = await $content('recommendations').sortBy('createdAt', 'asc').fetch()

    return { recommendations }
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}

      return new Date(date).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
