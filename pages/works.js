import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import shrinkLink from '../public/images/works/shrinkLink.png'
import Section from '../components/section'
import objectDetection from '../public/images/works/object_detector_eyecatch.png'
import imgClassifier from '../public/images/works/image_classifier.PNG'
import retinaImg from '../public/images/works/retina_tracking.PNG'
import Layout from "../components/layouts/article";
import drumkit from "../public/images/works/drumkit.png";

const Works = () => {
   // const thumbObjectDetector = `../public/images/works/object-detector-eyecatch.PNG`
    
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="objectDetector" 
                    title="React Computer Vision" 
                    thumbnail={objectDetection} 
                    url="https://object-detector-tensorflow.herokuapp.com/" 
                    buttonText="Live Demo"
                    gitUrl="https://github.com/aryamanchadha/ReactComputerVisionTemplate"
                    gitbuttonText="Source"
                    />
                </Section>
                <Section>
                    <WorkGridItem id="shrinkThisLink"
                    title="URL Shortner"
                    thumbnail={shrinkLink}
                    url="https://shrink-this-link.herokuapp.com/app"
                    buttonText="Live Demo"
                    gitUrl=""
                    gitbuttonText="Source"
                    srcinactive={true}
                    />
                </Section>
                <Section>
                    <WorkGridItem id="imageClassifier" 
                    title="Image Classification Model" 
                    thumbnail={imgClassifier} 
                    url="https://object-detector-tensorflow.herokuapp.com/" 
                    buttonText="Live Demo" 
                    gitUrl="https://github.com/aryamanchadha/image-classifier"
                    gitbuttonText="Source"
                    inactive={'true'}
                    />
                </Section>
                <Section delay={0.2}>
                    <WorkGridItem id="retina-tracker" 
                    title="Retina Tracking Program" 
                    thumbnail={retinaImg} 
                    url="https://object-detector-tensorflow.herokuapp.com/" 
                    buttonText="Live Demo"
                    gitUrl="https://github.com/aryamanchadha/ReactComputerVisionTemplate"
                    gitbuttonText="Source"
                    inactive={true}
                    />
                </Section>
                <Section>
                    <WorkGridItem id="drum-kit" 
                    title="Drum Kit" 
                    thumbnail={drumkit} 
                    url="https://aryamanchadha.github.io/drumKit/" 
                    buttonText="Live Demo"
                    gitUrl="https://github.com/aryamanchadha/Homepage"
                    gitbuttonText="Source"
                    />
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works