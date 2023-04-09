import { Text as ChakraText, TextProps } from "@chakra-ui/react"

const Text = ({ children, ...props}: TextProps) => {
    return (
        <ChakraText {...props}>
            {children}
        </ChakraText>
    )
}

export default Text