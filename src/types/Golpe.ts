export default interface Golpe {
  id: string;
  nome: string;
  tempo: string;
  urlPath: string;
  descricao: string;
  url: string;
  detalhes: string;
  faixa: string;
  vejaMais: {
    urlPath: string;
    nome: string;
  }[]
}
