import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import  {ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Drum-Kit">
            <Container>
                <Title>
                Drum Kit <Badge>2022</Badge>
                </Title>
                <P>
                    A drum Kit that I&aposm working on. You can use this to annoy people.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://aryamanchadha.github.io/drumKit/">
                        https://aryamanchadha.github.io/drumKit/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/drumkit.png" alt="drum kit" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work