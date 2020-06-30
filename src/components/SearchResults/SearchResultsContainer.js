import {connect} from 'react-redux';
import SearchResult from './SearchResults.js';
import {createActionAddCard, getCardsForSearch} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  addCard: title => dispatch(createActionAddCard({
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);