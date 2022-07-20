import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
    <div className="landing">
      <div>
        <p>C'est nous qu'on a les meilleurs jeux dans tout l'espace de l'univers. Et ouais.</p>
      </div>
    </div>

    <div className="firstSection">
      <div className="firstLeft">
        <div className="niktmor">
          
          <h2>Nos jeux sont validé par les meilleurs</h2>
          <p>Les plus grand joueurs on testé est validé nos jeux, nos jeux sont donc parfait pour tout les cerveaux de tout nos clients.
          </p>
          <div className="grid">
          <Link to="/membres">
            <img src="https://img.lemde.fr/2017/12/07/0/0/3500/2333/664/0/75/0/3892f92_PJ401_FILM-STARWARS-ALIENLIFE_1207_11.JPG" alt="" />
            <img src="https://www.presse-citron.net/app/uploads/2022/03/8-starwarsepisode3larevan_ver_1_0.jpg" alt="" />
            <img src="https://static.hitek.fr/img/actualite/2015/03/fb_cn.webp" alt="" />
            <img src="https://www.netcost-security.fr/wp-content/uploads/2022/01/1643629327_Alien-cetait-la-fin-alternative-du-film-original-qui-758x426.jpg" alt="" />
            <img src="https://i.ebayimg.com/images/g/MEIAAOSwwYpawBEr/s-l1600.jpg" alt="" />
            <img src="https://admin-blogs.lalibre.be/app/uploads/sites/2/2013/05/3529764758-1-1.jpg" alt="" />
          </Link>
          </div>
        </div>
      </div>
      <div className="firstRight">
        <div className="beztamer">
          <img src="https://vl-media.fr/wp-content/uploads/2017/09/Star-Trek-The-Next-Generation-Season-6-Postere-mzhxkkr2igdohkdzr8s0oi0agsx062crtg181on27s.jpg" alt="" />
        <div>
        <h3>Les meilleurs jeux de toute les galaxies</h3>
        <p>Notre équipage a parcourue les plus grandes galaxies afin de vous proposer les meilleurs jeux, la technologie de spook association nous permet égalment un rangement de nos jeux aussi rapidement qu'un Han Solo dans de la carbonite. </p>
          </div>
        </div>
      </div>
    </div>

    <div className="secondSection">
      <div className="secondLeft">
        <img src="https://www.journaldugeek.com/content/uploads/2021/12/template-jdg-28.jpg" alt="" />
      </div>
      <div className="secondRight">
        <h3>Les meilleurs avantages l'univers</h3>
        <p>yIDoghQo,Duj tIvoqtaH ! Qui veut dire en Klingont "NE SOIT PAS RIDICULE ET FIE TOI A TON INSTINCT JEUNE KENOBI ! TAIS TOI ET ACHETE LES PRODUIT KIRK ! </p>
        <ul>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
            <p>Un accès à la vitesse de la lumière.</p>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
            <p>Une selection de jeux faites par nos experts.</p>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
            <p>Une fraicheur sans égale dans toute la galaxie.</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="thirdSection">
      <h2>Des produits qui sont trop bons sa mère vous en reviendrez pas la vérité</h2>
      <div className="thirdInner">
        <div className="thirdInnerFirst">
          <Link to="/jeux">
            <img  src="https://x.boardgamearena.net/data/gamemedia/eminentdomain/box/default_280.png?h=1651658374" alt="" style={{width:"500px",height:"300px"}}/>
          </Link>
          <h3>Les meilleurs jeux compétitif</h3>
        
          <p>Nos jeux compétitif sont la sélection des plus grand les plus sages de la galaxie d'andromède, des porgs, des wookie et une pincé de xenomorph pour l'originalité.</p>
        </div>
        <div className="thirdInnerSecond">
          <Link to="/jeux">
            <img  src="https://x.boardgamearena.net/data/gamemedia/bang/box/default_280.png?h=1651658192" alt="" style={{width:"500px",height:"300px"}}/>
          </Link>
          <h3>Les meilleur jeux de famille de tout P3X-P89</h3>
          <p>Une seule partie suffit à nourrir l'intellect d'un adult sauf si votre nom est Merry ou bien Peppin.</p>
        </div>
      </div>
    </div>

    <div className="fourthSection">
      <h2>Une sélection de nos produits les plus populaire.</h2>

      <div className="fourthGrid">
        <img src="https://x.boardgamearena.net/data/gamemedia/eminentdomain/box/default_280.png?h=1651658374" alt="" />
        <img src="https://x.boardgamearena.net/data/gamemedia/eminentdomain/box/default_280.png?h=1651658374" alt="" />
        <img src="https://x.boardgamearena.net/data/gamemedia/eminentdomain/box/default_280.png?h=1651658374" alt="" />
        <img src="https://x.boardgamearena.net/data/gamemedia/eminentdomain/box/default_280.png?h=1651658374" alt="" />
        <img src="https://x.boardgamearena.net/data/gamemedia/stoneage/box/default_280.png?h=1651658845" alt="" />
        <img src="https://x.boardgamearena.net/data/gamemedia/stoneage/box/default_280.png?h=1651658845" alt="" />
        <img src="https://x.boardgamearena.net/data/gamemedia/stoneage/box/default_280.png?h=1651658845" alt="" />
      </div>
    </div>
    </>
  );
}
