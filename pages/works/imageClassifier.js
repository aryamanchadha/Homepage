import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import  {ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Image-Classifier">
            <Container>
                <Title>
                Image Classification Model <Badge>2022</Badge>
                </Title>
                <P>
                A program to classify images of cars and tell if an image is of a car or not. For the classification of the images,
                 I have used an image classifier known as keras.Sequential model which is a plain stack of layers where every layer has its own input and output tensor.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href="https://github.com/aryamanchadha/image-classifier">
                            https://github.com/aryamanchadha/image-classifier <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Tensorflow</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/image_classifier1.png" alt="Object Detector" />
                    <WorkImage src="/images/works/image_classifier2.png" alt="Object Detector" />
                </List>
            </Container>
        </Layout>
    )
}

export default Work