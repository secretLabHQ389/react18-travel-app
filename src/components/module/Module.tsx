import React, { useEffect, useRef } from "react"
import "./module.scss"

//@ts-check

const Modal: React.FC = (props: any) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickOutsideContent = (e: any) => {
      if (e.target === modalRef.current) {
        props.setShow(false)
      }
    }
    window.addEventListener("click", clickOutsideContent)
    return () => {
      window.removeEventListener("click", clickOutsideContent)
    }
  }, [props])

  return (
    <div ref={modalRef} className={`modal ${props.show ? "active" : ""}`}>
      <div className="modal__content">
        {!props.hideCloseButton && (
          <span onClick={() => props.setShow(false)} className="modal__close">
            &times;
          </span>
        )}
        {props.children}
      </div>
    </div>
  )
}

export default Modal

export const ModalHeader: React.FC = (props: any) => {
  return <div className="modal__header">{props.children}</div>
}

export const ModalBody: React.FC = (props: any) => {
  return <div className="modal__body">{props.children}</div>
}

export const ModalFooter: React.FC = (props: any) => {
  return <div className="modal__footer">{props.children}</div>
}
