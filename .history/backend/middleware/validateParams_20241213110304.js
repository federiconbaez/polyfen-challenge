import { SORT_FIELDS, SORT_ORDERS } from '../config.js';

export const validateSortParams = (req, res, next) => {
  const { sortBy, order } = req.query;

  if (sortBy && !SORT_FIELDS.includes(sortBy)) {
    return res.status(400).json({ error: 'Invalid sortBy parameter' });
  }

  if (order && !SORT_ORDERS.includes(order)) {
    return res.status(400).json({ error: 'Invalid order parameter' });
  }

  next();
};

