"use client";

import Link from "next/link"
import styles from "./navlink.module.css"
import { usePathname } from "next/navigation"

const { container, active } = styles
const Navlink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link href={item.url} className={`${container} ${pathName === item.url && active}`}>{item.title}</Link>
  )
}

export default Navlink