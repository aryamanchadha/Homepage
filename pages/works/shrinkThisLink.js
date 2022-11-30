import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import  {ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Object-Detector">
            <Container>
                <Title>
                Shrink This Link <Badge>2022</Badge>
                </Title>
                <P>
                    A URL Shortner service complete with a front end, a back end and a database connection. This was made as a practice in how databases communicate with apps and in designing a simple back end.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://shrink-this-link.herokuapp.com/app">
                        https://shrink-this-link.herokuapp.com/app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, React, Python, Firebase and Heroku</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/shrinkLink_01.png" alt="URL Shortner" />
                    <WorkImage src="/images/works/shrinkLink_02.png" alt="URL Shortner Results" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work