import {useRouter} from "next/router"
import fetch from "isomorphic-fetch"
import Container from "../../components/Container";

const User = ({user}) =>{

    const router = useRouter()
    const {id} = router.query;

    return (
        <Container>
            <div className="row" >
                <div className="col-md-6 offset-md-3" >
                    <div className="card" >
                    <div className="card-header" >
                        <img src={user.avatar} alt="avatar" />

                        </div>
                    <div className="card-body" >
                        <h3>
                            {user.first_name} {user.last_name }
                        </h3>
                        <p>{user.email}</p>
</div>
                    </div>
                </div>
            </div>
        </Container>
    )
        
    
}

User.getInitialProps = async (ctx) =>{
    const resp = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const resJson = await resp.json()
    return {user: resJson.data}
}

export default User