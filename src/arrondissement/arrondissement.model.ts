import * as mongoose from 'mongoose';

export const ArrondissementSchema = new mongoose.Schema({
  type: { type: String, required: true },
  geometry: {
    type: { type: String, required: true },
    coordinates: { type: [[[Number]]], required: true },
  },
  properties: {
    n_sq_co: { type: Number, required: true },
    perimetre: { type: Number, required: true },
    l_ar: { type: String, required: true },
    surface: { type: Number, required: true },
    geom_x_y: { type: [Number], required: true },
    n_sq_ar: { type: Number, required: true },
    l_aroff: { type: String, required: true },
    c_arinsee: { type: Number, required: true },
    c_ar: { type: Number, required: true },
  },
});

export interface Arrondissement extends mongoose.Document {
  id: string;
  type: string;
  geometry: {
    type: string;
    coordinates: [[[number]]];
  };
  properties: {
    n_sq_co: number;
    perimetre: number;
    l_ar: string;
    surface: number;
    geom_x_y: [number];
    n_sq_ar: number;
    l_aroff: string;
    c_arinsee: number;
    c_ar: number;
  };
}
