import React from "react";
import style from "./title.module.css";
import Link from "next/link";

export default function Title() {
  return (
    <header className={style.title}>
      <h1>Personal Website</h1>
    </header>
  );
}