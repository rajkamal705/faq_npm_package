import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

const Accordion = ({
  items,
  allowMultiple = false,
  defaultOpenFirst = false,
  className = '',
  itemClassName = '',
  titleClassName = '',
  contentClassName = ''
}) => {
  const [activeIndexes, setActiveIndexes] = useState(
    defaultOpenFirst ? [0] : []
  );

  const toggleItem = (index) => {
    setActiveIndexes(prev => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      }
      return prev.includes(index) ? [] : [index];
    });
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${itemClassName} ${
            activeIndexes.includes(index) ? 'active' : ''
          }`}
        >
          <button
            className={`accordion-title ${titleClassName}`}
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndexes.includes(index)}
            aria-controls={`accordion-content-${index}`}
          >
            {item.title}
            <span className="accordion-icon">
              {activeIndexes.includes(index) ? '−' : '+'}
            </span>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`accordion-content ${contentClassName}`}
            role="region"
            style={{
              maxHeight: activeIndexes.includes(index) ? '1000px' : '0'
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  allowMultiple: PropTypes.bool,
  defaultOpenFirst: PropTypes.bool,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  contentClassName: PropTypes.string
};

Accordion.defaultProps = {
  allowMultiple: false,
  defaultOpenFirst: false
};

export default Accordion;