import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import { mergeRefs } from "./utility";

export type WaitForRefProps = {
    children: React.ReactNode;
};

export const WaitForRef = forwardRef<HTMLDivElement, WaitForRefProps>(
    function WaitForRef(props, ref) {
        const [ready, setReady] = useState(false);
        const innerRef = useRef<HTMLDivElement | null>(null);

        useLayoutEffect(() => {
            if (innerRef.current) setReady(true);
        }, []);

        return (
            <div ref={mergeRefs(ref, innerRef)}>
                {ready && props.children}
            </div>
        );
    }
);