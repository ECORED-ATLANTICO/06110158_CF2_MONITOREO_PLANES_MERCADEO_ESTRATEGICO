<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ejecución del sistema de monitoreo

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 Interpretar los resultados del sistema de monitoreo es el puente entre los datos recolectados y las decisiones estratégicas, este proceso permite validar el cumplimiento de metas, identificar logros y desviaciones, y comunicar hallazgos de forma clara y efectiva. Según Drucker (2007), “lo que no se mide no se puede mejorar, pero lo que no se interpreta no se puede transformar”.

    Separador
    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 4.1 Tipos de acciones

    p.mb-5 La comparación entre los resultados obtenidos y las metas definidas permite evaluar el grado de cumplimiento de las acciones de mercadeo, este análisis debe considerar el contexto, la temporalidad y los indicadores seleccionados.

    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 5.
      span Comparación de resultados vs. metas
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FFF3EF;")
          tr
            th Acción de mercadeo
            th Meta esperada
            th Resultado obtenido
            th Cumplimiento (%)
            th Interpretación
        tbody
          tr
            td <strong>Campaña en redes sociales.</strong>
            td 5.000 interacciones.
            td 4.200
            td 84 %
            td Cumplimiento parcial.
          tr
            td <strong><em>Email marketing.</em></strong>
            td 15 % tasa de apertura
            td 18 %
            td 120 %
            td Superó expectativas.
          tr
            td <strong>Evento presencial.</strong>
            td 100 asistentes.
            td 85
            td 85 %
            td Requiere refuerzo de convocatoria.
          tr
            td <strong><em>Landing page</em> de producto.</strong>
            td 12 % tasa de conversión.
            td 9 %
            td 75 %
            td Bajo rendimiento.

    p.mb-0 Este tipo de análisis permite identificar qué acciones funcionaron, cuáles necesitan ajustes y cuáles podrían escalarse.

    Separador
    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 4.2 Desviaciones y logros

    p.mb-4 Las desviaciones son brechas entre lo esperado y lo obtenido, pueden ser negativas (fallas) o positivas (logros inesperados), analizar sus causas permite generar aprendizajes estratégicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .p-4.p-lg-0.bg-box.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-9
              p.mb-0 Por ejemplo, si una empresa de ropa detecta que su campaña en Instagram genera más conversiones que en Facebook, puede decidir enfocar sus esfuerzos en ese canal, optimizando recursos y resultados.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema4/2.png" alt="Imagen ilustrativa" data-aos="fade-up")

    .row.justify-content-center.align-items-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.z-2
          h5 Tabla 6.
          span Análisis de desviaciones y logros
        .tabla-a.color-secundario.z-2.mb-5
          table
            caption <strong>Fuente:</strong> Elaboración propia.
            thead(style="background-color: #FFF3EF;")
              tr
                th Resultado vs. meta
                th Tipo de desviación
                th Posible causa
                th Acción recomendada
            tbody
              tr
                td <strong>60 % de cumplimiento.</strong>
                td Negativa.
                td Incentivo poco atractivo.
                td Rediseñar propuesta de valor.
              tr
                td <strong>120 % de cumplimiento.</strong>
                td Positiva.
                td Segmentación efectiva.
                td Replicar estrategia en otros canales.
              tr
                td <strong>85 % de cumplimiento.</strong>
                td Parcial.
                td Baja afluencia en horario.
                td Ajustar ejecución operativa.

    p Este análisis debe ser ético, objetivo y orientado a la mejora continua.

    .fullwidth-bg.fullwidth-bg--2
    Separador
    #t_4_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 4.3 Técnicas de comunicación de hallazgos

    p.mb-5 Comunicar los hallazgos del monitoreo es clave para que los equipos comprendan, actúen y mejoren, las técnicas más efectivas incluyen:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8.col-xl-6
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Técnicas de comunicación de hallazgos
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema4/3-mob.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src='@/assets/curso/temas/tema4/3.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        figcaption <strong>Fuente:</strong> Adaptado de Kotler & Keller, 2016.

    .row.justify-content-center.align-items-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.z-2
          h5 Tabla 7.
          span Ejemplo de semáforo de desempeño
        .tabla-a.color-secundario.z-2.mb-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FFF3EF;")
              tr
                th KPI
                th Resultado obtenido
                th Meta esperada
                th Semáforo
                th Recomendación
            tbody
              tr
                td <strong>Tasa de conversión.</strong>
                td 9 %
                td 12 %
                td 🔴 Rojo.
                td Rediseñar <em>landing page</em>.
              tr
                td <strong>ROI.</strong>
                td $ 6.200.000
                td $ 5.000.000
                td 🟢 Verde.
                td Escalar inversión.
              tr
                td <strong>Engagement en redes.</strong>
                td 2.950
                td 3.000
                td 🟡 Amarillo.
                td Ajustar horario de publicación.

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
              p.bloque-texto-f__texto Los datos hablan, pero solo quien los interpreta con empatía y visión puede convertirlos en decisiones que transforman.
    
</template>

<script>
export default {
  name: 'Tema4',
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
