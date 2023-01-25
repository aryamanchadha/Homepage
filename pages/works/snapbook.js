import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import  {ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Social Media App">
            <Container>
                <Title>
                Social Media App <Badge>2023</Badge>
                </Title>
                <P>
                    This is a full stack application for which I have made the back end API using Node.JS and Express.JS connecting it to a mongoDB database which is serving a React.js front end app which I have also made. It has the ability to register new users with a profile image, keeping a user logged in even when the tab is closed, liking/unliking posts and adding/removing friends while being able to view everyones posts and create new ones.
                    <br />
                    The authentication is handled by bcrypt for the authentication and JWT token for the session information and session persistence once the user has been authenticated till the browser is closed. The user data and images are stored locally with the help of react drop zone and multer - a npm package I have coded different routes for actions on users, actions on posts and authentication actions.
                    <br />
                    The User route takes care of adding and removing friends and updating all friend lists and getting the user profile information for the main feed and the users page. Similarly, the posts route deals with post creation and likes and authentication deals with login, registering and session persistence even when the tab is closed.
                    <br />

                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Demo Video</Meta>
                        <Link href="https://clipchamp.com/watch/TsF3Rcht1SU">
                        https://clipchamp.com/watch/TsF3Rcht1SU <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Node.JS, Express.JS, mongoDB and React</span>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    <WorkImage src="/images/works/snapbook_homepage_light.png" alt="Homepage light" />
                    <WorkImage src="/images/works/snapbook_homepage.png" alt="Homepage dark" />
                    <WorkImage src="/images/works/snapbook_register.png" alt="Homepage dark" />
                    <WorkImage src="/images/works/snapbook_login.png" alt="Homepage dark" />

                </List>
            </Container>
        </Layout>
    )
}

export default Work