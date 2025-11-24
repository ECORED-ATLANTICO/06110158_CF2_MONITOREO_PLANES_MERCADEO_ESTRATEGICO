<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.col-lg-5.text-center
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/img-intro.png", alt="Ícono síntesis", data-aos="fade-up")
      .col-lg-7
        p En un entorno empresarial dinámico y competitivo, el monitoreo estratégico de los planes de mercadeo se convierte en una herramienta clave para garantizar su efectividad y sostenibilidad. Este componente brinda al aprendiz las bases teóricas y prácticas para identificar indicadores relevantes, aplicar herramientas de seguimiento y analizar resultados con criterio técnico y ético. 
        p.mb-0 A través de actividades reflexivas, comparativas y aplicadas, se fortalece la toma de decisiones basada en evidencia, se promueve la mejora continua y se potencia la capacidad de articular acciones de mercadeo con los objetivos organizacionales, el componente invita a transformar datos en conocimiento útil, accesible y estratégico.
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
