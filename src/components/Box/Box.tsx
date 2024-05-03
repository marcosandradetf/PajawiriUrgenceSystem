import style from "./box.module.scss";
import { ReactNode } from "react";

interface BoxProps {
    children: ReactNode;
}

export default function Box({ children }: BoxProps) {
    return (
        <section className={style.box}>
            {children}
        </section>
    );
}
