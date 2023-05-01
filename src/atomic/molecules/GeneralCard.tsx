import { Flex, FlexProps } from "@chakra-ui/react"
import Text from "../atoms/Text";
import { Maybe } from "graphql/jsutils/Maybe";

interface GeneralCardProps extends FlexProps {
    children: React.ReactNode;
    cardtitle?: Maybe<string> | undefined;
}

const GeneralCard = (props: GeneralCardProps) => {
    return (
        <Flex
            flexDirection="column"
            padding="10px 20px"
            borderRadius="5px"
            backgroundColor="gray.200"
            minHeight="100px"
            {...props}
        >
            {props?.cardtitle && <Text fontWeight="bold">{props?.cardtitle}</Text>}
            {props?.children}
        </Flex>
    )
}
export default GeneralCard;