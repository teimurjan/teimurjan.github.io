import type { SVGProps } from 'react'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number
}

const Ic = ({ size = 16, children, ...rest }: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
)

export const IconFolder = (p: IconProps) => (
  <Ic {...p}>
    <path d="M3 7.5 C 3 6.7, 3.6 6, 4.4 6 L 9 6 L 11 8 L 19.5 8 C 20.3 8, 21 8.7, 21 9.5 L 21 17.5 C 21 18.3, 20.3 19, 19.5 19 L 4.5 19 C 3.7 19, 3 18.3, 3 17.5 Z" />
  </Ic>
)

export const IconFile = (p: IconProps) => (
  <Ic {...p}>
    <path d="M6.5 3.2 L 14 3.2 L 18.6 7.8 L 18.6 20.6 C 18.6 21, 18.3 21.3, 17.8 21.3 L 6.5 21.3 C 6 21.3, 5.7 21, 5.7 20.6 L 5.7 3.9 C 5.7 3.5, 6 3.2, 6.5 3.2 Z" />
    <path d="M14 3.5 L 14 7.5 L 18.3 7.7" />
    <path d="M8.5 12 L 15.5 12 M 8.5 15 L 14 15 M 8.5 18 L 13 18" />
  </Ic>
)

export const IconChev = (p: IconProps) => (
  <Ic {...p}>
    <path d="M9 6 L 15.2 12 L 9 18.1" />
  </Ic>
)

export const IconCopy = (p: IconProps) => (
  <Ic {...p}>
    <rect x="8.2" y="8" width="11.5" height="12.5" rx="0.5" />
    <path d="M15.8 8 L 15.8 4.5 C 15.8 4.2, 15.5 4, 15.2 4 L 4.5 4 C 4.2 4, 4 4.2, 4 4.5 L 4 15.5 C 4 15.8, 4.2 16, 4.5 16 L 8 16" />
  </Ic>
)

export const IconCheck = (p: IconProps) => (
  <Ic {...p}>
    <path d="M5 12 L 10 17 L 19 7" />
  </Ic>
)

export const IconDownload = (p: IconProps) => (
  <Ic {...p}>
    <path d="M12 4 L 12 15.5 M 7 11 L 12 16 L 17 11" />
    <path d="M4 19 L 20 19" />
  </Ic>
)

