import { UseToastOptions, useToast as chakraToast } from '@chakra-ui/react'

export default function useToast() {
    const alert = chakraToast()

    function toast(options?: UseToastOptions) {
        alert({
            variant: "subtle",
            duration: 5000,
            isClosable: true,
            position: 'top-right',
            ...options
        })
    }
    
    return toast
}