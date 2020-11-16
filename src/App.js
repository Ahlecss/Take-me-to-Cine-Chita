import React, {useCallback} from 'react';
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useHistory} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ux">
            <UX />
          </Route>
          <Route path="/dev">
            <Dev />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <i className="cursor" id="cursor"></i>
      </div>
    </Router>
  );
}

const Home = () => {
  let history = useHistory();  
  window.addEventListener('mousemove', textShadow)
  const Enter = ()  => {
    document.getElementById('title').classList.add('title_moving');
    document.getElementById('enterbutton').classList.add('button_moving');
    window.removeEventListener('mousemove', textShadow)

    setTimeout(() => {
      history.push('/ux');
      }, 2500);
    //title.style.scale = '3'
  }
  return (
  <>
  <h1 className="title" id="title">Take me <br/> to Cinechita</h1>
  <aside className="box_enter_button">
    <button className="button" id="enterbutton" onClick={() => Enter()}>Comment vais-je aider Cinéchita ? </button>
  </aside>
  </>
  );
}

const UX = () => {
  window.removeEventListener('mousemove', textShadow)
  return (
    <section className="UXpage">
        <nav>
          <ul>
            <li>
              <Link to="/ux" className="button">UX</Link>
            </li>
            <li>
              <Link to="/dev" className="button">Dev et Visuel</Link>
            </li>
          </ul>
        </nav>
      <article>
        <p>Afin de rendre l’expérience Cinéchita la plus mémorable possible, je compte mettre ma veille technologique et visuelle à contribution, chercher le potentiel d'interaction, en m'appuyant sur des choses existantes, avec des références comme <span className="emoji_word award">Awwwards</span> ou <span className="emoji_word award">FWA</span>. </p>
        <p>S'inspirer de ce qui existe déjà, observer l'<span className="emoji_word england">Angleterre</span>, les <span className="emoji_word usa">USA</span>, mais aussi innover et suivre les nouveautés en termes d'expériences cinématographiques</p>
        <p>Définir et mettre en <span className="emoji_word light">lumière</span> les valeurs de Cinéchita, avec l'aide du designer.</p>
        <p>Je peux apporter mon regard et mes avis sur la conception, sous formes de Moodboard, Wireframes, Maquettes, ou en créeant des <span className="emoji_word paint">prototypes</span> à l'aide d'<span className="emoji_word paint">Adobe XD</span>, en cherchant l' <span className="theme" onPointerEnter={() => gifAnimation('effet')} onPointerLeave={() => gifAnimationStop('effet')}>effet wahou.</span></p>
        <p>J'apporterai mes connaissances sur les <span className="emoji_word road">parcours utilisateurs</span>, afin de rendre l'expérience la plus fluide possible, donner l'envie au visiteur d'en savoir plus, et de tenter l'expérience</p>
      <p>Je m'impregnerai également de l'ambiance des films projetés afin d'en sortir un contexte, l'essence du film, son propos, son humour, et chercher ainsi des interactions possibles, notamment pour la pré-expérience </p>
      </article>

      <article>
      <p>Pour l’expérience <span className="emoji_word pin">In situ</span>, je découvrirai des façons de concevoir des shaders ou autre technologie <br/><span className="theme" onPointerEnter={() => gifAnimation('shader')} onPointerLeave={() => gifAnimationStop('shader')}>visuelle</span><br/> et les mettrai en place avec l’aide des designers et des techniciens. J’ai encore beaucoup à apprendre sur ce sujet. Comment seront composés les installations ? Y’aura t’il des capteurs ? Quelles seront les interactions possibles ?</p>

      </article>


    </section>
    );
}

