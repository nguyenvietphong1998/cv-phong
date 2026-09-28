import { CalendarClock, MapPin } from 'lucide-react'
import type { Profile } from '../types/cv'

interface AvatarCardProps {
  profile: Profile
}

/** thẻ avatar: ảnh (hoặc chữ cái đầu nếu để trống avatarUrl), tên, chức danh */
export const AvatarCard = ({ profile }: AvatarCardProps) => {
  // Lấy các chữ cái đầu của tên để làm avatar chữ khi chưa có ảnh
  const initials = profile.fullName
    .split(' ')
    .map((word) => word.charAt(0))
    .slice(-2)
    .join('')
    .toUpperCase()

  return (
    <section className="mb-8 flex flex-col items-center text-center">
      {profile.avatarUrl ? (
        <img
          src={profile.avatarUrl}
          alt={`Ảnh đại diện của ${profile.fullName}`}
          className="h-32 w-32 rounded-full border-4 border-sky-200 object-cover dark:border-sky-800"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-4xl font-bold text-white"
        >
          {initials}
        </div>
      )}
      <h1 className="mt-4 text-2xl font-extrabold leading-tight">{profile.fullName}</h1>
      <p className="mt-1 font-medium text-sky-600 dark:text-sky-400">{profile.title}</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{profile.shortIntro}</p>
      <div className="mt-3 flex flex-col items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} aria-hidden="true" /> {profile.location}
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarClock size={14} aria-hidden="true" /> {profile.yearsOfExperience}+ năm kinh nghiệm
        </span>
      </div>
    </section>
  )
}
