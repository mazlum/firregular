import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import Verb from './verb';

class VerbsList extends Component {
  renderVerbs(){
    return this.props.verbs.map((verb, index) => {
        return(
                <Verb {...verb} key={verb.infinitive} index={index} />
        );
    });
  }

  render() {
    return (
      <div className="col-sm-12" style={{marginTop:20}}>
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Infinitive</th>
                <th>Simple Past</th>
                <th>Past Participle</th>
            </tr>
            </thead>
            <tbody>
                {this.renderVerbs()}
            </tbody>
        </Table>
     </div>   
    );
  }
}

const mapStateToProps = (state) => ({
  verbs: state.verbs,
});

export default connect(mapStateToProps)(VerbsList);