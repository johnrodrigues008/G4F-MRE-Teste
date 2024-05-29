import { Sequelize } from "sequelize";
import { noticiaModel } from "./noticiaModel";

export class Models {
  public noticia: typeof noticiaModel = noticiaModel;

  constructor(db: Sequelize) {
    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].initialization !== undefined
      ) {
        this[pModel].initialization(db);
      }
    });

    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].association !== undefined
      ) {
        this[pModel].association(this);
      }
    });
  }
}
