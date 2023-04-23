import { Flex } from "@chakra-ui/react"
import Text from "../../atoms/Text"

const TitleSection = () => {
    return (
        <>
            <Text fontWeight="bold" fontSize="32px">Rede Penssan</Text>
            <Text>Projetos de Pesquisa</Text>
        </>
    )
}

const LoginTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex
            w="100%"
            h="100%"
            bgColor="gray.100"
            display="grid"
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            minHeight="100vh"
            alignItems="center"
        >
            <Flex
                w="100%"
                h="100%"
                flexGrow={1}
                display={["none", "none", "flex"]}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                bgColor="gray.50"
            >
                <TitleSection />
            </Flex>
            <Flex w="100%" padding={["30px", "30px", "60px", "80px"]} flexDirection="column" gap="20px" justifyContent="center">
                <Flex display={["grid", "grid", "none"]}>
                    <TitleSection />
                </Flex>
                {children}
            </Flex>
        </Flex>
    )
}
export default LoginTemplate