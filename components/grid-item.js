import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Button} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text fontSize={14}>{children}</Text>
            </LinkOverlay>
        </LinkBox>

    </Box>
)

export const WorkGridItem = ({children, id, title, thumbnail, url, inactive, buttonText, gitbuttonText, gitUrl}) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer" pb={5}>
            <Image src={thumbnail}
            width={275}
            height={175}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
             />

            <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>{title}</Text>
            </LinkOverlay>
            <Text  fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
        <Box pb={5}>
        <NextLink href={url} cursor="pointer" >
        <Button colorScheme = "teal" disabled={inactive}>{buttonText}</Button>
        </NextLink>
        </Box>
        <NextLink href={gitUrl} cursor="pointer">
        <Button colorScheme = "teal" variant='outline' pr={7} pl={7}>{gitbuttonText}</Button>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={
        `
        .grid-item-thumbnail {
            border-radius: 12px;
        }
        `
    } />
)