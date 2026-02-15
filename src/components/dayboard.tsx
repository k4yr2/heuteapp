"use client";
import { createContext, forwardRef, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./dayboard.module.css";

var mounted = false;

export default function Dayboard() {
    useEffect(() => {
        if (!mounted) {
            mounted = true;
        }
        else {
            throw new Error("Dayboard component is already mounted. This should never happen.");
        }
    }, [])

    const panelRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    useLayoutEffect(() => {
        if (panelRef.current) {
            setReady(true);
        }
    }, []);

    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setSize({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
                });
            }
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={panelRef} className={styles.body}>
            {ready && (
                <DayboardContext.Provider value={{ panelRef }}>
                    <DayboardLayout />
                </DayboardContext.Provider>
            )}
        </div>
    );
}

//

const DayboardContext = createContext<DayboardContextProps | null>(null);

type DayboardContextProps = {
    panelRef : React.RefObject<HTMLDivElement | null>;
};

//

const DayboardLayout = forwardRef<HTMLDivElement>(
    function DayboardLayout(props, ref) {
        return (
            <div ref={ref} className={styles.layout}>
                <DayboardGrid w={12} h={3} />
            </div>
        );
    }
);

const DayboardGrid = forwardRef<HTMLDivElement, DayboardGridProps>(
    function DayboardGrid(props, ref) {
        const c = useContext(DayboardContext);

        return (
            <div ref={ref} className={styles.grid}>
                {Array.from({ length: props.w * props.h }).map((_, i) => (
                    <div key={i} className={styles.cell} >
                        {c?.panelRef?.current?.getBoundingClientRect()?.width ?? "sdf"}
                    </div>
                ))}
            </div>
        );
    }
);

type DayboardGridProps = {
    w: number;
    h: number;
}