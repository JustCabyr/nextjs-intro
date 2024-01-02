import styles from './style.module.css'

const DocsPage = ({ params }) => {
  return <div className={`${styles.title} ${styles.text}`}>docs page</div>
  // <div> docs id {params.id} {params.title} </div>
}

export default DocsPage
