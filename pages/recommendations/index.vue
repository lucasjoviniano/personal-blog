<template>
  <Default>
    <div>
      <ul class='p-16'>
        <li v-for="rec of recommendations" :key="rec.slug">
          <a :href='rec.link' target='_blank' rel='noopener'>
            <div>
              <h2 class='text-xl'>{{ rec.title }}</h2>
              <p>{{ formatDate(rec.date) }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </Default>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const recommendations = await $content('recommendations').sortBy('createdAt', 'desc').fetch()

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
