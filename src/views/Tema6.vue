<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Viabilidad y pertinencia

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema6/1.png", alt="Imagen decorativa")
    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 Toda acción de mejora debe ser no solo deseable, sino también viable y pertinente, esto implica analizar si existen los recursos necesarios, prever los resultados que se pueden alcanzar y validar las propuestas con quienes las ejecutarán. Según Mintzberg (2015), “una estrategia efectiva no es solo brillante en el papel, sino posible en la práctica y legítima ante quienes la hacen realidad”.

    .fullwidth-bg.fullwidth-bg--2
    Separador
    #t_6_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 6.1 Análisis de recursos disponibles

    p.mb-5 Antes de implementar cualquier acción, es fundamental verificar si se cuenta con los recursos necesarios, estos pueden ser:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema6/2.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-7
        .tarjeta.bg-color-acento-contenido-ac10.p-4
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-7
                h5.mb-4 Humanos
                p.mb-0 Disponibilidad de personal capacitado.
              .col-sm-8.col-lg-3.col-xl-3
                figure
                  img.w-125(src='@/assets/curso/temas/tema6/3.svg', alt='Imagen ilustrativa')
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-7
                h5.mb-4 Financieros
                p.mb-0 Presupuesto asignado.
              .col-sm-8.col-lg-3.col-xl-3
                figure
                  img.w-125(src='@/assets/curso/temas/tema6/4.svg', alt='Imagen ilustrativa')
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-7
                h5.mb-4 Tecnológicos
                p.mb-0 Herramientas, plataformas, software.
              .col-sm-8.col-lg-3.col-xl-3
                figure
                  img.w-125(src='@/assets/curso/temas/tema6/5.svg', alt='Imagen ilustrativa')
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-7
                h5.mb-4 Temporales
                p.mb-0 Tiempo requerido para ejecutar la acción.
              .col-sm-8.col-lg-3.col-xl-3
                figure
                  img.w-125(src='@/assets/curso/temas/tema6/6.svg', alt='Imagen ilustrativa')
          
    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 11.
      span Ejemplo de análisis de recursos por acción
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FFF3EF;")
          tr
            th Acción propuesta
            th Recursos humanos
            th Recursos financieros
            th Recursos tecnológicos
            th Tiempo estimado
        tbody
          tr
            td <strong>Rediseño de landing page.</strong>
            td Equipo UX interno.
            td $ 2.000.000
            td CMS y hosting disponibles.
            td 3 semanas.
          tr
            td <strong>Segmentación de mensajes.</strong>
            td Redactor y analista.
            td $ 500.000
            td CRM activo.
            td 2 semanas.
          tr
            td <strong>Difusión multicanal.</strong>
            td Coordinador de eventos.
            td $ 1.200.000
            td Redes sociales activas.
            td 1 semana.

    p.mb-0 Este análisis permite ajustar las acciones según la capacidad real de ejecución.

    Separador
    #t_6_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 6.2 Estimación de resultados esperados

    p.mb-5 La viabilidad también implica prever qué resultados se pueden alcanzar con cada acción, esta estimación debe ser realista, basada en datos previos y alineada con los objetivos estratégicos.

    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 12.
      span Ejemplo de estimación de resultados esperados
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FFF3EF;")
          tr
            th Acción propuesta
            th Indicador asociado
            th Resultado actual
            th Resultado esperado
            th Fuente de estimación
        tbody
          tr
            td <strong>Rediseño de landing page.</strong>
            td Tasa de conversión.
            td 9 %
            td 12 %
            td Benchmark sectorial + histórico.
          tr
            td <strong>Segmentación de mensajes.</strong>
            td Tasa de apertura.
            td 15 %
            td 20 %
            td Campañas previas.
          tr
            td <strong>Difusión multicanal.</strong>
            td Número de inscritos. 
            td 85
            td 120
            td Eventos similares.

    p.mb-0 Estimar resultados permite priorizar acciones con mayor impacto y justificar su implementación.

    .fullwidth-bg.fullwidth-bg--2
    Separador
    #t_6_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 6.3 Validación con equipos responsables

    .row.align-items-center.justify-content-center.z-2.mb-5
      .col-md-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema6/7.png", alt="Imagen decorativa", data-aos="zoom-in-left")
      .col-lg-6
        p El diagnóstico es el análisis profundo de los resultados obtenidos, orientado a identificar causas, patrones y oportunidades de mejora, debe considerar:
        .p-4.bg-color-secundario-s5.rounded-4
          .row.align-items-center
            .col-md-7
              ul.lista-ul--color
                li.d-flex 
                  i.fa-solid.fa-circle-check
                  | Reuniones de retroalimentación.
                li.d-flex
                  i.fa-solid.fa-circle-check
                  | Ajustes colaborativos.
                li.d-flex
                  i.fa-solid.fa-circle-check
                  | Aprobación técnica y operativa.
                li.d-flex
                  i.fa-solid.fa-circle-check
                  | Compromiso de ejecución.
            .d-none.d-md-block.col-md-5
              figure
                img.w-89(src="@/assets/curso/temas/tema6/8.svg" alt="Imagen ilustrativa" data-aos="fade-up")

    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 13.
      span Ejemplo de validación con equipos responsables
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FFF3EF;")
          tr
            th Acción propuesta
            th Equipo responsable
            th Validación realizada
            th Ajustes acordados
            th Estado final
        tbody
          tr
            td <strong>Rediseño de landing page.</strong>
            td UX + TI.
            td Reunión técnica.
            td Simplificar formulario.
            td Aprobada.
          tr
            td <strong>Segmentación de mensajes.</strong>
            td Marketing + CRM.
            td Taller colaborativo.
            td Incluir nuevos perfiles.
            td Aprobada.
          tr
            td <strong>Difusión multicanal.</strong>
            td Eventos + Comunicaciones.
            td Revisión operativa.
            td Reforzar pauta en redes.
            td Aprobada.

    p.mb-5 Validar con los equipos garantiza que las acciones sean pertinentes, ejecutables y sostenibles.

    .row.justify-content-center.z-2
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-5
          span.etiqueta-title Cita de reflexión

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .row.justify-content-center
            .col-lg-11
              p.bloque-texto-f__texto La viabilidad no se mide solo en recursos, sino en la voluntad compartida de transformar ideas en acciones que sí se pueden hacer.

</template>

<script>
export default {
  name: 'Tema6',
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
