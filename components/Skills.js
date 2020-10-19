import styles from "../styles/components/Skills.module.scss";

// const stacks = [
//     { title: "Javascript", logo: "/javascript.svg" , langs: ["/node.svg", "/react.svg", "/redux.png", "/vue.svg" ]},
//     { title: "Ruby", logo: "/ruby.svg" , langs: ["/rails.svg", "/sinatra.svg", "/postgresql.svg" ]},
//     { title: "DevOps", logo: "/devops.svg" , langs: ["/docker.png", "/kubernetes.svg" ]}
// ]

const sections = [
    {title: "FrontEnd", content: "Réalisation et intégration d'interfaces graphiques respectant les dernières contraintes : ", span: "Responsive Design, Accessibilité, Performances, Compatibilité, SEO (server side rendering).", images: ["/sass.svg", "/react.svg", "/redux.svg", "/vue.svg"]},
    {title: "BackEnd", content: "Conception d'applications web. Choix du language selon les besoins et le temps de developpement disponible. ", span: "Ruby on Rails ou Javascript.", images: ["/rails.svg", "/javascript.svg"]},
    {title: "DevOps", content: "Mise en place de process de développement et de mise en production permettant une automatisation de certains actes répétitifs et chronophages. ", span: "Gains de fiablité, productivité et sérénité du développement.", images: ["/docker.svg", "/kubernets.svg"]}

]

// const renderStack = stacks.map(stack => {
//     return (
//         <div key={stack.title} className={styles.skills__card}>
//             <div className={styles.skills__cardMain}>
//                 <img src={stack.logo} alt={stack.title} className={styles.skills__cardMainImage}/>
//             </div>
//             <div className={styles.skills__cardStack}>
//                 {stack.langs.map(lang => {
//                     return (
//                         <img src={lang} alt={lang} className={styles.skills__cardStackImage}/>
//                     )
//                 })}                
//             </div>
//         </div>
//     )
// })

const renderSections = sections.map(section => {
    return (
        <section className={styles.section__container}>
        <h3 className={styles.section__header}>{section.title}</h3>
        
        <div className={styles.section__content}>
            <div className={styles.section__contentMain}>
    <p>{section.content}<span className={styles.section__contentMainBold}>{section.span}</span></p>
            </div>
            <div className={styles.section__contentImages}>
                {section.images.map(image => {
                    return (
                        <img src={image} alt={image} className={styles.section__contentImages__item}/>
                    )
                })}              
            </div>
        </div>
        </section>
    )
})

export default function Skills() {
    return (
        <div className={styles.skills__layout}> 
            <div className={styles.skills__container}>
                <div className={styles.skills__header}>
                    <h2 className={styles.skills__heading}>Compétences et Languages</h2>
                </div>
                {renderSections}
            </div>
        </div>
    )
}