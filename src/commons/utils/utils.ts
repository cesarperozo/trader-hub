import React from "react";

export const withDefaults = <P extends object>(
    Component: React.ComponentType<P>,
    defaultProps: Partial<P>,
  ): React.FC<P> => {
    const WrappedComponent: React.FC<P> = props => {
      const mergedProps = {...defaultProps, ...props} as P;
  
      return React.createElement(Component, mergedProps);
    };
  
    return WrappedComponent;
  };