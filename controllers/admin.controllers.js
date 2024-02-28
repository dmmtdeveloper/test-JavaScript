import db from "../db/db.js";

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

export const getTipoCuartel = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query(
      "SELECT e.id, e.name, area FROM tipo_cuartel e JOIN cuarteles qs ON id_paddock_type = e.id "
      
    );
    console.log("Tipo_Cuartel", rows, rowCount);
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
