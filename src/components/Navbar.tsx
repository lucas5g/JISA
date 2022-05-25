import Link from 'next/link'
import jwtDecode from 'jwt-decode'

import { useEffect, useState } from 'react'
import { NavLink } from './NavLink'


interface User {
    name: string
    profile: string

}

export function Navbar() {

    const [user, setUser] = useState<User>({
        name: '', profile: ''
    })


    useEffect(() => {

        if (localStorage.getItem('events-token')) {
            const token = localStorage.getItem('events-token')
            setUser(jwtDecode(token || ''))
        }
    }, [])

    return (

        <nav className="navbar navbar-dark navbar-expand-lg navbar-light fw-bold fixed-top bg-secondary">
            <div className="container">
                <Link href='/'>
                    <a className="navbar-brand">
                        JISA
                    </a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <NavLink href='/turmas'>
                            Turmas
                        </NavLink>
                        <NavLink href='/equipes'>
                            Equipes
                        </NavLink>
                        <NavLink href='/jogos'>
                            Jogos
                        </NavLink>

                        <NavLink href='/pontos'>
                            Pontos
                        </NavLink>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link active dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-user-alt"></i>
                                &nbsp;
                                Usuário
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="/usuarios">
                                        <i className="fas fa-user-friends"></i>
                                        &nbsp;
                                        Usuários
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/modalidades">
                                        <i className="fas fa-running"></i>
                                        &nbsp;
                                        Modalidades
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/locais">
                                        <i className="fas fa-map-marked-alt"></i>
                                        &nbsp;
                                        Locais
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/jogos-juiz">
                                        <i className="fas fa-gamepad"></i>
                                        &nbsp;
                                        Jogos - Juíz
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/#sair"
                                        onClick={() => {
                                            localStorage.clear()
                                            window.location.href = '/'
                                        }}
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                        &nbsp;
                                        Sair
                                    </a>
                                </li>

                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}




    // return (
    //     <>
    //         <Navbar bg="dark" variant='dark' className='purple-gradient' expand="lg"   >
    //             <Container >
    //                 <Link href={'/'}>
    //                     <Navbar.Brand href='/' >
    //                         Eventos
    //                         </Navbar.Brand>
    //                 </Link>
    //                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //                 <Navbar.Collapse id="responsive-navbar-nav">
    //                     <Nav className="ms-auto">
    //                         {user.name &&
    //                             <>
    //                                 <NavLink href='/convidados'>
    //                                     Convidadados
    //                                 </NavLink>
    //                                 <NavLink href='/relatorio'>
    //                                     Relatório
    //                                 </NavLink>
    //                             </>
    //                         }
    //                         {(user.profile === 'Admin' || user.profile === 'Gerente') &&
    //                             <NavLink href='/usuarios'>
    //                                 Usuários
    //                             </NavLink>
    //                         }
    //                         {!user.name &&
    //                             <NavLink href='/login'>
    //                                 Login
    //                             </NavLink>
    //                         }
    //                         {user.name &&
    //                             <NavDropdown title={user.name} id="collasible-nav-dropdown" >

    //                                 <NavDropdown.Item href="/sair">
    //                                     Sair
    //                                 </NavDropdown.Item>
    //                             </NavDropdown>
    //                         }

    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </Container>
    //         </Navbar>
    //     </>

    // )


