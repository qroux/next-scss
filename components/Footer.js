import styles from "../styles/components/Footer.module.scss";


const copyToClipboard = () => {
    navigator.clipboard.writeText("quentin.roux@hotmail.fr")  
}

const logos = [
    {title: "Github", logo: "/github.svg" ,path: "https://github.com/qroux"},
    {title: "Linkedin", logo: "/linkedin.svg" ,path: "https://www.linkedin.com/in/quentin-roux-445164182/"},
    // {title: "Email", logo: "/email.svg" ,path: ""},
]

const renderLogos = (logos).map(logo => {
    return (
        <a key={logo.title} href={logo.path} target="_blank">
            <div className={styles.logoBox}>
                <img src={logo.logo} alt={`${logo.title} logo`} className={styles.logo}/>
            </div>
        </a>   

    )
})

export default function Footer() {
    return (
        <div className={styles.footerLayout}>
            <div className={styles.footerContainer}>
                <h3 className={styles.footer__heading}>
                    Contacts
                </h3>             
                <div className={styles.logos}>
                    {renderLogos}
                    <a onClick={e => copyToClipboard(e)}>
                        <div onClick={copyToClipboard} className={styles.logoBox}>
                            <img src="/email.svg" alt="email logo" className={styles.logo}/>
                        </div>
                    </a>  
                </div> 
                <div>
                    <p>Fait avec NextJS + Sass</p>
                </div>           
            </div>
        </div> 
    )
}