import styled from '@emotion/styled';
import {APIFactory} from '@redhat-cloud-services/javascript-clients-shared'
import {getPrincipalAccess} from '@redhat-cloud-services/rbac-client'
import {apiTagGetTags, apiHostMergeFacts} from '@redhat-cloud-services/host-inventory-client'
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';

const StyledApp = styled.div`
`;

const RbacClient = APIFactory({
  getPrincipalAccess,
  apiTagGetTags,
  apiHostMergeFacts
})

export function App() {
  useEffect(() => {
    
        RbacClient.getPrincipalAccess({ application: 'my-app', limit: 5 })
        // RbacClient.getPrincipalAccess('my-app', '2', 'application', 'enabled', 5, 0)
        // @ts-ignore
        RbacClient.apiTagGetTags('foo', 'tag')
        RbacClient.apiHostMergeFacts({
          body: { foo: 'bar' },
          hostIdList: ['123', '456'],
          namespace: 'my-namespace'
        })
  }, []);
  return (
    <StyledApp>
      <button onClick={() => {
      }
        }>
        Foobar
      </button>
    </StyledApp>
  );
}

export default App;
