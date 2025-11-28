<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Acciones de mejora

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/1.png", alt="Imagen decorativa")
    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 Las acciones de mejora son el resultado más valioso del monitoreo: permiten transformar hallazgos en decisiones concretas que optimizan el desempeño del plan de mercadeo.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .p-4.bg-color-acento-contenido-ac20.rounded-4
          p.text-center.mb-0 Este capítulo presenta cómo realizar un diagnóstico preciso, formular acciones pertinentes y justificar técnicamente cada propuesta, asegurando que respondan a evidencias y criterios estratégicos.

    .fullwidth-bg.fullwidth-bg--2
    Separador
    #t_5_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 5.1 diagnóstico

    .row.align-items-center.justify-content-center.z-2.mb-4
      .col-md-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/2.png", alt="Imagen decorativa", data-aos="zoom-in-left")
      .col-lg-6
        p El diagnóstico es el análisis profundo de los resultados obtenidos, orientado a identificar causas, patrones y oportunidades de mejora, debe considerar:
        .p-4.bg-color-secundario-s5.rounded-4
          .row.align-items-center
            .col-md-7
              ul.lista-ul--color
                li.d-flex 
                  i.fa-solid.fa-circle-check
                  | Indicadores con bajo cumplimiento.
                li.d-flex
                  i.fa-solid.fa-circle-check
                  | Desviaciones recurrentes.
                li.d-flex
                  i.fa-solid.fa-circle-check
                  | Retroalimentación de clientes o usuarios.
                li.d-flex
                  i.fa-solid.fa-circle-check
                  | Condiciones del entorno (competencia, mercado, regulación).
            .d-none.d-md-block.col-md-5
              figure
                img.w-89(src="@/assets/curso/temas/tema3/12.svg" alt="Imagen ilustrativa" data-aos="fade-up")

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .p-4.p-lg-0.bg-box.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-9
              p.mb-0 <strong>Ejemplo aplicado</strong>. Una empresa de servicios educativos detecta que su tasa de conversión en redes sociales es inferior al promedio del sector. El diagnóstico revela que los mensajes no están segmentados por perfil de usuario y que los horarios de publicación no coinciden con los momentos de mayor tráfico.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema5/3.png" alt="Imagen ilustrativa" data-aos="fade-up")

    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 8.
      span Ejemplo de diagnóstico por acción
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FFF3EF;")
          tr
            th Acción monitoreada
            th Resultado obtenido
            th Meta esperada
            th Hallazgo principal
            th Causa probable
        tbody
          tr
            td <strong>Campaña en Instagram.</strong>
            td 4.200 interacciones
            td 12 %
            td Bajo engagement.
            td Segmentación genérica.
          tr
            td <strong>Email marketing.</strong>
            td 18 % apertura
            td $ 5.000.000
            td Buen desempeño.
            td Asunto atractivo y personalizado.
          tr
            td <strong>Evento presencial.</strong>
            td 85 asistentes
            td 3.000
            td Baja asistencia.
            td Difusión limitada.

    p.mb-0 El diagnóstico debe ser claro, objetivo y orientado a la solución.

    Separador
    #t_5_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 5.2 Formulación de acciones

    p.mb-5 Una vez identificado el problema, se deben proponer acciones de mejora específicas, viables y alineadas con los objetivos del plan, estas pueden incluir:

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-stretch.mb-5.z-2
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/4.svg" alt="Icono de optimización")
            span Ajustes en la estrategia de comunicación.
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/5.svg" alt="Icono de optimización")
            span Rediseño de formatos o canales.
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/6.svg" alt="Icono de optimización")
            span Capacitación de equipos.
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/7.svg" alt="Icono de optimización")
            span Reasignación de recursos.
      
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-xl-10
        .p-4.p-lg-0.bg-box.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-9
              p.mb-0 <strong>Ejemplo aplicado</strong>. Tras detectar baja conversión en su landing page, una empresa de tecnología decide rediseñar el contenido, incluir testimonios de clientes y simplificar el formulario de registro, en la siguiente campaña, la tasa de conversión aumenta un 35 %.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema5/8.png" alt="Imagen ilustrativa" data-aos="fade-up")

    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 9.
      span Ejemplo de formulación de acciones
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FFF3EF;")
          tr
            th Hallazgo
            th Acción de mejora propuesta
            th Responsable
            th Plazo estimado
            th Indicador de seguimiento
        tbody
          tr
            td <strong>Segmentación genérica.</strong>
            td Rediseñar mensajes por perfil.
            td Equipo de contenido.
            td 2 semanas.
            td Tasa de interacción.
          tr
            td <strong>Difusión limitada.</strong>
            td Ampliar canales de convocatoria.
            td Coordinador de eventos.
            td 1 semana.
            td Número de inscritos.
          tr
            td <strong>Baja conversión <em>web</em>.</strong>
            td Optimizar diseño de <em>landing page</em>.
            td Equipo UX/UI.
            td 3 semanas.
            td Tasa de conversión.

    p.mb-0 Las acciones deben ser concretas, medibles y asignadas con claridad.

    Separador
    #t_5_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 5.3 Justificación técnica

    p.mb-5 Toda acción de mejora debe estar respaldada por una justificación técnica que explique:
    
    .row.justify-content-center.align-items-stretch.mb-5.z-2
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/9.svg" alt="Icono de optimización")
            span Por qué es necesaria.
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/10.svg" alt="Icono de optimización")
            span Qué evidencia la sustenta.
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/11.svg" alt="Icono de optimización")
            span Qué impacto se espera.
      .col-6.col-sm-3.col-xl-2.mb-3.mb-sm-0
        .py-4.px-1.bg-color-terciario-t10.rounded-4.text-center.h-100(data-aos="fade-up")
          .d-flex.flex-column.align-items-center
            figure
              img.h-73.mb-3(src="@/assets/curso/temas/tema5/12.svg" alt="Icono de optimización")
            span Qué recursos requiere.

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-xl-10
        .p-4.p-lg-3.bg-box.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-9
              p.mb-0 <strong>Ejemplo aplicado</strong>. La propuesta de rediseñar la <em>landing page</em> se justifica porque el análisis de comportamiento <em>web</em> muestra una alta tasa de rebote. Se espera que, al mejorar la experiencia del usuario, se incremente la conversión y se reduzca el abandono.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema5/13.png" alt="Imagen ilustrativa" data-aos="fade-up")

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.z-2
          h5 Tabla 10.
          span Ejemplo de justificación técnica
        .tabla-a.color-secundario.z-2.mb-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FFF3EF;")
              tr
                th Acción propuesta
                th Evidencia que la respalda
                th Impacto esperado
                th Recursos requeridos
            tbody
              tr
                td <strong>Rediseño de mensajes.</strong>
                td Baja interacción por perfil.
                td Mayor engagement.
                td Tiempo de redacción y diseño.
              tr
                td <strong>Ampliación de canales.</strong>
                td Baja asistencia a eventos.
                td Mayor alcance.
                td Presupuesto para difusión.
              tr
                td <strong>Optimización de <em>landing</em>.</strong>
                td Alta tasa de rebote.
                td Mayor conversión.
                td Apoyo técnico y diseño <em>web</em>.

    p.mb-5 La justificación técnica fortalece la credibilidad y viabilidad de cada propuesta.

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-5
          span.etiqueta-title Cita de reflexión

    .row.justify-content-center
      .col-xl-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .row.justify-content-center
            .col-lg-11
              p.bloque-texto-f__texto Mejorar no es corregir errores, es aprender de ellos para construir soluciones más sabias, humanas y sostenibles.

</template>

<script>
export default {
  name: 'Tema5',
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
