import Head from "next/head"
import Container from "../components/Container"
import fetch from "isomorphic-fetch"
import Users from "../components/Users"

const Index = (props) =>{
    return (
            <Container>
            <Head>
                <title>Home</title>
            </Head>
                <h1>Index</h1>
                <h1>Next</h1>
                <Users users={props.users} />
            </Container>
    )
}

Index.getInitialProps = async (ctx) =>{
    const response = await fetch('https://reqres.in/api/users')
    const resJson = await response.json()

    return {users: resJson.data}
}

export default Index