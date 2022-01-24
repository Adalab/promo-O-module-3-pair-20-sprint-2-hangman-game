import '../styles/_loading.scss';

function Loading(props) {
  return <span className={props.loading ? 'loading' : null} />;
}

export default Loading;
