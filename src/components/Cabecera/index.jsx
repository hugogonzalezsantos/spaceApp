import styled from "styled-components"
const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`
const Cabecera = () =>{
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo space App"/>
    </HeaderEstilizado>
}
export default Cabecera