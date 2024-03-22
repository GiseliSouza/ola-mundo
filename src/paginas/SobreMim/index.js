import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto1.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Giseli!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Giseli De Souza sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluna da escola de formação a Alura e estou feliz de fazer parte daqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal de Minas Gerais (IFNMG), quando comecei a cursar Licenciatura Ciências da Computação. 
                Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. 
                Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior tambem fiz outras licenciaturas Pedagogia(UNIPAC-MG), LETRAS/LIBRAS(EFICAZ - PR) Licenciatura em Educação Especial(UNISANTA - SP) 
                Bacharel LETRAS/LIBRAS(EFICAZ - PR) especializei na area da Educação especial, Tradutor e Intéprete de LIBRAS, trabalhei 10 anos na Educação no estado de Minas Gerais, 
                porem apareceu novas oportunidades, novas areas de aprendizagem, e retomei de onde parei na época. . 
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha vida virada do avesso e estou adorando, sao tantas novidades neste novo universo da programação. 
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. 
                Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!

            </p>
            <p className={styles.paragrafo}>
                Buscar o conhecimento é como desbravar um oceano de possibilidades infinitas. Cada nova descoberta é uma pérola de valor inestimável, que uma vez adquirida, torna-se um tesouro pessoal que ninguém pode tirar de você. 
                É um investimento que se acumula e se multiplica, enriquecendo não só o individuo, mas toda a humanidade com sua capacidade de inpirar e transformar.
            </p>
        </PostModelo>
    )
}