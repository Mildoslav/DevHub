import { Spinner } from '@chakra-ui/react'

export default function Loader({ show }) {
    return show ? <Spinner size="xl" /> : null;
}