export const IconCalendar = (p: IconProps) => (
  <Ic {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="0.5" />
    <path d="M3.5 9.5 L 20.5 9.5 M 8 3 L 8 6.5 M 16 3 L 16 6.5" />
  </Ic>
)

export const IconMail = (p: IconProps) => (
  <Ic {...p}>
    <path d="M3.5 6 L 12 13 L 20.5 6" />
    <rect x="3.2" y="5.5" width="17.6" height="13" rx="0.5" />
  </Ic>
)

export const IconGitHub = (p: IconProps) => (
  <Ic {...p}>
    <path
      d="M9.2 20 C 9.2 18.8, 9.2 17.7, 9.2 16.8 C 5.5 17.5, 4.8 14.8, 4.8 14.8 C 4.2 13.3, 3.4 13, 3.4 13 C 2.4 12.3, 3.5 12.3, 3.5 12.3 C 4.7 12.4, 5.3 13.5, 5.3 13.5 C 6.3 15.2, 8 14.7, 8.7 14.4 C 8.8 13.7, 9.1 13.2, 9.4 12.9 C 6.5 12.6, 3.4 11.4, 3.4 6.5 C 3.4 5, 3.9 3.9, 4.7 3 C 4.6 2.7, 4.2 1.4, 4.9 0 C 4.9 0, 6 0.4, 8.7 2 C 9.7 1.7, 10.8 1.6, 12 1.6 C 13.2 1.6, 14.3 1.7, 15.3 2 C 18 0.3, 19.1 0, 19.1 0 C 19.8 1.4, 19.4 2.7, 19.3 3 C 20.1 3.9, 20.6 5, 20.6 6.5 C 20.6 11.4, 17.5 12.6, 14.5 12.9 C 14.9 13.3, 15.3 14, 15.3 15.2 C 15.3 16.9, 15.3 18.6, 15.3 20"
      transform="translate(0,2)"
    />
  </Ic>
)

export const IconLinkedIn = (p: IconProps) => (
  <Ic {...p}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M7 10 L 7 17 M 7 7 L 7 7.5" />
    <path d="M11 17 L 11 10 M 11 13 C 11 11, 12.5 10, 14 10 C 15.5 10, 17 11, 17 13 L 17 17" />
  </Ic>
)

export const IconLink = (p: IconProps) => (
  <Ic {...p}>
    <path d="M10 14 C 11.5 15.5, 13.5 15.5, 15 14 L 18 11 C 19.5 9.5, 19.5 7, 18 5.5 C 16.5 4, 14 4, 12.5 5.5 L 11 7" />
    <path d="M14 10 C 12.5 8.5, 10.5 8.5, 9 10 L 6 13 C 4.5 14.5, 4.5 17, 6 18.5 C 7.5 20, 10 20, 11.5 18.5 L 13 17" />
  </Ic>
)

export const IconStar = (p: IconProps) => (
  <Ic {...p}>
    <path d="M12 3 L 14.5 8.7 L 20.6 9.5 L 16 13.7 L 17.2 19.8 L 12 16.7 L 6.8 19.8 L 8 13.7 L 3.4 9.5 L 9.5 8.7 Z" />
  </Ic>
)

export const IconSearch = (p: IconProps) => (
  <Ic {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15 15 L 20 20" />
  </Ic>
)

export const IconCollapse = (p: IconProps) => (
  <Ic {...p}>
    <path d="M5 8 L 12 14 L 19 8" />
  </Ic>
)

export const IconClose = (p: IconProps) => (
  <Ic {...p}>
    <path d="M6 6 L 18 18 M 18 6 L 6 18" />
  </Ic>
)

export const IconPlay = (p: IconProps) => (
  <Ic {...p}>
    <path d="M7 4.5 L 19 12 L 7 19.5 Z" fill="currentColor" />
  </Ic>
)

export const IconCap = (p: IconProps) => (
  <Ic {...p}>
    <path d="M2.5 9 L 12 4.5 L 21.5 9 L 12 13.5 Z" />
    <path d="M6 11 L 6 16 C 6 17.5, 9 18.5, 12 18.5 C 15 18.5, 18 17.5, 18 16 L 18 11" />
    <path d="M21.5 9 L 21.5 14" />
  </Ic>
)

export const IconHash = (p: IconProps) => (
  <Ic {...p}>
    <path d="M5 9 L 20 9 M 4 15 L 19 15 M 10 4 L 8 20 M 16 4 L 14 20" />
  </Ic>
)

export const IconCommand = (p: IconProps) => (
  <Ic {...p}>
    <path d="M9 9 L 9 15 L 15 15 L 15 9 Z" />
    <path d="M9 9 C 9 7, 7 7, 7 9 C 7 11, 9 11, 9 9" />
    <path d="M15 9 C 15 7, 17 7, 17 9 C 17 11, 15 11, 15 9" />
    <path d="M9 15 C 9 17, 7 17, 7 15 C 7 13, 9 13, 9 15" />
    <path d="M15 15 C 15 17, 17 17, 17 15 C 17 13, 15 13, 15 15" />
  </Ic>
)

export const IconMic = (p: IconProps) => (
  <Ic {...p}>
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5.5 11 C 5.5 14.5, 8.5 17, 12 17 C 15.5 17, 18.5 14.5, 18.5 11" />
    <path d="M12 17 L 12 21 M 9 21 L 15 21" />
  </Ic>
)

export const IconMenu = (p: IconProps) => (
  <Ic {...p}>
    <path d="M4 7 L 20 7 M 4 12 L 20 12 M 4 17 L 20 17" />
  </Ic>
)

interface AvatarProps {
  size?: number
  className?: string
}

export const SketchAvatar = ({ size = 100, className }: AvatarProps) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
    <rect width="100" height="100" fill="#1a1a1e" />
    <circle
      cx="50"
      cy="48"
      r="30"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.4"
      strokeDasharray="2 3"
      opacity="0.4"
    />
    <path
      d="M30 50 C 30 35, 40 28, 50 28 C 60 28, 70 35, 70 50 C 70 60, 64 67, 58 70 L 58 76 L 42 76 L 42 70 C 36 67, 30 60, 30 50 Z"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M34 38 C 38 30, 50 26, 62 32 C 66 34, 68 38, 67 42"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="42" cy="48" r="4.5" fill="none" stroke="#ece6d8" strokeWidth="1.4" />
    <circle cx="58" cy="48" r="4.5" fill="none" stroke="#ece6d8" strokeWidth="1.4" />
    <path d="M47 48 L 53 48" stroke="#ece6d8" strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M40 60 C 44 64, 56 64, 60 60"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M42 64 C 46 67, 54 67, 58 64"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M22 100 C 24 86, 36 78, 50 78 C 64 78, 76 86, 78 100"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

export const PubScribbleSketch = () => (
  <svg viewBox="0 0 80 45" width="60%" height="60%" style={{ opacity: 0.4 }} aria-hidden="true">
    <path
      d="M5 35 C 20 25, 35 32, 50 22 C 60 16, 70 18, 75 12"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="60" cy="14" r="2" fill="#ece6d8" />
    <path d="M5 40 L 75 40" stroke="#ece6d8" strokeWidth="0.8" opacity="0.5" />
  </svg>
)

export const ConfSketch = () => (
  <svg viewBox="0 0 80 45" width="60%" height="60%" style={{ opacity: 0.4 }} aria-hidden="true">
    <rect x="10" y="14" width="60" height="18" fill="none" stroke="#ece6d8" strokeWidth="1.2" />
    <path
      d="M14 18 L 66 18 M 14 22 L 60 22 M 14 26 L 48 26"
      stroke="#ece6d8"
      strokeWidth="1"
      opacity="0.6"
    />
  </svg>
)

export const InterviewSketch = () => (
  <svg viewBox="0 0 80 45" width="60%" height="60%" style={{ opacity: 0.4 }} aria-hidden="true">
    <path
      d="M40 12 C 32 12, 28 18, 28 24 C 28 30, 33 34, 40 34 C 47 34, 52 30, 52 24 C 52 18, 48 12, 40 12 Z"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.2"
    />
    <path
      d="M22 42 C 26 36, 34 33, 40 33 C 46 33, 54 36, 58 42"
      fill="none"
      stroke="#ece6d8"
      strokeWidth="1.2"
    />
  </svg>
)
