import React from 'react';
import CollectionPageContainer from '../collection/collection.component';
import { Route } from 'react-router-dom';

import { fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

import {connect} from 'react-redux'

import CollectionsOverivewContainer from '../../components/collection-overview/collection-overview.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const { match} = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverivewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);