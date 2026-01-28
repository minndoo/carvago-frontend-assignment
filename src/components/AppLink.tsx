import React from 'react';
import {Link as ChakraLink, type LinkProps as ChakraLinkProps} from '@chakra-ui/react';
import {createLink, LinkComponent} from '@tanstack/react-router';

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, ChakraLinkProps>(
  (props, ref) => <ChakraLink ref={ref} {...props} />
)

const CreatedLink = createLink(BasicLinkComponent);

export const AppLink: LinkComponent<typeof CreatedLink> = (props) => <CreatedLink preload='intent' {...props} />
