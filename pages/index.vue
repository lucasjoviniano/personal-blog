<template>
  <Default>
    <div class="grid grid-cols-1 mt-8 lg:m-16 auto-rows-max">
      <h1 class="mb-4 text-6xl font-black">Olá, eu sou o Lucas!</h1>
      <p class="text-lg">
        Estudante de Ciência da Computação na Universidade Federal de Viçosa e
        fundador do <a href='https://oslu.org/' target='_blank' rel='noopener norreferer' class='underline'>Open Source Lab UFV</a>. Além disso, eu também escrevo as vezes.
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <section class="mt-6">
          <h1 class="mb-4 text-2xl font-black lg:text-4xl">
            Meus Interesses/Inspirações
          </h1>
          <ul class="text-lg list-disc list-inside">
            <li>
              <a
                href="https://ose-21.org/"
                class="underline"
                target="_blank"
                rel="noopener noreferer"
                >Open Source Everything</a
              >
            </li>
            <li>Anti-LGBTQIA+fobia</li>
            <li>Antirracismo</li>
            <li>
              <a
                href="https://pt.wikipedia.org/wiki/Decrescimento_(economia)"
                class="underline"
                target="_blank"
                rel="noopener noreferer"
                >Decrescimento Econômico</a
              >
            </li>
          </ul>
        </section>

        <section class="mt-6">
          <h1 class="mb-4 text-2xl font-black lg:text-4xl">Em Tecnologia</h1>
          <ul class="text-lg list-disc list-inside">
            <li>Programação Funcional</li>
            <li>Computação Científica</li>
            <li>Programação Criativa</li>
          </ul>
        </section>
      </div>
    </div>
  </Default>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: '02107002-33e1-4187-a71d-b74a6179882f',
          level: '1',
          where: 'Instituto Federal do Espírito Santo',
          title: 'Técnico em Administração',
          type: 'Curso Técnico',
          logoUrl: 'career-logos/ifes.png',
          period: { begin: '2015-04', end: '2018-12' },
        },
        {
          id: 'e30c66c1-d594-48fb-a6fa-d9e6219e1b8d',
          level: '2',
          where: 'Universidade Federal de Viçosa',
          title: 'Ciência da Computação',
          type: 'Graduação',
          logoUrl: 'career-logos/ifes.png',
          period: { begin: '2019-03' },
        },
      ],
      currentDate: new Date(),
    }
  },
}
</script>
