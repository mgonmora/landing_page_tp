# landing_page_tp

Landing page para Tenpo.

LINK DE LA DEMO: https://landing-page-tp-wwe3-git-main-mgonmoras-projects.vercel.app/

## Descripción

Proyecto de landing page que presenta los beneficios principales de Tenpo, con animaciones interactivas, video de fondo, y un diseño responsivo.

Incluye:

- Video de fondo en la sección Hero con texto y botón animado.
- Sección de beneficios con iconos animados al hacer hover.
- Efecto parallax en la imagen del teléfono que se desplaza con el scroll.
- Diseño basado en Flexbox y Bootstrap para estructura y responsive.
- Uso de Framer Motion para animaciones suaves y controladas.
- Iconos de Bootstrap Icons para una visual atractiva y consistente.

## Tecnologías

- Vite + React.js
- Framer Motion
- Bootstrap 5 (clases CSS y grid)
- Bootstrap Icons
- CSS moderno (Flexbox, media queries)
- Video en formato mp4 para fondo animado

## Cómo usar

Antes de comenzar, debes tener instalado:

- Node.js (recomendado v18 o superior)
- npm 

1. Clona el repositorio:

git clone https://github.com/mgonmora/landing_page_tp.git

2. Instala dependencias

npm install

3. Ejecuta la app en modo desarrollo

npm run dev

4. Accede a http://localhost:5173 desde tu navegador

## Funcionalidades

- Animación en el botón principal para invitar al click.
- Beneficios con animaciones de escala y rotación en iconos al pasar el mouse.
- Sección con imagen de teléfono que se mueve con efecto parallax al hacer scroll.
- Textos y botón que aparecen y desaparecen según el scroll.
- Diseño responsivo adaptado a móviles y tablets.

## Documentación

- Decisiones de diseño

Estética moderna y minimalista: Opté por una estética limpia, utilizando los colores corporativos de Tenpo y detalles en verde fluorescente para resaltar el Call to action.

Hero con video de fondo: Quise captar la atención del usuario sin necesidad del scroll desde un inicio con el video. Se oscureció el video con un filter para asegurar que se pueda leer bien el texto encima.

Tipografía personalizada: Se utilizó la fuente Graphie mencionada en el correo.

Animaciones: Lo usé con moderación para no saturar de animaciones los elementos y no haya problemas de rendimiento en telefonos o modo escritorio.

Diseño responsivo: Hice la accesibilidad móvil utilizando Flexbox, media queries y clases utilitarias de Bootstrap.

- Librerías y herramientas utilizadas

React.js: 
Estructura base del proyecto, para crear componentes reutilizables y manejar el estado de los elementos.

Framer Motion: 
Lo usé para animaciones como:

Entrada suave de elementos en pantalla
Animación del botón principal al hacer hover

Bootstrap 5: 
Usé Bootstrap para estructurar secciones y mantener la consistencia para las resoluciones

Bootstrap Icons: 
Use los iconos de Bootstrap para mantener en linea lo utilizado.

CSS: 
Use flex, gap, media queries y object-fit para mantener el diseño adaptable sin necesidad de frameworks adicionales. Las animaciones básicas como el parallax las hice con  scrollY y transform.