const Dev = () => {

  const interactifEnter = () => {
    document.getElementById('mask').style.display = "flex";
    
  }
  const interactifOut = () => {
    document.getElementById('mask').style.display = "none";
  }
  return (
    <section className="Devpage">

        <nav>
          <ul>
            <li>
              <Link to="/ux" className="button">UX</Link>
            </li>
            <li>
            <Link to="/dev" className="button">Dev et Visuel</Link>
            </li>
          </ul>
        </nav>

      <article>
        <p>Mon but, en tant que développeur, sera de rendre l'expérience de Cinéchita <span className="theme interactif" onPointerEnter={() => interactifEnter()} onPointerLeave={() => interactifOut()}>interactive</span></p>

      </article>
      <article>
        <p>Pour que les visiteurs puissent découvrir Cinéchita et les expériences cinématographiques immersives, 2 grandes parties semblent à réaliser ces 6 prochains mois:</p>
          <p>L’élaboration d’un site complet décrivant ces expériences</p>
          <p>Une partie shop, lié à réservation de tickets</p> 
          <p>Pour réaliser ces tâches, je peux utiliser des outils d’intégration web, tels que <span className="emoji_word triangle">HTML/CSS/JS</span>, et l’utilisation d’un Framework adapté aux besoins que nous déterminerons dès les premières semaines. Comme <span className="emoji_word computer">Vue</span>, ou <span className="emoji_word computer">React</span> et puiser dans les nombreuses librairies disponibles sur internet. Je m'appuierai sur les maquettes préalablement réalisées pour les développer.</p>
          <p>Côté immersion, certaines libraires 2D et 3D permettront de créer des univers sur mesure, comme <span className="emoji_word dimension">paperJs</span>, ou <span className="emoji_word dimension">ThreeJS</span></p>

        <p>Le style étant peut être amené à être décliné, nous pourrons mettre en place une bibliothéque de composants, afin de <span className="emoji_word reuse">réutiliser</span> efficacement le design des pages.</p>

        <p>Pour garantir l’accès à cet art et la lisibilité pour tous, ce site sera réalisé en <span className="emoji_word phone">responsive</span> (adaptable à tout type d’écran), et conçu avec les notions d’accessibilités.</p>
        
        <p>Le taille de l'équipe étant amenée à <span className="emoji_word grow">grandir</span>, l'intégralité du code sera disponible pour tous sur Github/Gitlab, et de bonnes pratiques seront mises en place, afin de garantir la qualité de ce code. Comme l'utilisation <span className="emoji_word tree">d'arbres git</span>, pour garder un historique du projet. De code review, pour échanger autour des pratiques de dev. 
          D'estimation des fonctionnalités à construire, pour déterminer le temps de chaque tâche, et de <span className="emoji_word ticket">ticket</span>, pour en préciser leur contenu.</p>
      </article>
      <article>
        <p>Concernant le <span className="theme" onPointerEnter={() => gifAnimation('seo')} onPointerLeave={() => gifAnimationStop('seo')}>SEO</span> je pourrai être d'une grande utilité sur la <span className="emoji_word eyes">visibilitée</span> du site de Cinéchita, en garantissant son référencement sur les moteurs de recherches</p>
      </article>
      <article>
      <p>Pour la <span className="theme" onPointerEnter={() => gifAnimation('communication')} onPointerLeave={() => gifAnimationStop('communication')}>communication</span> au sein de l’équipe, nous pourrons si vous le souhaitez, travailler en <span className="emoji_word paper">méthodes agiles</span>. Cela permettra d’avoir un suivi régulier de l’avancement, se féliciter lors des réussites, et s’entraider si des points sont bloquants.</p>
      </article>
      <article>
      <p>Quelques questions sur mes besoins : Aurais je du matériel de travail ? Aurais-je d'autres développeurs avec qui échanger ? Qui validera le code que je ferai ? Comment déterminerons nous le temps aloué à chaque tâche ?</p>
      </article>
      <div id="mask"></div>
    </section>
  )
}

function textShadow (ev) {
  const title = document.getElementById('title');
  const posLar1 = (ev.clientX / document.body.scrollHeight) * 100 / 2 //- (ev.clientX / 50)
  const posLon1 = (ev.clientY / document.body.scrollWidth) * 100 / 2 //- (ev.clientY / 50)

  const posLar2 = (ev.clientX / document.body.scrollHeight) * 100 / 2
  const posLon2 = (ev.clientY / document.body.scrollWidth) * 100 / 2

  const posLar3 = (ev.clientX / document.body.scrollHeight) * 100 / 2 //+ (ev.clientX / 50)
  const posLon3 = (ev.clientY / document.body.scrollWidth) * 100 / 2 //+ (ev.clientY / 50)

  title.style.textShadow = `${posLar3 + 1}px ${posLon3}px 0 #f0bcc4, ${posLar2 + 4}px ${posLon2 + 4}px 2px #a50f2c,${posLar1 + 5}px ${posLon1 + 5}px 0 #ffe3e7`
}

const cursorMove = (ev) => {
  let cursor = document.getElementById('cursor');
  cursor.style.top = `${ev.pageY}px`;
  cursor.style.left = `${ev.pageX}px`;
}
const gifAnimation = (theme, state) => {
  let cursor = document.getElementById('cursor');
  let gif = document.createElement("img");
  gif.classList.add('gif')
  console.log(theme);

  window.addEventListener('mousemove', cursorMove)
  switch (theme){
    case 'seo':
      gif.src = 'https://media.giphy.com/media/xGdvlOVSWaDvi/giphy.gif';
      break;
    case 'communication':
      gif.src = 'https://media.giphy.com/media/101DNxoBTatF16/giphy.gif';
      break;
    case 'effet':
      gif.src = 'https://media.giphy.com/media/OwQn9LCHFcQ5G/giphy.gif';
      break;
    case 'shader':
      gif.src = 'https://media.giphy.com/media/xUOrw4TDHDAL3LN7gY/giphy-downsized.gif';
      break;
  }
    cursor.appendChild(gif)
}

const gifAnimationStop = () => {
  let cursor = document.getElementById('cursor');
  let gif = document.getElementsByClassName("gif");
  console.log('stop', gif);
  window.removeEventListener('mousemove', cursorMove)
  cursor.removeChild(cursor.firstChild)
  gif.src = '';
  console.log(gif.src)
}