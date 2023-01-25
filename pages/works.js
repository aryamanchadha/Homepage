import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import shrinkLink from '../public/images/works/shrinkLink.png'
import snapbook from '../public/images/works/snapbook_homepage.png'
import Section from '../components/section'
import imgClassifier from '../public/images/works/image_classifier.PNG'
import retinaImg from '../public/images/works/retina_tracking.PNG'
import Layout from "../components/layouts/article";
import drumkit from "../public/images/works/drumkit.png";
import memoryGame from "../public/images/works/memory_game.png"
import todolist from "../public/images/works/todolist.png"

const Works = () => {
    
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                    <WorkGridItem id="snapbook"
                    title="Social Media App"
                    thumbnail={snapbook}
                    url="https://clipchamp.com/watch/TsF3Rcht1SU"
                    buttonText="Demo Video"
                    gitUrl="https://github.com/aryamanchadha/Social-Media-App/blob/main/README.md"
                    gitbuttonText="Source"
                    srcinactive={false}
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
                    <WorkGridItem id="todolist"
                    title="ToDo List App"
                    thumbnail={todolist}
                    url="https://mighty-mesa-94233.herokuapp.com/"
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
                    gitUrl="https://github.com/aryamanchadha/eye-tracking-through-webcam/blob/main/README.md"
                    gitbuttonText="Source"
                    inactive={true}
                    />
                </Section>
                <Section>
                    <WorkGridItem id="drumKit" 
                    title="Drum Kit" 
                    thumbnail={drumkit} 
                    url="https://aryamanchadha.github.io/drumKit/" 
                    buttonText="Live Demo"
                    gitUrl="https://github.com/aryamanchadha/Homepage"
                    gitbuttonText="Source"
                    />
                </Section>
                                <Section>
                    <WorkGridItem id="memoryGame" 
                    title="Memory Game" 
                    thumbnail={memoryGame} 
                    url="https://aryamanchadha.github.io/memoryGame/" 
                    buttonText="Live Demo"
                    gitUrl="https://github.com/aryamanchadha/memoryGame"
                    gitbuttonText="Source"
                    />
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works