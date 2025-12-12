<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.col-lg-5.text-center
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/img-sintesis.png", alt="Ícono síntesis", data-aos="fade-up")
      .col-lg-7
        p El Componente Formativo CF02 desarrolla las competencias necesarias para verificar el progreso de las acciones de mercadeo mediante el uso estratégico del sistema de monitoreo. A lo largo de sus siete capítulos, el aprendiz explora cómo medir resultados, interpretar hallazgos, formular acciones de mejora y documentar propuestas con criterios técnicos, éticos y colaborativos.
        p.mb-0 Se abordan temas como el uso de indicadores, la ejecución del monitoreo, la estimación de resultados esperados y la validación con equipos responsables.
    .row.justify-content-center
      .col-auto.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura muestra la síntesis del componente formativo “Análisis estratégico de acciones de mercadeo”, el cual consta de siete capítulos. Inicia con medición de resultados abordando su concepto, tipos y técnicas; continuando con las acciones de mercadeo, donde se desarrollan los tipos, los objetivos y la relación con el plan de mercadeo. Sigue con la ejecución del sistema de monitoreo, incluyendo uso de indicadores, herramientas, periodicidad y formatos de evaluación; luego se presentan Interpretación de resultados, con comparación con metas establecidas, desviaciones y logros, y técnicas de comunicación de hallazgos; se profundiza en acciones de mejora, clasificadas diagnóstico, formulación de acciones y justificación técnica; se estudia la viabilidad y pertinencia, abordando análisis de recursos disponibles, estimación de resultados esperados y validación con equipos responsables; y culmina con la documentación de propuestas, donde se analiza la presentación, los formatos ejecutivos, los informes técnicos y los ajustes colaborativos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
