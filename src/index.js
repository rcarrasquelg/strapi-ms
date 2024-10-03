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
    //   // Preparar los datos para enviar a Strapi
    //   const dataToSend = {
    //     title: entry.title.rendered,
    //     date: entry.date,
    //     content: markdownContent,
    //     author: entry.author,
    //     categories: mainCategory, // Asignar la categoría principal
    //     Subcategory1: subcategory1 || null, // Asignar Subcategory1 correcta
    //     Subcategory2: subcategory2 || null, // Asignar Subcategory2 correcta
    //     slug: entry.slug,
    //     mediaUrl: entry.media,
    //     mediaName: entry.mediaName,
    //   };
    //   console.log(dataToSend);
    //   // URL de la API de Strapi para crear una nueva entrada
    //   const apiUrl = "http://127.0.0.1:1337/api/makings"; // Ajustar la URL según tu configuración
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
    //           throw new Error("Error al crear la entrada en Strapi");
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log("Entrada creada en Strapi:", data);
    //       })
    //       .catch((error) => {
    //         console.error("Error al crear la entrada en Strapi:", error);
    //       });
    //   }, 10000);
    // });
  },
};
