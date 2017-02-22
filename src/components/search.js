import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { searchVerb } from '../actions/index';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }
  
  handleChange(e) {
    this.setState({ term: e.target.value });
    this.props.searchVerb(e.target.value);
  }

  render() {
    return (
        <div className="col-sm-12">
            <FormGroup controlId="formHorizontalEmail">
                <Col sm={12}>
                    <FormControl 
                        type="text" 
                        placeholder="Search verb.."
                        onChange={this.handleChange.bind(this)} 
                        />
                </Col>
            </FormGroup>
        </div>
    );
  }
}

export default connect(null, { searchVerb })(Search);
