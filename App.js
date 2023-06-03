import './App.css';
import ComponentList from './CV_component_list';
import ComponentArticleList from './ARTICLE_component_list'

function App() {
  return (
    <div className='body'>
    <main>
      <div className='left'>
      <nav className='navigation'>
        <section className='navigation-profil'> 
        <a className='home-link' href="/">
          <h1 className='name'> Anthony Ta </h1>
        </a>
          <h2 className='role'> Water Engineer at Eau de Paris</h2>
          <h3 className='me'> I build accessible, inclusive and stylish products for the Web during my free time when i'm not under water</h3>
        </section>
        <section className='navigation-list'> 
          <ul className='nav-list'>
            <li> <a className='nav-about' href="/#"><hr className="hr-nav"></hr> ABOUT </a> </li>
            <li> <a className='nav-experience' href="/#"><hr className="hr-nav"></hr> EXPERIENCE </a>  </li>
            <li> <a className='nav-projects' href="/#"><hr className="hr-nav"></hr> PROJECTS </a>  </li> 
            <li> <a className='nav-media' href="/#"><hr className="hr-nav"></hr> MEDIA </a>  </li> 
          </ul>
        </section>
      </nav>

      <footer className='footer'>
        
        
        <ul className='logo-list'>
          <li>
          <a className = 'a-github logo' href="https://github.com/">
            <img className='logo-git'
                src="./img/github.svg"
                alt="Github"
                height="35"
                width="35"/> 
          </a>
          </li>
          <li>
          <a className = 'a-insta logo' href="https://instagram.com/antta77">
            <img className='logo-insta'
                src="./img/insta.svg"
                alt="Instagram"
                height="35"
                width="35"/> 
          </a>
          </li>
          <li>
          <a className = 'a-linkdin logo' href="https://fr.linkedin.com/in/anthony-ta">
            <img className='logo-linkedin'
                src="./img/linkedin.svg"
                alt="Linkedin"
                height="35"
                width="35"
                /> 
          </a>
          </li>
        </ul>
      </footer>
      </div>
      <div className='right'>
      <div className='profil-cv'>
        <section className='profil-desc'>
          <p className='profil-desc-past'>
            In 2014, i've decided to join a boarding school for 2 years to prepare a national exam which enable, depending on your ranking, to be eligible to renowned engineering schools.
            At that time i've decided not to pursue any kind of code courses because i was last at each coding exam class...
            
          </p>
          <p className='profil-desc-now'>
            Today, i'm a full time water engineer working on coding when i'm not under water
            I'm a passionate self learner and i have no limits in learning
          </p>
          <p className='profil-desc-extra'>
            When I'm not at the computer, I'm usually at the gym,
            chatting with my long distance girlfriend,
            hanging out with my friends and family, 
            or shooting at some ennemies in Valorant
          </p>
        </section>
        <section className='profil-experience' id='nav-experience-id'>
          <ComponentList />
        </section>
        <a className='resume' href="/#">View Full Résumé </a>
        <section className='profil-project'>
          <ComponentArticleList />

        </section>
        <section className='profil-media'>
         

        </section>
        <footer className='web-desc'>
          Loosely designed  and coded in Visual Studio Code by yours truly. 
          Built with React, deployed with Vercel. All text is set in the Inter typeface.
        </footer>
      </div>  
      </div>


    </main>
    </div>
  );
}

export default App;
