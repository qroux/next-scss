import Link from 'next/link'
import styles from "../styles/components/Portfolio.module.scss";


const jsProjects = [
    { lang: "Javascript", repo: "https://github.com/qroux/react-streaming", path: "https://react-stream-client.herokuapp.com/", title: "Twitch Copy", image: "/portfolio/cursed-twitch.png", tech: "/react.svg"},
    { repo: "https://github.com/qroux/nuxt-cabinet", path: "https://dr-roux-gilbert.chirurgiens-dentistes.fr/", title: "Cabinet Dentaire", image: "/portfolio/nuxt-cabinet.png", tech: "/vue.svg"},
    { repo: "https://github.com/qroux/DigitalOcean_Ticketing", path: "https://ticketswapping.xyz/", title: "Microservices", image: "/portfolio/ticketswapping.png", tech: "/typescript.svg"},

    // { repo: "https://github.com/qroux/kickstart", path: "https://kickstarter-copy.herokuapp.com/", title: "Blockchain", image: "/portfolio/kickstarter.png", tech: "/eth.svg"},
]


const rubyProjects = [
    { lang: "Ruby", repo: "https://github.com/qroux/NOTICE-DROIT", path: "https://www.notice-droit.fr/", title: "notice-droit.fr", image: "/portfolio/notice.png", tech: "rails.svg"},
    { repo: "https://github.com/qroux/trust-test", path: "https://trustpair-test.herokuapp.com/",title: "Open Data", image: "/portfolio/trust.png", tech: "/rails.svg"},
    { repo: "https://github.com/qroux/sinatra-test", path: "https://skello-sinatra.herokuapp.com/",title: "Sinatra Blog", image: "/portfolio/skello.png", tech: "/sinatra.svg"},
]

const renderProjects = (projects) => {
    return (
        <div className={styles.row}>
            <h3 className={styles.row__heading}>{projects[0].lang} </h3>
            <div className={styles.row__content}>
                {projects.map((project) => (
                   
                        <div className={styles.item}>
                            <img className={styles.item__photo} src={project.image} alt={project.image}/>
                            <a className={styles.item__link} href={project.path} target="_blank">
                                <div className={styles.item__description}>
                                    <div className={styles.item__main}>
                                        <img src={project.tech} alt={project.tech} className={styles.item__logo}/>
                                        <h5 className={styles.item__heading}>{project.title}</h5>
                                    </div>
                                    <a href={project.repo} target="_blank">
                                        <img src="/github.svg" alt="github.svg" className={styles.item__github}/>
                                    </a>


                                </div>
                            </a>                        
                        </div>                    
                ))}
            </div>
        </div>

    )
}




export default function Portfolio() {
    return (
        <div className={styles.portfolio__layout}>
            <div className={styles.portfolio__container}>
                <h2 className={styles.heading}>Portfolio</h2>

                <div className={styles.rows}>
                    {renderProjects(jsProjects)}
                    {renderProjects(rubyProjects)}

                </div>


            </div>
        </div>
    )
}