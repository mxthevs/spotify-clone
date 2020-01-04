import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/46231311?v=4" alt="Avatar" />
      Matheus Henrique
    </User>
  </Container>
);

export default Header;
