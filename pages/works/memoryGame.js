import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import  {ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Memory-Game">
            <Container>
                <Title>
                Memory Game <Badge>2022</Badge>
                </Title>
                <P>
                    A memory game where you have to follow the sequence that is displayed on the screen.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://aryamanchadha.github.io/memoryGame/">
                        https://aryamanchadha.github.io/memoryGame/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/memory_game.png" alt="Memory Game" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work