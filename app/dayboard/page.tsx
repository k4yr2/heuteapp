import Dayboard from "@/src/components/dayboard";
import styles from "./page.module.css";

export default function DayboardPage() {
  return (
    <div className={styles.body}>
      <Dayboard />
    </div>
  );
}