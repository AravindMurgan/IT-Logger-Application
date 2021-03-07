import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const SelectTechOption = ({ getTechs, tech:{ techs,loading } }) => {
	console.log(techs)
    useEffect(()=>{

        getTechs();
        /// eslint-disable-next-line
    },[getTechs])


  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option value={` ${t.firstName} ${t.lastName}`} key={t.id}>
        {t.firstName} {t.lastName}{" "}
      </option>
    ))
  )}

SelectTechOption.propTypes = {
	getTechs: PropTypes.func.isRequired,
	tech: PropTypes.object,
};

const mapStateToProps = (state) => ({
	tech: state.tech,
});

export default connect(mapStateToProps, {getTechs})(SelectTechOption);
