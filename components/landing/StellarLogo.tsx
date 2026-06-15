import Image from 'next/image'

export default function StellarLogo({ className = 'h-8 w-8' }) {
  return (
    <Image
      src="/stellar-xlm-logo.png"
      alt="Stellar logo"
      width={32}
      height={32}
      className={className}
    />
  )
}
