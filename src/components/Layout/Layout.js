import { Container } from "./layout.styled"

export const Layout = ({children}) => {
    return(
        <Container>
            <main>{children}</main>
        </Container>
    )
}