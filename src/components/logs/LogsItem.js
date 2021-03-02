import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogsItem = (log) => {
	return (
		<>
			<li className='collection-item'>
				<div>
					<a
						href='#edit-log-modal'
						className={`modal-trigger ${
							log.attention ? 'red-text' : 'blue-text'
						}`}
					></a>
                    <br/>
                    <span className="grey-text">
                        <span className="black-text">ID # {' '} </span>
                        last updated by
                        <span className="black-text"> {log.tech} </span>
                    </span>
				</div>
			</li>
		</>
	);
};

LogsItem.propTypes = {};

export default LogsItem;
