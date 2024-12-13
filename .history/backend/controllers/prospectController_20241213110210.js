import { Prospect } from '../models/Prospect.js';
import { DEFAULT_PAGE_SIZE } from '../config.js';

export const getProspects = async (req, res, next) => {
  try {
    const { sortBy = 'score', order = 'desc', page = 1, limit = DEFAULT_PAGE_SIZE } = req.query;
    const sortOrder = order === 'asc' ? 1 : -1;
    const skip = (page - 1) * limit;

    const prospects = await Prospect.find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(Number(limit));

    const total = await Prospect.countDocuments();

    res.json({
      prospects,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    next(error);
  }
};

