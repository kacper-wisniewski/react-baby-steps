import React from 'react';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import {settings, pageContents} from '../../data/dataStore';

class FAQ extends React.Component {
  render () {
    return (
      <Container>
        <Hero titleText={pageContents.FAQTitle} imageSource={settings.FAQImage}/>
        <div>
          {pageContents.FAQContent}
        </div>
      </Container>
    );
  }
}

export default FAQ;