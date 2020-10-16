import styles from "../styles/components/Skills.module.scss";

const stacks = [
    { title: "Javascript", logo: "/javascript.svg" , langs: ["/node.svg", "/react.svg", "/redux.png", "/vue.svg" ]},
    { title: "Ruby", logo: "/ruby.svg" , langs: ["/rails.svg", "/sinatra.svg", "/postgresql.svg" ]},
    { title: "DevOps", logo: "/devops.svg" , langs: ["/docker.png", "/kubernetes.svg" ]}
]

const renderStack = stacks.map(stack => {
    return (
        <div key={stack.title} className={styles.skills__card}>
            <div className={styles.skills__cardMain}>
                <img src={stack.logo} alt={stack.title} className={styles.skills__cardMainImage}/>
            </div>
            <div className={styles.skills__cardStack}>
                {stack.langs.map(lang => {
                    return (
                        <img src={lang} alt={lang} className={styles.skills__cardStackImage}/>
                    )
                })}                
            </div>
        </div>
    )
})

export default function Skills() {
    return (
        <div className={styles.skills__layout}> 
            <div className={styles.skills__container}>
                <div className={styles.skills__header}>
                    <h2 className={styles.skills__heading}>Languages et Compétences</h2>
                </div>

                <div className={styles.skills__cards}>
                    {renderStack}
                </div>
                {/* <div className={styles.skills__card}>
                    <div className={styles.skills__cardMain}>
                        <img src="/javascript.svg" alt="" className={styles.skills__cardMainImage}/>
                    </div>
                    <div className={styles.skills__cardStack}>
                        <img src="/node.svg" alt="" className={styles.skills__cardStackImage}/>
                        <img src="/react.svg" alt="" className={styles.skills__cardStackImage}/>
                        <img src="/redux.png" alt="" className={styles.skills__cardStackImage}/>
                        <img src="/vue.svg" alt="" className={styles.skills__cardStackImage}/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}