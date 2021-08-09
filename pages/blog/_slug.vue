<template>
    <Default>
        <article>
            <h2 class="text-4xl my-8">{{ article.title }}</h2>
            <nuxt-content :document="article"/>
        </article>
    </Default>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        return { article }
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