import styles from './sidebar.module.css';

export default function HeuteSidebar() {
  return (
    <div id="heute-sidebar" className={styles.sidebar}>
        <SidebarItem />
    </div>
  );
}

//

const SidebarItem : React.FC = () => {
    return (
        <div className={styles.item}>
            A
        </div>
    );
}