import styled from "styled-components";

const HeaderNavbar = styled.header`
    width: 100%;
    height: 45px;
    background-color: white;
    position: sticky;
    top: 0;
`;

const Navbar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ULNavbar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0 0 0 10px;
`;

const LINavbar = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const LinkNavbar = styled.a`
    cursor: pointer;
    color: ${props => props.color || "#000"};
    font-size: ${props => props.font_size || "14px"};
    font-weight: ${props => props.font_weight || "500"};
    border-bottom: 2px solid transparent;
    text-decoration: none;
    transition: .255s ease-out;

    &:hover, &.active {
        color: ${props => props.color_hover || "#000"};
        border-bottom-color: ${props => props.border_color || "black"};
    }
`;

const itemsNavbar = [
    {name: "Home", link: "/", class_name: "active"},
    {name: "Tasks", link: "/tasks", class_name: ""},
    {name: "Configurações", link: "/configuracoes", class_name: ""},
];

function Header() {
    return (
        <HeaderNavbar>
            <Navbar>
                <ULNavbar>
                    {
                        itemsNavbar.map(item => (
                            <LINavbar>
                                <LinkNavbar
                                    color="#534b4b"
                                    color_hover="black"
                                    href={item.link}
                                    className={item.class_name}
                                >{item.name}</LinkNavbar>
                            </LINavbar>
                        ))
                    }
                    {/* <LINavbar><LinkNavbar color="#534b4b" color_hover="black">Home</LinkNavbar></LINavbar>
                    <LINavbar><LinkNavbar color="#534b4b" color_hover="black">Tasks</LinkNavbar></LINavbar>
                    <LINavbar><LinkNavbar color="#534b4b" color_hover="black">Configurações</LinkNavbar></LINavbar> */}
                </ULNavbar>
            </Navbar>
        </HeaderNavbar>
    );
}

export default Header;