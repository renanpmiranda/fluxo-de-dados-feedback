import {TitleHeader, ProfilePic, InfoProfile} from './styled'

export const Header = (props) => {

    let nomeLogin = ""
    let fotoLogin = ""

    if(props.pageFlow === 2){
        nomeLogin = props.nome
        fotoLogin = props.fotoDePerfil
    }

    return(
        <>   
             
        <TitleHeader>  
            <InfoProfile>            
            <ProfilePic src={fotoLogin}></ProfilePic> 
            {nomeLogin}
            </InfoProfile>                     
            Insta4    

        </TitleHeader>
        </>
    )
}