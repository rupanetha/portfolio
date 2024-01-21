type LinkProps = {
  href: string
  children: JSX.Element
}

export default function Link({ href, children }: LinkProps) {
  return (
    <a href={href} target="_blank" className="text-[#5f7cff] hover:underline">
      {children}
    </a>
  )
}
