import * as mongoose from 'mongoose';

export const TournageSchema = new mongoose.Schema({
  type: { type: String, required: true },
  geometry: {
    type: { type: String, required: true },
    coordinates: { type: [[[Number]]], required: true },
  },
  properties: {
    annee_tournage: { type: String, required: true },
    coord_y: { type: Number, required: true },
    coord_x: { type: Number, required: true },
    type_tournage: { type: String, required: true },
    nom_producteur: { type: String, required: true },
    geo_point_2d: { type: Array, required: true },
    nom_tournage: { type: String, required: true },
    nom_realisateur: { type: String, required: true },
    date_fin: { type: String, required: true },
    adresse_lieu: { type: String, required: true },
    id_lieu: { type: String, required: true },
    date_debut: { type: String, required: true },
    ardt_lieu: { type: String, required: true },
  },
});

export interface Tournage extends mongoose.Document {
  id: string;
  type: string;
  geometry: {
    type: string;
    coordinates: [[[number]]];
  };
  properties: {
    annee_tournage: string;
    coord_y: number;
    coord_x: number;
    type_tournage: string;
    nom_producteur: string;
    geo_point_2d: Array<number>;
    nom_tournage: string;
    nom_realisateur: string;
    date_fin: string;
    adresse_lieu: string;
    id_lieu: string;
    date_debut: string;
    ardt_lieu: string;
  };
}
