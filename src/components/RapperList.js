import React from 'react'
import RapperCard from './RapperCard'

const isListVisible = rapperListVisibility => 
  rapperListVisibility ? 'visible' : ''

const isValidLocation = ({ location }) => location && location !== 'n/a' && !Number(location)
const isImgUrlValid = ({ imageURL }) => imageURL && imageURL !== 'https:'

const list = rapperList => {
  const rappersfilters = rapperList.filter(rapper => 
    isValidLocation(rapper) && isImgUrlValid(rapper))
  return rappersfilters.map((rapper, index) => <RapperCard key={index} {...rapper}/>)
}

const RapperList = ({ rapperList, rapperListVisibility }) => (
  <ul className={`rapperlist ${isListVisible(rapperListVisibility)}`}>
    { list(rapperList) }
  </ul>
)

export default RapperList