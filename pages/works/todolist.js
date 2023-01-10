import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import  {ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="ToDo List">
            <Container>
                <Title>
                ToDO List App <Badge>2022</Badge>
                </Title>
                <P>
                    A todo list app I deployed online, It includes EJS templating to create new lists dynamically. I have used mongoDB database to store the list data.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://mighty-mesa-94233.herokuapp.com/">
                        https://mighty-mesa-94233.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, HTML, EJS, mongoDB and Heroku</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/todolist.png" alt="ToDo List" />
                    <WorkImage src="/images/works/todolist_lists.png" alt="List view" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work