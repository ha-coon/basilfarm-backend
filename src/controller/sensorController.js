import DB from "../dbconfig.js";

const db = new DB();

export const getSensorData = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM sensor_history");
    res.json(rows);
    res.setHeader('Access-Control-Allow-Origin', '*');
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const getSensorDataByDeviceId = async (req, res) => {
  const { device_id } = req.params;
  try {
    const [rows] = await db.pool.query(
      "SELECT * FROM sensor_history WHERE device_id = ?",
      [device_id]
    );
    res.json(rows);
    res.setHeader('Access-Control-Allow-Origin', '*');
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
