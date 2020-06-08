import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Button from '../Button/Button';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  state = {
    shownContent: true,
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }
  
  toggleContent = () => {
    this.setState({
      shownContent: !this.state.shownContent,
    });
  }
  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imageSource={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.menu}>
          {!this.state.shownContent &&
            <Button onClick={this.toggleContent}>Open App</Button>
          }
          {this.state.shownContent &&
            <Button onClick={this.toggleContent} variant='danger'> Close App</Button>
          }
        </div>
        
        {this.state.shownContent &&
        <>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData}/>
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </> 
        }
      </section>
    );
  }
}

export default List;
