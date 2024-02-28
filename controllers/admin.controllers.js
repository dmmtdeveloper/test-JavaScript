import db from "../db/db.js";

export const getAllAdmin = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query("SELECT * FROM administradores");
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
