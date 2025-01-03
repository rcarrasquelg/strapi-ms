// @ts-nocheck
"use strict";
const TurndownService = require("turndown");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // const jsonData = require("./newPosts.json"); // Carga tu JSON
    // const turndownService = new TurndownService();
    // // Definir el array de categorías y subcategorías con valores numéricos
    // const categories = [
    //   {
    //     categoryName: "Private Equity",
    //     subcategories: [
    //       { title: "Merge & Acquisitions", value: 2270 },
    //       { title: "Tech Due Diligence", value: 1844 },
    //     ],
    //   },
    //   {
    //     categoryName: "Technology",
    //     subcategories: [
    //       { title: "AI", value: 2245 },
    //       { title: "Cloud", value: 125 },
    //       { title: "Digital Transformation", value: 2216 },
    //       { title: "Innovation", value: 1766 },
    //       { title: "Mobile", value: 126 },
    //       { title: "Tech", value: 1620 },
    //     ],
    //   },
    //   {
    //     categoryName: "Industry",
    //     subcategories: [
    //       { title: "AgTech", value: 2251 },
    //       { title: "Healthcare", value: 2233 },
    //     ],
    //   },
    //   {
    //     categoryName: "Company Spotlight",
    //     subcategories: [
    //       { title: "Events", value: 29 },
    //       { title: "News", value: 128 },
    //     ],
    //   },
    //   {
    //     categoryName: "Other",
    //     subcategories: [
    //       { title: "Coding", value: 1845 },
    //       { title: "CompanyCulture", value: 1860 },
    //       { title: "Process optimization", value: 1615 },
    //       { title: "Value creation", value: 3 },
    //       { title: "Featured", value: 1694 },
    //       { title: "Opinion", value: 1619 },
    //       { title: "ProjectManagement", value: 2218 },
    //       { title: "QualityAssurance", value: 2126 },
    //       { title: "Team", value: 2227 },
    //       { title: "UserInterface", value: 1895 },
    //       { title: "UX", value: 1505 },
    //     ],
    //   },
    // ];
    // const AuthorsBlog = {
    //   6: "Nacho Caldentey",
    //   4: "Nancy Medica",
    //   2: "Juan Diego Raimondi",
    //   8: "Cesar DOnofrio",
    //   28: "Luciana Caltabiano",
    //   9: "Juan De Abreu",
    //   40: "Natalia Martinez Lopez",
    //   49: "Sergio Marchetti",
    //   16: "Sol Romeo",
    //   18: "Fernando Florez",
    //   20: "Estuardo Robles",
    //   22: "Lisandro Martinez",
    //   31: "Mariano Jurich",
    //   26: "Leandro Gonzalez",
    //   29: "Damian Muti",
    //   19: "Walter Zalazar",
    //   32: "Matias Beckerle",
    //   33: "Lucas Pelizza",
    //   34: "Juan Muguruza",
    //   37: "Gabriel Buyatti",
    //   39: "Julian Chierichetti",
    //   44: "Mariano Ravinale",
    //   38: "Hernan Federico Cardoso",
    //   47: "Santiago Tribiani",
    //   52: "Marcelo Vazquez",
    //   53: "Martin Deniro",
    //   54: "Agustina Orsi",
    //   56: "Noelia Franco",
    //   57: "Betiana Castro",
    //   35: "Martín Fantini",
    //   58: "Jennifer Greyling",
    //   59: "Paula Alonso Ishihara",
    //   60: "Brian Sztamfater",
    //   61: "Cristian Soria",
    //   62: "Valentin Zamorano",
    //   63: "Miguel Minoldo",
    //   64: "Mariano Herrera",
    //   65: "Franco Arza",
    //   66: "Nicolás Martello",
    //   67: "Jose Vazquez",
    //   68: "Alejandra Garcia",
    //   69: "Carlos Sampedro",
    //   70: "Leslie Mariotti",
    //   71: "Sebastian Grimberg",
    //   72: "Martin Keimel",
    //   73: "Celeste Senoseain",
    //   74: "Federico Toledo",
    //   75: "Dolores Finochietto",
    //   76: "Agustin Sciotti",
    //   77: "Marcos Rigoli",
    //   78: "Eduardo Tolbaños",
    //   79: "Daniel Altamirano",
    //   80: "Pablo Popea",
    //   81: "Ruben Lunda",
    //   83: "Mauro Maldini",
    //   84: "Damasia Aberg",
    //   85: "Hernan Fino",
    //   86: "Florencia Vispo",
    //   87: "Esteban Tedesco",
    //   30: "Nazareno Oviedo",
    //   88: "Maria Alderete",
    //   89: "Fernando Irahola",
    //   90: "Silvia Vassolo",
    //   91: "Melina Soto",
    //   92: "Luis Sosa",
    //   93: "Marcelo Spezia",
    //   94: "Mariano Gayoso",
    //   95: "Marcos Martinez",
    //   96: "Cintia Lenkovich",
    //   97: "Isidro Moreno",
    //   98: "Gabriel Zimmermann",
    //   99: "Sabrina Escalante",
    //   100: "Rocio Colacci",
    //   101: "José Sotes",
    //   102: "Fabián Andrés Levin",
    //   103: "Augusto Ghidini",
    //   104: "Diego Suarez",
    //   105: "Noelia Garcia",
    //   106: "Paula Cascu",
    //   107: "Dolores Moyano",
    //   108: "Martina Massa",
    //   109: "Co-authored",
    //   110: "Juan Fazzini",
    //   112: "Nicolas Monetto",
    //   113: "Horacio Tovo",
    //   114: "Valeria Ruggieri",
    //   111: "Jeronimo Correa",
    //   115: "Lucas Pellegrini",
    //   116: "Making Sense",
    //   117: "Ezequiel Szturmaj",
    //   118: "David Salazar Zaffaroni",
    //   119: "Vanina Vargas",
    //   120: "Fabricio Barbagallo",
    //   122: "Mariana Bevilacqua",
    //   124: "Matias Caria",
    //   125: "Martin Nedbal",
    //   127: "Jose Basurto",
    //   128: "Santiago Altobello",
    //   129: "Candela Corpacci",
    //   130: "Maria Buiras",
    //   42: "Nadia Vega",
    //   131: "Pablo Vittori",
    //   133: "Sabrina Lujan",
    //   136: "Lucas Boczkowski",
    //   138: "Leyla Alfonzo",
    //   139: "Jose Sauro",
    //   141: "Juliana Torre",
    // };
    // // Convertir el contenido HTML a Markdown
    // const convertToMarkdown = (content) => {
    //   return turndownService.turndown(content);
    // };
    // // Función para buscar el nombre de la categoría principal según el valor de la subcategoría
    // const findMainCategory = (subcategoryValue) => {
    //   for (const category of categories) {
    //     for (const sub of category.subcategories) {
    //       if (sub.value === subcategoryValue) {
    //         return category.categoryName; // Retorna el nombre de la categoría principal
    //       }
    //     }
    //   }
    //   return null; // Retorna null si no encuentra la subcategoría
    // };
    // // Función para encontrar la subcategoría según el valor numérico
    // const findSubcategory = (subcategoryValue) => {
    //   for (const category of categories) {
    //     for (const sub of category.subcategories) {
    //       if (sub.value === subcategoryValue) {
    //         return sub.title; // Retorna el nombre de la subcategoría
    //       }
    //     }
    //   }
    //   return null; // Retorna null si no encuentra la subcategoría
    // };
    // // Iterar sobre cada entrada del JSON
    // jsonData.forEach((entry) => {
    //   // Convertir el contenido HTML a Markdown
    //   const markdownContent = convertToMarkdown(entry.content.rendered);
    //   // Obtener las subcategorías de los índices 0 y 1 del array de categorías
    //   const subcategory1Value = entry.categories[0];
    //   const subcategory2Value = entry.categories[1];
    //   const subcategory1 = subcategory1Value
    //     ? findSubcategory(subcategory1Value)
    //     : null;
    //   const subcategory2 = subcategory2Value
    //     ? findSubcategory(subcategory2Value)
    //     : null;
    //   // Si hay subcategoría, asignar la categoría principal
    //   const mainCategory =
    //     findMainCategory(subcategory1Value) ||
    //     findMainCategory(subcategory2Value) ||
    //     "Uncategorized";
    //   // Obtener el nombre del autor a partir del ID
    //   const authorName = AuthorsBlog[entry.author] || "Desconocido";
    //   // Preparar los datos para enviar a Strapi
    //   const dataToSend = {
    //     title: entry.title.rendered,
    //     date: entry.date,
    //     content: markdownContent,
    //     author: authorName,
    //     categories: mainCategory,
    //     Subcategory1: subcategory1,
    //     Subcategory2: subcategory2,
    //     slug: entry.slug,
    //     mediaUrl: entry.media,
    //     mediaName: entry.mediaName,
    //     subtitle: entry.excerpt.rendered,
    //     old: true,
    //   };
    //   // URL de la API de Strapi para crear una nueva entrada
    //   const apiUrl = "http://localhost:1337/api/makings"; // Ajustar la URL según tu configuración
    //   // Configuración de la solicitud POST a Strapi
    //   const requestOptions = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data: dataToSend }),
    //   };
    //   // Realizar la solicitud POST a Strapi utilizando Fetch
    //   setTimeout(() => {
    //     fetch(apiUrl, requestOptions)
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error(
    //             "Error al crear la entrada en Strapi " + response.status
    //           );
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log(data);
    //         console.log("Entrada creada en Strapi:", data);
    //       })
    //       .catch((error) => {
    //         console.error("Error al crear la entrada en Strapi:", error);
    //       });
    //   }, 5000);
    // });
  },
};
