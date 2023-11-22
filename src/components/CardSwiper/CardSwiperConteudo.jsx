//Aqui fica os conteúdos do CardSwiper, ele é importado no Swiper.jsx

import ImagemDengue from "../../imagens/dengue.png";
import ImagemGripe from "../../imagens/gripe.png"
import ImagemHiv from "../../imagens/hiv.png"
import ImagemDiarreica from "../../imagens/Diarreica.png"
import ImagemTuberculose from "../../imagens/tuberculose.png"
import ImagemCovid from "../../imagens/coronavírus.png"

export const CardSwiperConteudo = [
    {
      title: "Arboviroses",
      image: ImagemDengue,
      description:
        "Arboviroses são doenças causadas por vírus transmitidos, principalmente, por mosquitos. As arboviroses mais comuns em ambientes urbanos são: Dengue, Chikungunya e Zika, transmitidas pelo mosquito Aedes aegypti.",
      link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/doencas_e_agravos/index.php?p=266741", // Adicionado o link aqui
    },
    {
      title: "Tuberculose",
      image: ImagemTuberculose,
      description:
        " Tuberculose é causada pela bactéria Mycobacterium tuberculosis . A transmissão ocorre por via aérea, através de gotículas expelidas durante a tosse ou espirro de uma pessoa infectada. ",
      link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tuberculose", // Adicionado o link aqui
    },
    {
      title: "Hepatites Virais",
      image:
        "https://i.em.com.br/z-xJI8OVxpt39hYnqsjWwOOocBw=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/30/1500485/ilustracao-de-um-figado-humano_1_50519.png",
      description:
        "As Hepatites A, B e C são inflamações no fígado causadas por diferentes tipos de vírus. Os tipos B e C podem causar doenças graves como cirrose e câncer e todos os tipos de hepatite podem levar à morte.",
      link: "http://antigo.aids.gov.br/pt-br/publico-geral/hv/o-que-sao-hepatites-virais", // Adicionado o link aqui
    },
    {
      title: "Gripes",
      image: ImagemGripe,
      description:
        "Gripe é uma infecção provocada pelo vírus da influenza. Existem quatro tipos de vírus da influenza porem o A e B são responsáveis por epidemias sazonais, sendo o vírus influenza A responsável pelas grandes pandemias.",
      link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gripe-influenza#:~:text=A%20gripe%20%C3%A9%20uma%20infec%C3%A7%C3%A3o,A%20respons%C3%A1vel%20pelas%20grandes%20pandemias.", // Adicionado o link aqui
    },
    {
      title: "AIDS/HIV",
      image: ImagemHiv,
      description:
        "A aids é a causada pela infecção do Vírus da Imunodeficiência Humana no qual ataca o sistema imunológico, e diminiu a defesa do organismo. O vírus é capaz de alterar o DNA dessa célula e fazer cópias de si mesmo.",
        link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/aids-hiv",
    },
    {
      title: "Infecções Diarreicas",
      image: ImagemDiarreica,
      description:
        "As doenças diarreicas agudas (DDA) podem ser causadas por vários microrganismos infecciosos (bactérias, vírus e outros parasitas, como os protozoários) que geram a gastroenterite que afeta o estômago e o intestino.",
        link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda",
    },
    {
      title: "SARS",
      image: ImagemCovid,
      description:
        "É o vírus que causa a síndrome respiratória aguda grave. Os sintomas mais comuns são febre, tosse seca e cansaço, entre outros. O corona vírus de 2019 é ralacionado com a SARS, sendo ele uma váriação do SARS CoV-1",
        link: "https://pt.wikipedia.org/wiki/SARS-CoV",
    }
    
  ];
