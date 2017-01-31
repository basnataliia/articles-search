import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import SearchArticle from './search-article';
import sinon from 'sinon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

describe('<SearchArticle />', () => {

  it('Should fire searchForArticle when that button is clicked', () => {

    const callback = sinon.spy();
    const wrapper = shallow(
      <SearchArticle searchForArticle={() => {}}/>
    );

    wrapper.find(RaisedButton).simulate('click');
    expect(callback).to.have.been.calledOnce;

  });

	  it('should render an <RaisedButton />', () => {

	    const wrapper = shallow(
	      <SearchArticle searchForArticle={() => {}}/>
	    );

	    expect(wrapper.find(RaisedButton)).to.have.length(1);

	});


	   it('should render an <TextField />', () => {

	    const wrapper = shallow(
	      <SearchArticle searchForArticle={() => {}}/>
	    );

	    expect(wrapper.find(TextField)).to.have.length(1);

	});

});