import Link from "next/link"
import styles from "../styles/Homepage.module.scss";

const buttons = [
    {title: "Présentation", path: "/presentation"},
    {title: "Portfolio", path: "/portfolio"},
    {title: "Contacts", path: "/contacts"},
]

const renderButtons = (buttons).map(button => {
    return (
        <Link href={button.path}>
            <div className={styles.buttons__item}>
                <div className={styles.buttons__itemTitle}>{button.title}</div>            
            </div>
        </Link>



    )
})

export default function index() {
    return (
        <div className={styles.home}>
            <div className={styles.textContainer}>
                <h1>Quentin Roux</h1>
                <h1>Developpeur FullStack</h1>
                <div className={styles.buttons}>
                    {renderButtons}                    
                </div>
            </div>
        </div> 

    )
}

