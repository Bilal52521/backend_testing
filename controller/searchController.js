import SK from "../models/skModel.js";
import WT from "../models/wtModel.js";
import { Op } from "sequelize";

export const searchController = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    const skResults = await SK.findAll({
      where: {
        [Op.or]: [
          { c_name: { [Op.like]: `%${query}%` } },
          { c_mobile: { [Op.like]: `%${query}%` } },
          { bookno: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    const wtResults = await WT.findAll({
      where: {
        [Op.or]: [
          { c_name: { [Op.like]: `%${query}%` } },
          { c_mobile: { [Op.like]: `%${query}%` } },
          { bookno: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    res.json({ skResults, wtResults });
  } catch (error) {
    console.error("Error searching records:", error);
    res.status(500).json({ message: "Server error" });
  }
};
