// Responsables de los cuarteles (parcelas)
const administradores = [
  { id: 1, rut: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, rut: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, rut: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, rut: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, rut: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, rut: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const tipo_cuartel = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const cuarteles = [
  {
    id_admin: 6,
    id_farm: 1,
    id_paddock_type: 1,
    harvest_year: 2019,
    area: 1200,
  },
  {
    id_admin: 1,
    id_farm: 3,
    id_paddock_type: 4,
    harvest_year: 2019,
    area: 500,
  },
  {
    id_admin: 5,
    id_farm: 3,
    id_paddock_type: 2,
    harvest_year: 2020,
    area: 20000,
  },
  {
    id_admin: 2,
    id_farm: 2,
    id_paddock_type: 3,
    harvest_year: 2021,
    area: 8401,
  },
  {
    id_admin: 3,
    id_farm: 1,
    id_paddock_type: 1,
    harvest_year: 2020,
    area: 2877,
  },
  {
    id_admin: 5,
    id_farm: 2,
    id_paddock_type: 2,
    harvest_year: 2017,
    area: 15902,
  },
  {
    id_admin: 3,
    id_farm: 3,
    id_paddock_type: 2,
    harvest_year: 2018,
    area: 1736,
  },
  {
    id_admin: 2,
    id_farm: 3,
    id_paddock_type: 3,
    harvest_year: 2020,
    area: 2965,
  },
  {
    id_admin: 4,
    id_farm: 3,
    id_paddock_type: 4,
    harvest_year: 2018,
    area: 1651,
  },
  {
    id_admin: 5,
    id_farm: 1,
    id_paddock_type: 1,
    harvest_year: 2018,
    area: 700,
  },
  {
    id_admin: 1,
    id_farm: 2,
    id_paddock_type: 1,
    harvest_year: 2019,
    area: 7956,
  },
  {
    id_admin: 5,
    id_farm: 3,
    id_paddock_type: 2,
    harvest_year: 2020,
    area: 3745,
  },
  {
    id_admin: 6,
    id_farm: 1,
    id_paddock_type: 3,
    harvest_year: 2021,
    area: 11362,
  },
  {
    id_admin: 2,
    id_farm: 3,
    id_paddock_type: 3,
    harvest_year: 2021,
    area: 300,
  },
  {
    id_admin: 3,
    id_farm: 2,
    id_paddock_type: 2,
    harvest_year: 2020,
    area: 19188,
  },
  {
    id_admin: 3,
    id_farm: 1,
    id_paddock_type: 1,
    harvest_year: 2019,
    area: 17137,
  },
  {
    id_admin: 4,
    id_farm: 3,
    id_paddock_type: 2,
    harvest_year: 2020,
    area: 100,
  },
  {
    id_admin: 2,
    id_farm: 1,
    id_paddock_type: 3,
    harvest_year: 2019,
    area: 11845,
  },
  {
    id_admin: 5,
    id_farm: 2,
    id_paddock_type: 1,
    harvest_year: 2018,
    area: 15969,
  },
  {
    id_admin: 1,
    id_farm: 3,
    id_paddock_type: 1,
    harvest_year: 2029,
    area: 10420,
  },
  {
    id_admin: 5,
    id_farm: 2,
    id_paddock_type: 3,
    harvest_year: 2010,
    area: 3200,
  },
  {
    id_admin: 6,
    id_farm: 1,
    id_paddock_type: 2,
    harvest_year: 2012,
    area: 10587,
  },
  {
    id_admin: 2,
    id_farm: 2,
    id_paddock_type: 2,
    harvest_year: 2018,
    area: 16750,
  },
];

const granjas = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

// Tip: Una hectárea equivale a 10.000m2

// INSERTAR VALORES A LA BASE DE DATOS EN SUS RESPECTIVAS TABLAS (HACERLO DIRECTAMENTE DESDE PGADMIN)

// PUEDEN HACERLO MANIPULANDO LOS OBJETOS DIRECTAMENTE O HACERLO CON CONSULTAS SQL Y PROCESANDO LOS DATOS
//1 Mostrar arreglo con los ruts y nombres de los administradores ordenados por nombre

//2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.

//3 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas

//4 Objeto en que las llaves (keys) sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
// Ejemplo: { "AVELLANOS-2020": { 2: "EFRAIN SOTO VERA" } }
