import React, { PropTypes } from 'react';

const Verb = ({ infinitive, past, participle, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{infinitive}</td>
    <td>{past}</td>
    <td>{participle}</td>
  </tr>
);

Verb.propTypes = {
  infinitive: PropTypes.string.isRequired,
  past: PropTypes.string.isRequired,
  participle: PropTypes.string.isRequired,
};

export default Verb;