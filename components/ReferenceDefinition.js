import React from 'react'
import ReferenceValue from '../containers/ReferenceValue'
import SynonymList from '../containers/SynonymList'

const ReferenceDefinition = ({ value, synonyms }) => (
  <div>
    <ReferenceValue value={value}/>
    <SynonymList synonyms={synonyms}/>
  </div>
)

export default ReferenceDefinition