import React from 'react';
import {Link as ChakraLink, type LinkProps as ChakraLinkProps} from '@chakra-ui/react';
import {Link as RouterLink, type LinkProps as RouterLinkProps} from '@tanstack/react-router';

type AppLinkProps = ChakraLinkProps & RouterLinkProps;

export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => (
  <ChakraLink as={RouterLink} ref={ref} {...props} />
));
