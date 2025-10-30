import Image from "next/image"
import Link from "next/link"

interface EventCardProp {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ image, title, slug, location, date, time }: EventCardProp) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image src={image} alt={title} height={300} width={410} className="poster" />
      <div className="flex gap-2">
        <Image src={`/icons/pin.svg`} alt={"location"} height={14} width={14} />
        <p>{location}</p>
      </div>
      <p>{title}</p>
      <div className="datetime">
        <div className="flex gap-2">
          <Image src={`/icons/calendar.svg`} alt={"date"} height={14} width={14} />
          <p>{date}</p>
        </div>
        <div className="flex gap-2">
          <Image src={`/icons/clock.svg`} alt={"time"} height={14} width={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard