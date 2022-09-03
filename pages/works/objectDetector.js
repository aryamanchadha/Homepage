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
                React Computer Vision App <Badge>2022</Badge>
                </Title>
                <P>
                    An implementation the tensorflow js library using an object detection model to make predictions on what it sees through the webcam.
                    Please allow webcam access and wait for a minute for the model to load.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://object-detector-tensorflow.herokuapp.com/">
                            https://www.object-detector-tensorflow.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, React, Tensorflow.js</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/object_detector_01.png" alt="Object Detector" />
                    <WorkImage src="/images/works/object_detector_02.png" alt="Object Detector" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work