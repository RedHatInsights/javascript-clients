import styled from '@emotion/styled';
import {APIFactory} from '@redhat-cloud-services/javascript-clients-shared'
import {getPrincipalAccess} from '@redhat-cloud-services/rbac-client'
import {apiTagGetTags, apiHostMergeFacts, apiHostHostCheckin} from '@redhat-cloud-services/host-inventory-client'
import { useEffect } from 'react';
import axios from 'axios';

const StyledApp = styled.div`
`;

const RbacClient = APIFactory('http://localhost:3000', {
  getPrincipalAccess,
  apiTagGetTags,
  apiHostMergeFacts,
  apiHostHostCheckin
}, {
  axios: axios.create()
})


export function App() {
  useEffect(() => {
        const f = async() => {
          const d = await RbacClient.getPrincipalAccess({ application: 'my-app', limit: 5 })
          const foo = await RbacClient.apiHostHostCheckin({
            createCheckIn: {
              bios_uuid: '1234',
              insights_id: '5678'
            }
          })
          
        }
        f()
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
