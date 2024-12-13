import express from 'express';
import { getProspects } from '../controllers/prospectController.js';
import { validateSortParams } from '../middleware/validateParams.js';

export const prospectRouter = express.Router();

prospectRouter.get('/', validateSortParams, getProspects);

