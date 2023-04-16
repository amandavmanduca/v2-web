import { ButtonProps as ChakraButtonProps, Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
    children: React.ReactNode;
}

const Button = ({
    children,
    ...props
}: ButtonProps) => {
    return (
        <ChakraButton
            {...props}
            backgroundColor="primary.100"
            borderRadius="3px"
            padding="10px 30px"
            height="100%"
        >
            {children}
        </ChakraButton>
    )
}

export default Button;