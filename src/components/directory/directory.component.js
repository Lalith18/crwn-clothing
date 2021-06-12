import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

import { connect} from 'react-redux';
import { selectDirectorySecions } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections}) => {
  return(
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySecions
})

export default connect(mapStateToProps)(Directory);