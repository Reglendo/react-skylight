
const styles = {
  overlayStyles: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '99',
    backgroundColor: 'rgba(0,0,0,0.3)',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease',
    display: 'none',
  },
  dialogStyles: {
    width: '50%',
    minHeight: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginLeft: '-25%',
    backgroundColor: '#fff',
    borderRadius: '2px',
    zIndex: '100',
    padding: '15px',
    boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
    transform: 'translate3d(0,-50%,0) scale(0)',
  },
  animationBase: {
    transform: 'translate3d(0,-50%,0) scale(0)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease',
  },
  animationOpen: {
    transform: 'translate3d(0,-50%,0) scale(1)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease',
  },
  title: {
    marginTop: '0px',
  },
  closeButtonStyle: {
    cursor: 'pointer',
    position: 'absolute',
    fontSize: '1.8em',
    right: '10px',
    top: '0px',
  },
};

export default styles;
