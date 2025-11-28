<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Documentación de propuestas

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema7/1.png", alt="Imagen decorativa")
    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 La documentación de propuestas es el paso final del proceso de monitoreo y mejora, consiste en organizar, presentar y formalizar las acciones sugeridas de manera clara, estructurada y accesible para todos los actores involucrados.

    .row.align-items-center.z-2.mb-5
      .d-none.d-lg-block.col-lg-2
        figure
          img.mb-3.mb-lg-0(data-aos="fade-up", src='@/assets/curso/temas/tema7/2.png', alt='Imagen decorativa')
      .col-lg-10
        p Una propuesta bien documentada facilita la toma de decisiones, la trazabilidad de los ajustes y la implementación efectiva de las mejoras. 
        p.mb-0 Este capítulo aborda los elementos clave para presentar las acciones, utilizar formatos ejecutivos, elaborar informes técnicos y realizar ajustes colaborativos que fortalezcan la gestión estratégica del mercadeo.

    Separador
    #t_7_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 7.1 Presentación

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema6/2.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-7
        p.mb-4 Presentar una propuesta de mejora implica comunicar de forma clara, persuasiva y estratégica las acciones que se recomiendan implementar, esta presentación debe adaptarse al público objetivo (directivos, equipos operativos, aliados externos) y considerar el contexto organizacional. 
        p.mb-0 Una buena presentación incluye el diagnóstico, la acción propuesta, la justificación técnica, los recursos requeridos y los resultados esperados, además, debe ser visualmente atractiva, con lenguaje preciso y tono profesional. Por ejemplo, una empresa de servicios puede presentar sus propuestas de mejora en una reunión ejecutiva utilizando diapositivas con gráficos, tablas y ejemplos concretos que faciliten la comprensión y la toma de decisiones.
      
    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Elementos clave en la presentación de propuestas
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema7/4-mob.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src='@/assets/curso/temas/tema7/4.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    .fullwidth-bg.fullwidth-bg--2
    Separador
    #t_7_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 7.2 Formatos ejecutivos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los formatos ejecutivos son plantillas estructuradas que permiten resumir las propuestas de mejora de forma clara, concisa y profesional, estos formatos facilitan la revisión, aprobación y seguimiento de las acciones por parte de los responsables, deben incluir campos como: nombre de la acción, objetivo, diagnóstico, justificación, recursos, responsables, cronograma y métricas de evaluación, además, deben ser accesibles, editables y adaptables a distintos contextos. 

    p.mb-5.z-2 Elementos del formato ejecutivo

    .row.justify-content-center.align-items-center.z-2.mb-5.factores-slider
      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema7/6.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-7.p-3
        .tarjeta.tarjeta--blanca.p-4.bg-slider.rounded-3
          SlyderF(columnas="col-auto")
            .tarjeta.p-4.py-lg-5
              h4 Nombre de la acción
              p Identifica de forma breve y precisa la acción propuesta, debe ser clara, específica y fácilmente reconocible por los equipos responsables.
            .tarjeta.p-4.py-lg-5
              h4 Objetivo
              p Define el propósito concreto de la acción, alineado con los objetivos del plan de mercadeo, debe ser medible y alcanzable (criterio SMART).
            .tarjeta.p-4.py-lg-5
              h4 Diagnóstico
              p Resume el hallazgo que origina la propuesta, debe basarse en evidencia del monitoreo, retroalimentación o análisis comparativo.
            .tarjeta.p-4.py-lg-5
              h4 Justificación
              p Explica por qué la acción es necesaria, incluye datos, indicadores o referencias que respaldan la propuesta y demuestran su pertinencia.
            .tarjeta.p-4.py-lg-5
              h4 Recursos requeridos
              p Detalla los recursos humanos, financieros y temporales necesarios para ejecutar la acción, permite evaluar su viabilidad.
            .tarjeta.p-4.py-lg-5
              h4 Responsable
              p Asigna claramente quién liderará la implementación, esto facilita el seguimiento, la rendición de cuentas y la articulación con otros equipos.
            .tarjeta.p-4.py-lg-5
              h4 Indicador de seguimiento
              p Define cómo se medirá el éxito de la acción, debe ser un KPIs relevante, medible y alineado con el objetivo propuesto.

        .p-4.bg-color-secundario-s10.rounded-3.mt-4
          .d-flex.align-items-center.justify-content-around
            <strong>Veamos un ejemplo de un informe ejecutivo:</strong>
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/ejemplo01.pdf')" target="_blank")
              span <strong>Ejemplo</strong>
              i.fa-solid.fa-link

    Separador
    #t_7_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 7.3 Informes técnicos
    
    p Los informes técnicos son documentos más detallados que explican el proceso completo de análisis, formulación y validación de las acciones de mejora, incluyen datos, gráficos, tablas, referencias y anexos que respaldan cada propuesta. 
    p.mb-5 Estos informes permiten dejar evidencia formal del trabajo realizado, facilitar auditorías internas y compartir aprendizajes con otros equipos, deben seguir una estructura lógica: introducción, metodología, resultados, análisis, propuestas y conclusiones. 

    .row.justify-content-center.z-2
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.z-2
          h5 Tabla 14.
          span Estructura sugerida para informes técnicos
        .tabla-a.color-secundario.z-2.mb-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FFF3EF;")
              tr
                th Sección
                th(colspan="2") Contenido
            tbody
              tr
                td <strong>Introducción.</strong>
                td(colspan="2") Contexto y propósito del informe.
              tr
                td <strong>Metodología.</strong>
                td(colspan="2") Técnicas de medición y análisis utilizadas.
              tr
                td <strong>Resultados.</strong>
                td(colspan="2") Datos obtenidos y comparación con metas.
              tr
                td <strong>Análisis.</strong>
                td(colspan="2") Interpretación de hallazgos y causas identificadas.
              tr
                td <strong>Propuestas de mejora.</strong>
                td(colspan="2") Acciones sugeridas con justificación técnica.
              tr
                td <strong>Conclusiones.</strong>
                td(colspan="2") Síntesis de aprendizajes y recomendaciones finales.
              tr
                td <strong>Anexos.</strong>
                td(colspan="2") Tablas, gráficos, formatos utilizados.

    Separador
    #t_7_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 7.4 Ajustes colaborativos

    .row.justify-content-center.align-items-center.z-2.mb-5.factores-slider
      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema7/7.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-7
        p.mb-4 Los ajustes colaborativos son modificaciones realizadas a las propuestas de mejora con base en la retroalimentación de los equipos responsables, este proceso fortalece la pertinencia, la viabilidad y el compromiso con la implementación. 
        p Implica espacios de diálogo, revisión conjunta de formatos, validación técnica y toma de decisiones compartida, según Mintzberg (2015), “la estrategia se construye en equipo, no en solitario”. Por ejemplo, una empresa de alimentos puede convocar a sus equipos de mercadeo, logística y ventas para revisar las propuestas de mejora en distribución, ajustando los tiempos y recursos según las capacidades reales de cada área.

        .p-4.bg-color-secundario-s10.rounded-3.mt-4
          .d-flex.align-items-center.justify-content-around
            <strong>Ejemplo de ajustes colaborativos:</strong>
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/ejemplo02.pdf')" target="_blank")
              span <strong>Ejemplo</strong>
              i.fa-solid.fa-link

    .row.justify-content-center.z-2
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-5
          span.etiqueta-title Cita de reflexión

    .row.justify-content-center.z-2
      .col-xl-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .row.justify-content-center
            .col-lg-11
              p.bloque-texto-f__texto Documentar es dar forma al compromiso. Cada propuesta escrita con claridad y propósito es una promesa de mejora que honra el trabajo en equipo.

    p.mb-5 Para profundizar en estas prácticas y escuchar experiencias reales de narradores digitales, se invita al aprendiz a escuchar el podcast complementario que acompaña este capítulo, donde se exploran diferentes maneras de presentar y ajustar propuestas de mejora.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        TarjetaAudio.color-secundario.mb-3(
          texto="Documentación de propuestas"
          :audio="require('../assets/curso/audio/podcast.mp3')"
        )


</template>

<script>
export default {
  name: 'Tema7',
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
