/* eslint-disable @next/next/no-img-element */

export function Logo(props) {
  return (
    <span className="flex items-center">
      <img src="logo.png" alt="logo" className="w-12" />
      <span className="text-purple-400 font-bold text-xs uppercase">Slide Trade</span>
    </span>
  )
}
