import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"} className="logo">
          <Image src={"/icons/logo.png"} alt="logo" width={20} height={20} />
          <p>UpNext</p>
        </Link>

        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/events"}>Events</Link>
          <Link href={"/Create-event"}>Create Event</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar