import PropTypes from "prop-types";
import useFetch from "../../hooks/use-fetch";

const Fetch = ({ endpoint, loadingFallback, renderSuccess }) => {
  const { loading, data } = useFetch(endpoint);

  if (loading) return loadingFallback;
  if (data) return renderSuccess(data);
};

Fetch.propTypes = {
  endpoint: PropTypes.string.isRequired,
  loadingFallback: PropTypes.element,
  renderSuccess: PropTypes.func,
};

Fetch.defaultProps = {
  endpoint: null,
  loadingFallback: <div>Loading...</div>,
  renderSuccess: f => f,
};

export default Fetch;