import { MainImage } from "components/MainImage";
import { PresentationCards } from "components/PresentationCards";
import { PresentationTitle } from "components/PresentationTitle";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <PresentationTitle /> <MainImage /> <PresentationCards />
    </>
  );
};
/** POSIBLE SOLUCION AL PROBLEMA:
 *
 * WRAPPEAR EL TITLE Y LA MAIN IMAGE EN UN CONTENEDOR CON DISPLAY FLEX DIRECTION COLUMN
 * CUANDO SE ESTIRA LA PANTALLA, SE PARA A DIRECTION ROW
 */
export default Home;
