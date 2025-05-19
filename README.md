# React Accordion/FAQ Component

A customizable and accessible accordion component for React applications.

## Features

- Multiple item support
- Custom CSS classes
- ARIA accessibility
- Smooth animations
- Mobile-friendly
- Keyboard navigation

## Installation

```bash
npm install faq-pluto

## Usage:

import Accordion from 'react-accordion-faq';
import 'react-accordion-faq/dist/Accordion.css'; // Import default styles

const App = () => {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.'
    },
    {
      title: 'Why use this accordion?',
      content: 'It provides accessible, customizable FAQ sections.'
    }
  ];

  return (
    <Accordion
      items={items}
      allowMultiple
      className="custom-accordion"
      titleClassName="custom-title"
    />
  );
};

## 🔧 Props Reference

| Prop Name         | Type     | Default |  Description  |
|-------------------|----------|---------|-----------------------------------------------------------------------------|
| `items`           | Array    | Required| Array of objects with `title` (string) and `content` (React node) 
           
| `allowMultiple`   | Boolean  | false   | Allow multiple accordion items to be open simultaneously
                    
| `defaultOpenFirst`| Boolean  | false   | Automatically opens the first item on initial render

| `className`       | String   | ''      | Custom class for the main accordion container 

| `itemClassName`   | String   | ''      | Custom class for individual accordion items

| `titleClassName`  | String   | ''      | Custom class for accordion titles/headers 

| `contentClassName`| String   | ''      | Custom class for accordion content panels  


# Customization:
/* Your custom CSS */
.custom-accordion .custom-title {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.custom-accordion .accordion-content {
  transition: max-height 0.5s ease-in-out;
}

♿ Accessibility
Keyboard navigation support (Enter/Space to toggle)

Proper ARIA attributes

Screen reader friendly

🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss changes.

