import Link from "next/link";


export default function NavbarTitlesLeft() {
  return (
    <div className="flex items-center gap-5 ">
      <Link href='/'>Home</Link>
      <Link href='/'>Features</Link>
      <Link href='/'>Benefits</Link>
    </div>
  )
} 
