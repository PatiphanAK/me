const contents = ["home", "about", "skill", "project","contact"]

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">My Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {contents.map(content => (
            <li key={content}>
              <a href={`#${content}`} className="capitalize">
                {content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
