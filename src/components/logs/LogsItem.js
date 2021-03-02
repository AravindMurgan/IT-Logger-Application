import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogsItem = ({ log }) => {
	return (
		<div>
			<li className='collection-item'>
				<div>
					<a
						href='#edit-log-modal'
						className={`modal-trigger ${
							log.attention ? 'red-text' : 'blue-text'
						}`}
					>
						{log.message}{' '}
					</a>

					<br />
					<span className='grey-text'>
						<span className='black-text'>ID # </span>
						last updated by
						<span className='black-text'> {log.tech} </span>
						<Moment format='MMMM Do YYYY, h:m:ss a'>{log.date}</Moment>
					</span>
					<a href='#' className='secondary-content'>
						<i className='material-icons grey-text'>delete</i>
					</a>
				</div>
			</li>
		</div>
	);
};

LogsItem.propTypes = {
	log: PropTypes.object.isRequired,
};

export default LogsItem;
