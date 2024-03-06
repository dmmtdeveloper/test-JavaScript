import db from "../db/db.js";

/* //todo---------------------------------------------------------------->  Ejercicio 1 <-------------------------------------------------------------- 
Mostrar arreglo con los ruts y nombres de los administradores ordenados por nombre */
export const getAllAdmin = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query(
      "SELECT rut, name FROM administradores ORDER BY name"
    );

    console.log("administradores", rows, rowCount);

    if (!rows.length)
      return res
        .status(404)
        .json({ message: "Administradores no encontrados" });
    res.status(200).json({
      admin: rows,
      count: rowCount,
      message: "administradores Obtenidos con exito",
    });
  } catch (error) {
    console.log(`Error en GET ${error}`);
    res.status(500).json({ message: "Hubo un error al obtener los usuarios" });
  }
};




/* //todo---------------------------------------------------------------->  Ejercicio 2 <-------------------------------------------------------------- 
 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.*/
export const getTipoCuartel = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query(
      "SELECT e.name, ROUND(SUM(qs.area/10000),3) AS hectarea FROM tipo_cuartel e JOIN cuarteles qs ON id_paddock_type = e.id GROUP BY e.id, e.name ORDER BY hectarea DESC"
    );
    console.log("Tipo de cultivo y cantidad de hectareas", rows, rowCount);
    if (!rows.length)
      return res
        .status(404)
        .json({ message: "Tipos de cuarteles no encontrados" });

    res.status(200).json({
      tipo: rows,
      count: rowCount,
      message: "Tipos de cuarteles obtenidos con exito",
    });
  } catch (error) {
    console.log(`Error al intentar obtener el tipo de cuartel ${error}`);
    res
      .status(500)
      .json({ message: "Error al intentar obtener el tipo de cuartel" });
  }
};




/* //todo---------------------------------------------------------------->  Ejercicio 3 <-------------------------------------------------------------- 
Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas */
export const getAdminForestalAgricola = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query(
      "SELECT a.name, SUM(c.area) AS area_total_cerezas FROM administradores a JOIN cuarteles c ON a.id = c.id_admin JOIN granjas g ON c.id_farm = g.id JOIN tipo_cuartel tc ON c.id_paddock_type = tc.id WHERE g.name = 'FORESTAL Y AGRICOLA LO ENCINA' AND tc.name = 'CEREZAS' AND c.area > 1000 GROUP BY a.id, a.name"  
    );

    console.log(`administradores de FORESTAL Y AGRICOLA`, rows);
    if (!rows.length)
      return res.status(404).json({
        message:
          "Error al intentar obtener los administradores de FORESTAL Y AGRÍCOLA LO ENCINA",
      });
    res.status(200).json({
      tipo: rows,
      count: rowCount,
      message:
        "Administradores de FORESTAL Y AGRÍCOLA LO ENCINA obtenidos con exito",
    });
  } catch (error) {
    console.log(
      `Error en nombres de administradores en FORESTAL Y AGRÍCOLA LO ENCINA ${error}`
    );
    res.status(500).json({
      message:
        "Hubo un error al intentar obtener los nombres de los administradores de FORESTAL Y AGRÍCOLA LO ENCINA",
    });
  }
};

/* //todo---------------------------------------------------------------->  Ejercicio 4 <-------------------------------------------------------------- 
 Objeto en que las llaves (keys) sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
 Ejemplo: { "AVELLANOS-2020": { 2: "EFRAIN SOTO VERA" } } */

export const getYearCultivo = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query(
      "SELECT CONCAT(tc.name, '-', c.harvest_year) AS tipo_de_cultivo, json_object_agg(a.id, a.name) AS administradores FROM cuarteles c JOIN tipo_cuartel tc ON c.id_paddock_type = tc.id JOIN administradores a ON c.id_admin = a.id GROUP BY tc.name, c.harvest_year;"
    );
    console.log("Tipo de cultivo año mas administrador", rows)
    if(!rows.length)
    return res.status(404).json({message: "Error al intentar ontener los datos"})
  res.status(200).json({
    tipo: rows,
    count: rowCount,
    message: "Datos obtenidos con exito"
  })
  } catch (error) {
    console.log(`Hubo un error al intentar obtener los datos ${error}`)
    res.status(500).json({message: "Error"})
  }
}

