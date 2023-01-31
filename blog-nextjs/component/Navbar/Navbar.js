import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <Link href='acceuil'>acceuil</Link>
        <Link href='blog'>blog</Link>
        <Link href='Contact'>Contact</Link>

    </nav>
  )
}
