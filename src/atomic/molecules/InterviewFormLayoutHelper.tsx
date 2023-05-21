import { Flex, FlexProps } from "@chakra-ui/react"

interface InterviewFormLayoutHelperProps extends FlexProps {
    children: React.ReactNode;
}

const InterviewFormLayoutHelper = (props: InterviewFormLayoutHelperProps ) => {
    return (
        <Flex w="100%">
            <Flex
                w="100%"
                flexDirection="column"
                p="10px 30px"
                gap="15px"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                borderRadius="5px"
                {...props}
            >
                {props?.children}
            </Flex>
        </Flex>
    )
}
export default InterviewFormLayoutHelper