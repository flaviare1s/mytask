/* eslint-disable react/prop-types */
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../firebase/auth"

// Link => esse componente habilita o SPA (Single Page Application)
// OBS.: Se houver links externos, utilize a tag a e não o Link

const Menu = ({ usuario }) => {
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
					<img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32"/>
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ms-auto">
						{usuario && <Link className="nav-link" to='/tarefas'>Tarefas</Link>}
						{!usuario && <Link className="nav-link" to='/login'>Login</Link>}
						{!usuario && <Link className="nav-link" to='/cadastro'>Cadastro</Link>}
						<Link className="nav-link" to='ajuda'>Ajuda</Link>
						{usuario && <Button variant="outline-light" onClick={handleLogout}>Sair</Button>}
					</Nav>
				</Navbar.Collapse>
      </Container>
     </Navbar>
    </header>
  )
}

export default Menu
