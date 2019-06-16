import React from 'react'
import styled from 'styled-components'
import { AdminEmployee, AdminSidebar } from "../../component";

const Container = styled.div`
  display: flex;
`

export class Admin extends React.Component {
  render() {
    return (
      <Container>
        <AdminSidebar />
        <AdminEmployee/>
      </Container>
    )
  }
}