import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import SearchArticle from './search-article';
import sinon from 'sinon';

describe('<SearchArticle />', () => {

  it('Should fire searchForArticle when that button is clicked', () => {

    const wrapper = shallow(<SearchArticle />);
    const spy = sinon.spy(wrapper.instance(), "searchForArticle");
	wrapper.setState({articleQuery: 'Madonna'});
	wrapper.update();
	wrapper.find('button').simulate('click');
	
    expect(spy.calledOnce).to.equal(true);

  });

});