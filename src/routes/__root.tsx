import { Container } from '@chakra-ui/react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <Container background="fill-gray" width="100vw" maxW="100vw" height="100vh">
    <Outlet />
    <TanStackRouterDevtools />
  </Container>
)

export const Route = createRootRoute({ component: RootLayout })