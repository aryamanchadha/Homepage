import {Container, Box, Heading, useColorModeValue, Input, FormControl, Button, Stack, InputLeftAddon, NumberInput, InputGroup, NumberInputField, Textarea} from '@chakra-ui/react'
import Section from '../components/section'
import { InfoIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import emailjs from 'emailjs-com'



const contactMe = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a7jrhkq', 'template_ra68ph9', e.target, '-HRIMGfEGelPWgAkf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <Layout>
            <Container>
                <Box flexGrow={1} padding={5}>
                    <Heading as='h2' variant='page-title'>
                        Contact Me
                    </Heading>
                </Box>
                <Section delay={0.1}>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6} marginTop="50px">
                <p style={{fontSize: "17px"}}>Please feel free to leave your contact information with an optional message and I will reach out to you as soon as possible!</p>
                </Box>
            </Section>
            <Section delay={0.3}>
                
            <form onSubmit={sendEmail}>
            <Stack spacing={4}>
            <FormControl isRequired>
                <InputGroup><InputLeftAddon children={<InfoIcon />} />

                <Input type="text" 
                placeholder="Name"  
                color='teal' 
                name='name' 
                _placeholder={{opacity: 1, color: 'inherit'}} 
                focusBorderColor='inherit' 
                errorBorderColor='crimson' />

                </InputGroup>
                </FormControl>
                <FormControl isRequired>
                <InputGroup>
                <InputLeftAddon children={ <EmailIcon />} />

                <Input type="email" 
                color='teal'
                 placeholder="Email"
                  name='email'  
                  _placeholder={{opacity: 1, color: 'inherit'}} 
                  focusBorderColor='inherit' 
                  errorBorderColor='crimson' 
                  /> 

                  </InputGroup>
                  </FormControl>
                <FormControl isRequired>
                <InputGroup>
                <InputLeftAddon children={ <PhoneIcon />} />
                <NumberInput> <NumberInputField inputMode='tel'
                 color='teal'
                  name='phone'
                   placeholder="Phone no."
                    _placeholder={{opacity: 1, color: 'inherit'}} 
                    focusBorderColor='inherit' errorBorderColor='crimson'
                    /> 
                    </NumberInput>
                    </InputGroup>
                    </FormControl>
                <Textarea placeholder='Message' 
                name='message' 
                color="teal"
                 _placeholder={{opacity: 1, color: 'inherit'}} 
                />
                <Button type="submit" colorScheme='teal'>Submit</Button>
                </Stack>
            </form>
            </Section>
            </Container>
        </Layout>
    )
}

export default contactMe