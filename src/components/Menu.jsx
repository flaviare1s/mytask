import { Link } from "react-router-dom"

// Link => esse componente habilita o SPA (Single Page Application)
// OBS.: Se houver links externos, utilize a tag a e não o Link

const Menu = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cadastro'>Cadastro</Link>
        <Link to='ajuda'>Ajuda</Link>
      </nav>  
    </header>
  )
}

export default Menu
