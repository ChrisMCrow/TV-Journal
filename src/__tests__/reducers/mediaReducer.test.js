import React from 'react';
import ReactDOM from 'react-dom';
import mediaReducer from './../../reducers/mediaReducer';
import * as c from './../../constants';

describe(mediaReducer, () => {
  it('should return default state when no action is passed', () => {
    expect(mediaReducer({}, { type: null })).toEqual({});
  })
  it('should return array of results when populateList function is called', () => {
    expect(mediaReducer({}, { type: c.POPULATE_LIST })).toContain([]);
  })
})
