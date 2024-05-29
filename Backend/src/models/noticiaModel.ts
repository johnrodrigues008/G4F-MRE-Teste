import { DataTypes, Model, Sequelize } from "sequelize";

export class noticiaModel extends Model {
  public id_noticia: string;
  public titulo: string;
  public descricao: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        titulo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: db,
        modelName: "Noticia",
        updatedAt: false,
        createdAt: false,
      }
    );
  }
}
