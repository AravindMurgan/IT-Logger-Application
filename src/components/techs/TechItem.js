import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {deleteTechs} from '../../actions/techActions';

const TechItem = ({ tech,deleteTechs }) => {

	const onDelete = ()=>{
		deleteTechs(tech.id);

		M.toast({ html: 'Tech Deleted' });
	}

	return (
		<li className='collection-item'>
			<div className=''>
				{tech.firstName} {tech.lastName}
				<a href='#' className='secondary-content' onClick={onDelete} >
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTechs: PropTypes.func.isRequired,
};

export default connect(null, {deleteTechs} )(TechItem) ;
