import Link from "next/link"

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="uppercase hover:text-amber-600">
        <Icon className='text-2xl sm:hidden' />
        <p className="hidden my-2 text-sm sm:inline">{title}</p>
      </Link>
    </div>
  )
}

export default MenuItem