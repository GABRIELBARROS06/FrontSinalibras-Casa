import styles from "../CSS/Aulas.module.css"
import aula from "../../img/aula.png";
import aula2 from "../../img/aula2.png";
import logo from "../../img/Logo.png";
import play from "../../img/play.png";
import  perfil from "../../img/perfil.png"
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card({ videoId }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/Videos/${videoId}`); // Substitua '/videos/:videoId' pela rota correta
  };

  return (

    <div onClick={handleCardClick}>
      
    <div className={styles.AppHeader1}>
      <h1 className={styles.h1}> Aulas </h1>
      <header className={styles.AppHeader}>

    
      
      </header>

      <div className={styles.inputsectionHeader}>
        <div className={styles.quadradinhoRedondo1}>Animais</div>
        <div className={styles.quadradinhoRedondo2}>Saudações</div>
        <div className={styles.quadradinhoRedondo3}>Comidas</div>
      </div>

    
      <div>
      <img src={perfil} className={styles.perfil} alt="perfil"></img>
   </div>

    
      
      <div>
        <img src={aula} className={styles.img1} alt="aula" />
      </div>

      <div>
        <img src={aula} className={styles.img2} alt="aula" />
      </div>
      

      <div>
        <img src={aula} className={styles.img3} alt="aula" />
      </div>

      <div>
        <img src={aula} className={styles.img4} alt="aula" />
      </div>

      <div>
        <img src={aula} className={styles.img5} alt="aula" />
      </div>
      

      <div>
      <img src={aula2} className={styles.aula2} alt="aula2"></img>
    </div>

    <div>
      <img src={aula2} className={styles.aula3} alt="aula3"></img>
    </div>

    
    <div>
      <img src={aula2} className={styles.aula4} alt="aula4"></img>
    </div>


    <div>
      <img src={aula2} className={styles.aula5} alt="aula5"></img>
    </div>

    <div>
      <img src={aula2} className={styles.aula6} alt="aula6"></img>
    </div>

    <div>
      <img src={aula2} className={styles.aulaf} alt="aulaf"></img>
    </div>

    
    
    <div>
      <img src={aula2} className={styles.aulay} alt="aulay"></img>
    </div>



    <div>
      <img src={aula2} className={styles.aulas} alt="aulas"></img>
    </div>

    
    <div>
      <img src={aula2} className={styles.aulak} alt="aulak"></img>
    </div>

    
    <div>
      <img src={aula2} className={styles.aulal} alt="aulal"></img>
    </div>


    <div>
        <img src={logo} className={styles.logo} alt="logo"></img>
      </div>


<div>

<div>
        <img src={play} className={styles.play} alt="play"></img>
</div>

<div>
        <img src={play} className={styles.play2} alt="play2"></img>
 </div>

 <div>
        <img src={play} className={styles.play3} alt="play3"></img>
 </div>
 <div>
        <img src={play} className={styles.play4} alt="play4"></img>

</div>
        <img src={play} className={styles.play5} alt="play5"></img>

      </div>

    <div>

        <img src={play} className={styles.playA} alt="playA"></img>
  
    </div>

    <div>

    <img src={play} className={styles.playB} alt="playB"></img>
  
    </div>

    <div>

  <img src={play} className={styles.playC} alt="playC"></img>

  </div>
   <img src={play} className={styles.playD} alt="playD"></img>
   
  <div>
  <img src={play} className="playE" alt="playE"></img>
  
  </div>
   
  <img src={play} className={styles.playR} alt="playR"></img>
   
<div>
<img src={play} className={styles.playT} alt="playT"></img>

<div>
<img src={play} className={styles.playY} alt="playY"></img>
</div>

</div>
<img src={play} className={styles.playH} alt="playH"></img>

 
<div>
<img src={play} className={styles.playK} alt="playK"></img>

   </div>
</div>

   </div>

  

    
  );
}

export default Card;