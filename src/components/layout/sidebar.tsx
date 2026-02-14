"use client";
import { Box, Divider } from '@mui/material';
import styles from './sidebar.module.css';

export default function HeuteSidebar() {
  return (
    <Box id="heute-sidebar" className={styles.body}>
        <div className={styles.container}>
            <SidebarItem />
        </div>
        <Divider orientation="vertical" flexItem />
    </Box>
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