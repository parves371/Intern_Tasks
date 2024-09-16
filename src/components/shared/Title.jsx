import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Title = ({ title = "Chat", description = "This is TalkWave" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Title;
