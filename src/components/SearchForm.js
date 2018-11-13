import React from 'react';
import {
  Form,
  FormGroup,
  Button,
  FormControl
} from 'react-bootstrap';

const SearchForm = () => (

    <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="Search by Title" />
      <FormControl type="search" placeholder="Search by Author" />
      <FormControl type="search" placeholder="Search by Category" />
    </FormGroup>
    {' '}
    <Button type="submit">
      search
    </Button>
  </Form>

);

export default SearchForm;
