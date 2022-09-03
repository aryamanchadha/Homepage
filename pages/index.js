import {Container, Icon, Box, Heading, Image, Link, List, useColorModeValue, Button, ListItem} from '@chakra-ui/react'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
    IoMail,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'


const Page = () => {
    

    const [value, setValue] = useState('aryamanchadha21@gmail.com');
    const [copied, setCopied] = useState(false);
    

    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6} marginTop="50px">
                Hello, I&apos;m a full-stack developer based in Vancouver!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Aryaman Chadha
                    </Heading>
                    <p>Digital Craftman (Developer / Artist)</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius ="full" 
                    src="/images/arya.jpg" 
                    alt="Profile Pic" />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Aryaman is an Intranet Admininstrator at Best Buy and a full-stack developer based in Vancouver with a passion for building 
                and learning about web applications as well as computer vision. He has a knack for solving real-life problems, all the way from planning to execution.
                When not at the computer, he likes to paint and make diy projects.</Paragraph>
                <Box align="center" my={4}>
                   <NextLink href="/works" passHref>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme = "teal">My Portfolio</Button>
                    </NextLink>
                    <NextLink href="https://drive.google.com/uc?export=download&id=1Yd4b7t3GTxz6D6aXibt4pnbxTzLMX6Xv" passHref>
                        <Button ml={5} rightIcon={<ChevronRightIcon />} colorScheme = "teal">Resume</Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as='h3' variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                    Born in Punjab (ਪੰਜਾਬ), India.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed the Bachelors in computer science program at the University of the Fraser Valley.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Started his role as an Intranet Admininstrator at the Best Buy Canadian Headquaters.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Art, Music, 
                    Machine learning, Food, Travelling
                </Paragraph>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/aryamanchadha" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} /> }>
                                @aryamanchadha
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/aryaman-chadha-143b7b191/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} /> }>
                                Aryaman Chadha
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                            <Button value={value} onClick={({target: {value}}) => setValue(value)} variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} /> }>
                                aryamanchadha21@gmail.com
                            </Button>
                            </CopyToClipboard>
                            {copied ? <span>Copied to Clipboard </span>: null}
                            {copied ?  setTimeout(() => {setCopied(false)},1500): null}
                    </ListItem>
                </List>
            </Section>
        </Container>
        </Layout>
    )
}
export default Page