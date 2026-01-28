import React from 'react';
import {Button, ButtonProps} from '@chakra-ui/react';
import {createLink, LinkComponent} from '@tanstack/react-router';

const BasicButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button ref={ref} {...props} />
)

const CreatedLink = createLink(BasicButtonComponent);

export const ButtonAppLink: LinkComponent<typeof CreatedLink> = (props) => <CreatedLink preload='intent' {...props} />
