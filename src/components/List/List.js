import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Button from '../Button/Button';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
    shownContent: false,
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }
  toggleContent = () => {
    this.setState({
      shownContent: !this.state.shownContent,
    });
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
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
            {this.state.columns.map(({key, ...columnProps}) => (
              <Column key={key} {...columnProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div>
        </> 
        }
      </section>
    );
  }
}

export default List;
