import React from 'react';
import ReactDOM from 'react-dom';
import mediaReducer from './../../reducers/mediaReducer';
import * as c from './../../constants';

describe(mediaReducer, () => {
  it('should return default state when no action is passed', () => {
    expect(mediaReducer({}, { type: null })).toEqual({});
  });
  it('should return popular shows when called', () => {
    expect(mediaReducer({}, { type: c.GET_TRENDING })).toHaveProperty('trending');
  });
  it('should return a list of genres when called', () => {
    expect(mediaReducer({}, { type: c.GET_GENRES })).toHaveProperty('genres');
  });
  it('should return a list of shows by genre when called', () => {
    expect(mediaReducer({}, { type: c.DISCOVER_GENRE })).toHaveProperty('selectedGenre');
  });
})
