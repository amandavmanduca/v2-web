import { useAuthContext } from "@app/src/context/auth";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RouteProps, routes } from "./routes";

const SiderMenu = () => {
    const { me } = useAuthContext();
    console.log('me ', me)
    const router = useRouter()
    return (
        <Flex
            flexDirection="column"
            gap="5px"
        >
            {routes(me?.role)?.map((route: RouteProps, index) => {
            const isSelectedPath = router?.pathname === route?.path
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
                    <p>{route?.name}</p>
                </Flex>
            )})}
        </Flex>
    )
}
export default SiderMenu;