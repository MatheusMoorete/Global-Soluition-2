import LineChart from "../../components/LineChart";
import TrasitionPages from "../../components/Transition/TrasitionPages";


const Tema1 = () => {
  return (
    <TrasitionPages>
      <div>
        <h1>Redução da Mortalidade Intantil</h1>
        <p>
          * Entre 1994 e 2017, o Brasil conseguiu reduzir sua taxa de mortalidade
          infantil em 71%. Os índices caíram de 43 bebês mortos com menos de um
          ano de idade a cada mil nascidos vivos – um dos mais altos do
          continente – para 12,4 por mil nascidos vivos, atingindo e superando a
          meta das Nações Unidas com quatro anos de antecedência. Um dos fatores
          por trás desse avanço, segundo um relatório divulgado nesta
          terça-feira (10), foi a implantação da Estratégia Saúde da Família
          (ESF), hoje presente em 98,4% dos municípios brasileiros.
        </p>
        <LineChart/>
      </div>
    </TrasitionPages>
    
  );
};

export default Tema1;
