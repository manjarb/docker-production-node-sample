import React from 'react'
import { AdminSidebar } from "../../component"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

export class AdminReview extends React.Component {
  render() {
    return (
      <Container>
        <AdminSidebar />
        Admin Review Page
      </Container>
    )
  }
}