import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from './collection-overview.component';
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionLoaded
})

const CollectionsOverivewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionsOverivewContainer;