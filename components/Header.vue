<template>
    <nav class="flex items-center justify-between flex-wrap p-2">
        <div class="font-bold text-2xl mr-16"><NuxtLink to="/"> jovi. </NuxtLink></div>
        <div class="lg:flex-grow">
            <span class="block mt-4 md:inline-block md:mt-0 mr-4 underline">
                <NuxtLink to="/">
                    home
                </NuxtLink>
            </span>
            <span href="/blog" class="block mt-4 md:inline-block md:mt-0 mr-4 underline">
                <NuxtLink to="/blog">
                    posts
                </NuxtLink>
            </span>
            <span href="/recommendation" class="block mt-4 md:inline-block md:mt-0 mr-4 underline">
                <NuxtLink to="/recommendation">
                    recomendações
                </NuxtLink>
            </span>
            <a href="#" class="block mt-4 md:inline-block md:mt-0 mr-4 underline">
                ouvindo
            </a>
            <a href="#" class="block mt-4 md:inline-block md:mt-0 mr-4 underline">
                assistindo
            </a>
        </div>
    </nav>
</template>
