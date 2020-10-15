import Link from "next/link"
import styles from "../styles/Homepage.module.scss";

const cards = [
    {title: "Présentation", path: "/presentation", description: "Du droit à la programmation"},   
    {title: "Languages", path: "/languages", description: "Prestations et Langages"},
    // {title: "Portfolio", path: "/portfolio", description: "Du droit à la programmation"},
]

const renderCards = (cards).map(card => {
    return (
        <Link key={card.title} href={card.path}>
            <div className={styles.card}>
                <h3 className={styles.card__heading}>{card.title}</h3>
                <p className={styles.card__text}>
                    {card.description}
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

                     {/* <section className={styles.card__}>
                       
                            <img src="/react-logo.svg" alt="react logo" className={styles.reactLogo}/>
                     
                    </section> */}
                </div>
            </div>

            <div className={styles.cardsLayout}>
                <div className={styles.cardsContainer} id="cardSection">
                {/* {renderCards} */}
                <Link href={cards[0].path}>
                    <div className={styles.card}>
                        <h3 className={styles.card__heading}>{cards[0].title}</h3>
                        {/* <p className={styles.card__text}>
                            {cards[0].description}
                        </p> */}
                        <div className={styles.card__logoBox}>
                           

                        </div>
                    </div>
                </Link>
                <Link href={cards[1].path}>
                    <div className={styles.card}>
                        <h3 className={styles.card__heading}>{cards[1].title}</h3>
                        {/* <p className={styles.card__text}>
                            {cards[1].description}
                        </p> */}
                        <div className={styles.card__logoBox}>
                            <img src="/javascript.svg" alt="javascript logo" className={styles.card__logo}/>
                           

                        </div>
                    </div>
                </Link>
                {/* <Link href={cards[2].path}>
                    <div className={styles.card}>
                        <h3 className={styles.card__heading}>{cards[2].title}</h3>
                         <p className={styles.card__text}>
                            {cards[2].description}
                        </p> 
                            <div className={styles.card__logoBox}>
                           

                           </div>
                    </div>
                </Link> */}


                </div>   
            </div>





        </div>


    )
}

