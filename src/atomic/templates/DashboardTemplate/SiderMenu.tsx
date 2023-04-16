import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

type RouteProps = {
    name: string;
    path: string
}

const routes: RouteProps[] = [
    {
        name: 'Projetos',
        path: '/dashboard/projects'
    },
    {
        name: 'Modelos',
        path: '/dashboard/templates'
    },
    {
        name: 'Entrevistas',
        path: '/dashboard/interviews'
    },
]

const SiderMenu = () => {
    const router = useRouter()
    return (
        <Flex
            flexDirection="column"
            gap="5px"
        >
            {routes?.map((route: RouteProps, index) => {
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