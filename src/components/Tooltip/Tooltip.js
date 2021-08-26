import React, { useCallback } from 'react';
import './Tooltip.css'

function Tooltip({ tooltip, onClose }) {

  function closeByClickOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  const closeByEscape = useCallback((evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  }, []);


  React.useEffect(() => {
    if (tooltip.isOpen) {
      document.addEventListener('keyup', closeByEscape);
    }
    else {
      document.removeEventListener('keyup', closeByEscape);
    }
  }, [tooltip])

  return (
    <section className={`tooltip ${(tooltip.isOpen) ? 'tooltip_show' : ''}`} onClick={closeByClickOverlay}>
      <div className="tooltip__window">
        <button className="tooltip__close-btn" onClick={onClose}>
          <div className="icon icon_type_close"></div>
        </button>
        <div className={`tooltip__icon tooltip__icon_type_error ${tooltip.isErrorOpen ? 'tooltip__icon_show': ''}`}></div>        
        <div className={`tooltip__icon tooltip__icon_type_success ${tooltip.isSuccessOpen ? 'tooltip__icon_show': ''}`}></div>
        <div className={`tooltip__icon tooltip__icon_type_fail ${tooltip.isFailOpen ? 'tooltip__icon_show': ''}`}></div>   
        <p className={`tooltip__message tooltip__message_show`}>{tooltip.message}</p>
      </div>
    </section>
  )
}

export default Tooltip