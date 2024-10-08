/* eslint-disable react/prop-types */
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../firebase/auth"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import logo from "../assets/logo.jpg"

// Link => esse componente habilita o SPA (Single Page Application)
// OBS.: Se houver links externos, utilize a tag a e não o Link

const Menu = () => {
	const usuario = useContext(UserContext)
	const navigate = useNavigate()

	function handleLogout() {
		logout().then(() => {
			navigate('/login')
		})
	}

  return (
    <header>
     <Navbar bg='dark' variant="dark" expand="sm">
      <Container fluid>
				<Link to='/'>
					<img className="rounded-circle" src={logo} width="32"/>
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ms-auto">
						{usuario && <Link className="nav-link" to='/tarefas'>Tarefas</Link>}
						{!usuario && <Link className="nav-link" to='/login'>Login</Link>}
						{!usuario && <Link className="nav-link" to='/cadastro'>Cadastro</Link>}
						<Link className="nav-link" to='ajuda'>Sobre</Link>
						{usuario && <span className="nav-link text-light">{usuario.displayName}</span>}
						{usuario && <Button variant="outline-light" onClick={handleLogout}>Sair</Button>}
					</Nav>
				</Navbar.Collapse>
      </Container>
     </Navbar>
    </header>
  )
}

export default Menu
