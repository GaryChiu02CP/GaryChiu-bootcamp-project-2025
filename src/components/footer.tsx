import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
        <div className={style.footer}>
            <p>Copyright © 2023 [Website Name] | All Rights Reserved</p>
        </div>
  );
}