import { useAuthContext } from "@app/src/context/auth";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RouteProps, routes } from "./routes";
import Text from "../../atoms/Text";
import { useEffect } from "react";
import { roleLabel } from "@app/src/common/utils/role-label";
import { UserRoleEnum } from "@app/graphql/generated";

const SiderMenu = () => {
    const { me, logout, refetchMe } = useAuthContext();
    const router = useRouter()
    useEffect(() => {
        refetchMe()
    }, [router.pathname, refetchMe])
    return (
        <Flex flexDirection="column" height="100%" justifyContent="space-between">
            <Flex
                flexDirection="column"
                gap="5px"
                height="100%"
                justifyContent="start"
            >
                {routes(me?.role)?.map((route: RouteProps, index) => {
                    const isSelectedPath = router?.pathname.includes(route?.path)
                    return ( 
                        <Flex
                            key={index}
                            backgroundColor={isSelectedPath ? 'primary.200' : 'transparent'}
                            color={isSelectedPath ? 'white' : ''}
                            fontWeight={isSelectedPath ? 'semibold' : 'regular'}
                            alignItems="center"
                            padding="10px 20px"
                            textAlign="center"
                            cursor="pointer"
                            onClick={() => router.push(route?.path)}
                        >
                            <Text textAlign="start">{route?.name}</Text>
                        </Flex>
                    )}
                )}
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <Flex w="100%">
                    <Text fontWeight="bold" padding="20px" bgColor="gray.200" textAlign="center" w="100%">{roleLabel[me?.role as UserRoleEnum]}</Text>
                </Flex>
                <Flex onClick={() => logout()} cursor="pointer" w="100%">
                    <Text padding="20px" bgColor="gray.200" textAlign="center" w="100%">Sair</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default SiderMenu;