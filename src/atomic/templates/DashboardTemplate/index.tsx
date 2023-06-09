import { Flex, Grid } from "@chakra-ui/react";
import SiderMenu from "./SiderMenu";

interface DashboardTemplate {
    children: React.ReactNode;
    title: string;
}

const DashboardTemplate = ({ children, title }: DashboardTemplate) => {
    return (
        <Flex
            flexDirection="column"
            w="100%"
            h="100%"
            bgColor="primary.100"
            flexGrow={1}
            height="100vh"
        >
            <Flex
                display="grid"
                gridTemplateColumns="200px 1fr"
                h="100%"
                w="100%"
                flexGrow={1}
            >
                <Flex
                    flexDirection="column"
                    flexGrow={1}
                    maxH="100%"
                    boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                >
                    <SiderMenu />
                </Flex>
                <Flex flexDirection="column" maxH="100%">
                    <Flex
                        w="100%"
                        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                        height="60px"
                        padding="10px 20px"
                        justifyContent="center"
                        alignItems="center"
                        fontWeight="bold"
                        backgroundColor="gray.300"
                    >
                        Penssan | {title}
                    </Flex>
                    <Flex flexDirection="column" padding="20px" height="calc(100vh - 60px)" overflowY="auto">
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashboardTemplate;