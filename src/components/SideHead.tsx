import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 bg-white border-b">
      <div className="flex items-center gap-5">
        <Bell
          className="text-gray-600 cursor-pointer hover:text-primary"
          size={20}
        />
        <img
          src="/images/avatar.jpg"
          alt="User"
          width={36}
          height={36}
          className="rounded-full border"
        />
      </div>
    </header>
  )
}
