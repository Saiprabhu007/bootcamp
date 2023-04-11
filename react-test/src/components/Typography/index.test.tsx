


import React from 'react';
import { render, screen } from '@testing-library/react';
import MuiTypography from './index';

describe('MuiTypography', () => {
it('renders default variant with children correctly', () => {
const { getByText } = render(<MuiTypography>Hello World</MuiTypography>);
expect(screen.getByText('Hello World')).toBeInTheDocument();
expect(screen.getByText('Hello World')).toHaveClass('MuiTypography-root');
expect(screen.getByText('Hello World')).toHaveClass('MuiTypography-body1');
});

it('renders specified variant with children correctly', () => {
const { getByText } = render(<MuiTypography variant="h1">Hello World</MuiTypography>);
expect(screen.getByText('Hello World')).toBeInTheDocument();
expect(screen.getByText('Hello World')).toHaveClass('MuiTypography-root');
expect(screen.getByText('Hello World')).toHaveClass('MuiTypography-h1');
});

it('renders with custom styles', () => {
const { getByText } = render(
<MuiTypography variant="body2" style={{ color: 'red' }}>
Hello World
</MuiTypography>
);
expect(screen.getByText('Hello World')).toBeInTheDocument();
expect(screen.getByText('Hello World')).toHaveStyle('color: red'); // custom style
});

it('does not render without children', () => {
const { queryByText } = render(<MuiTypography />);
expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
});


it('renders with custom font family', () => {
    const { getByText } = render(
      <MuiTypography variant="body1" style={{ fontFamily: 'Arial' }}>
        Hello World
      </MuiTypography>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toHaveStyle('font-family: Arial');
  });
  
  it('renders with custom font size', () => {
    const { getByText } = render(
      <MuiTypography variant="body1" style={{ fontSize: '2rem' }}>
        Hello World
      </MuiTypography>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toHaveStyle('font-size: 2rem');
  });
  
  it('renders with custom line height', () => {
    const { getByText } = render(
      <MuiTypography variant="body1" style={{ lineHeight: 1.5 }}>
        Hello World
      </MuiTypography>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toHaveStyle('line-height: 1.5');
  });
  
  it('renders with custom text color', () => {
    const { getByText } = render(
      <MuiTypography variant="body1" style={{ color: 'blue' }}>
        Hello World
      </MuiTypography>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toHaveStyle('color: blue');
  });
  
  it('renders with custom background color', () => {
    const { getByText } = render(
      <MuiTypography variant="body1" style={{ backgroundColor: 'yellow' }}>
        Hello World
      </MuiTypography>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toHaveStyle('background-color: yellow');
  });
  
});



