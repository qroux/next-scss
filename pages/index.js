import Link from "next/link"
import styles from "../styles/Homepage.module.scss";

const cards = [
    {title: "Présentation", path: "/presentation"},   
    {title: "Skills", path: "/skills"},
    {title: "Portfolio", path: "/portfolio"},
]

const renderCards = (cards).map(card => {
    return (
        <Link key={card.title} href={card.path}>
            <div className={styles.card}>
                <h3 className={styles.card__heading}>{card.title}</h3>
                <p className={styles.card__text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt accusamus nemo quis dignissimos doloremque ex iusto.
                </p>
            </div>
        </Link>



    )
})

export default function index() {
    return (
        <div className={styles.homePage}>
            <div className={styles.textLayout}>
                <div className={styles.homeContainer}>

                    <section className={styles.textBox}>
                        <h1 className={styles.text__regular}>Quentin Roux</h1>
                        <h1 className={styles.text__crossed}>Juriste</h1>
                        <h1 className={styles.text__negativ}>Développeur Fullstack</h1>
                    </section>

                     {/* <section className={styles.logoBox}>
                       
                            <img src="/react-logo.svg" alt="react logo" className={styles.reactLogo}/>
                     
                    </section> */}
                </div>
            </div>

            <div className={styles.cardsLayout}>
                <div className={styles.cardsContainer} id="cardSection">
                {renderCards}


                </div>   
            </div>





        </div>


    )
}

