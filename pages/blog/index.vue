<template>
    <Default>
        <div>
            <ul class="p-16">
                <li v-for="article of articles" :key="article.slug">
                    <nuxt-link :to="{name: 'blog-slug', params: { slug: article.slug }}">
                        <div>
                            <h2 class="text-xl">{{ article.title }}</h2>
                            <p>{{ formatDate(article.date) }}</p>
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
        const articles = await $content('articles')
            .only(['title', 'date', 'description', 'slug'])
            .sortBy('createdAt', 'asc')
            .fetch()

        return { articles }
    },

    methods: {
        formatDate(date) {
            const options = {year: 'numeric', month: 'long', day: 'numeric'}

            return new Date(date).toLocaleDateString('pt-br', options)
        }
    }
}
</script>