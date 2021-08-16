import React, { useCallback } from 'react';
import './Tooltip.css'

function Tooltip({isSuccessOpen, isErrorOpen, onClose, message}) {

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
    if (isSuccessOpen || isErrorOpen) {
      document.addEventListener('keyup', closeByEscape);
    }
    else {
      document.removeEventListener('keyup', closeByEscape);
    }
  }, [isSuccessOpen, isErrorOpen])

  return (
    <section className={`tooltip ${(isSuccessOpen || isErrorOpen) ? 'tooltip_show' : ''}`} onClick={closeByClickOverlay}>
      <div className="tooltip__window">
        <button className="tooltip__close-btn" onClick={onClose}>
          <div className="icon icon_type_close"></div>
        </button>
        <div className={`tooltip__icon tooltip__icon_type_error ${isErrorOpen ? 'tooltip__icon_show': ''}`}></div>
        <p className={`tooltip__message tooltip__message_type_error ${isErrorOpen ? 'tooltip__message_show': ''}`}>{message}</p>
        <div className={`tooltip__icon tooltip__icon_type_success ${isSuccessOpen ? 'tooltip__icon_show': ''}`}></div>
        <p className={`tooltip__message tooltip__message_type_success ${isSuccessOpen ? 'tooltip__message_show': ''}`}>{message}</p>
      </div>
    </section>
  )
}

export default Tooltip