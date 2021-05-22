import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public lista:Array <any>;
  constructor() { 
    this.lista = [
      { nombre:'Vue',id:1,Descripcion: 'Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página', estrellas:10, tipo:"Front-End"},
      { nombre:'Angular',id:2,Descripcion: 'Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.',estrellas:7 , tipo:"Front-End"},
      { nombre:'Php',id:3,Descripcion: 'PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web',estrellas:8 , tipo:"Back-End"},
      { nombre:'Flutter',id:4,Descripcion: 'Flutter es un SDK de código fuente abierto de desarrollo de aplicaciones móviles creado por Google. Suele usarse para desarrollar interfaces de usuario para aplicaciones en Android, iOS y Web así como método primario para crear aplicaciones para Google Fuchsia',estrellas:5 , tipo:"mobile apps (android-Iphone)"},
      { nombre:'NodeJs',id:5,Descripcion: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.', estrellas:10, tipo:"Back-End"},
      { nombre:'Java',id:6,Descripcion: 'Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems. Hay muchas aplicaciones y sitios web que no funcionarán, probablemente, a menos que tengan Java instalado y cada día se crean más. Java es rápido, seguro y fiabl', estrellas:7, tipo:"desktop apps"},
      { nombre:'JavaScript',id:7,Descripcion: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.', estrellas:10, tipo:"Front-End"},
      { nombre:'NuxtJs',id:8,Descripcion: 'Nuxt.js es un marco de aplicación web gratuito y de código abierto basado en Vue.js, Node.js, Webpack y Babel.js. Nuxt está inspirado en Next.js, que es un marco de propósito similar, basado en React.js. El marco se anuncia como un "metamarco para aplicaciones universales".',estrellas:10 , tipo:"Front-End"},
      { nombre:'Git',id:1,Descripcion: 'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente', estrellas:10, tipo:"control de versiones"},
      { nombre:'Android Studio',id:2,Descripcion: 'Android Studio es el entorno de desarrollo integrado oficial para la plataforma Android. ', estrellas:5, tipo:"mobile apps android"},
      { nombre:'Linux',id:3,Descripcion: 'Linux es el nombre coloquial de un sistema operativo libre. Técnicamente, se llama Linux al núcleo o kernel del sistema, cuya denominación correcta es GNU/Linux. ... Las distribuciones de Linux, en este marco, son sistemas con aplicaciones y funciones añadidas.',estrellas:10 , tipo:"Sistema Operativo"},
      { nombre:'MacOs',id:4,Descripcion: 'macOS es una serie de sistemas operativos gráficos desarrollados y comercializados por Apple desde 2001. Es el sistema operativo principal para la familia de computadoras Mac de Apple. ', estrellas:10, tipo:"Sistema Operativo"},
      { nombre:'Windows',id:5,Descripcion: 'Windows es el nombre de una familia de distribuciones de software para PC, teléfonos inteligentes, servidores y sistemas empotrados, desarrollados y vendidos por Microsoft y disponibles para múltiples arquitecturas, tales como x86, x86-64 y ARM', estrellas:10, tipo:"Sistema Operativo"},
      { nombre:'Jquery',id:6,Descripcion: 'jQuery es una biblioteca multiplataforma de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el árbol DOM, manejar eventos, desarrollar animaciones y agregar interacción con la técnica AJAX a páginas web.​', estrellas:10, tipo:"Front-End"},
      { nombre:'Css',id:7,Descripcion: 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado',estrellas:8 , tipo:"Front-End"},
      { nombre:'Html',id:8,Descripcion: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web', estrellas:10, tipo:"Front-End"},
      { nombre:'MongoDB',id:1,Descripcion: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales', estrellas:8, tipo:"Base de datos NoSQL"},
      { nombre:'BootStrap',id:2,Descripcion: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web',estrellas:10 , tipo:"Framework de Css"},
      { nombre:'Tailwindcss',id:3,Descripcion: '“Tailwind CSS es un framework CSS de bajo nivel altamente personalizable que le permite crear diseños personalizados eliminando los estilos de componentes pre-definidos que necesitarías sobre-escribir en todo caso', estrellas:10, tipo:"Framework de Css"},
      { nombre:'Vuetify',id:7,Descripcion: '“Tailwind CSS es un framework CSS de bajo nivel altamente personalizable que le permite crear diseños personalizados eliminando los estilos de componentes pre-definidos que necesitarías sobre-escribir en todo caso', estrellas:8, tipo:"Framework de Css"},
      { nombre:'Mysql',id:4,Descripcion: 'MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos', estrellas:9, tipo:"Base de datos"},
      { nombre:'MariaDB',id:5,Descripcion: 'MariaDB es un sistema de gestión de bases de datos derivado de MySQL con licencia GPL. Es desarrollado por Michael Widenius —fundador de MySQL—, la fundación MariaDB y la comunidad de desarrolladores de software libre', estrellas:9, tipo:"Base de datos"},
      { nombre:'GitHub',id:6,Descripcion: 'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. ', estrellas:10, tipo:"control de versiones"},
      { nombre:'BootstrapVue',id:1,Descripcion: '“Tailwind CSS es un framework CSS de bajo nivel altamente personalizable que le permite crear diseños personalizados eliminando los estilos de componentes pre-definidos que necesitarías sobre-escribir en todo caso', estrellas:10, tipo:"Framework de Css"},
      
    ]
  }
  ngOnInit(): void {
  }

}
