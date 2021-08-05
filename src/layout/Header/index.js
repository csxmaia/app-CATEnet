import './styles.scss';

export default function Header() {
  return (
    <nav className="header">
      <div className="logo">
        CATEnet
      </div>
      <div className="right">
        <div className="name">
          <span>Cristhian Maia</span>
        </div>
        <div className="icon">
          <div>
            <span>CM</span>
          </div>
        </div>
      </div>
    </nav>
  )
}