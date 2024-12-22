import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { useAppContext } from 'providers/AppProvider';

const ReactEchart = forwardRef(({ ...rest }, ref) => {
  const internalRef = useRef(null);
  const {
    config: { isFluid, isNavbarVerticalCollapsed },
  } = useAppContext();

  // Permite que el ref externo apunte a internalRef
  useImperativeHandle(ref, () => internalRef.current);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.resize();
    }
  }, [isFluid, isNavbarVerticalCollapsed]);

  return <ReactEChartsCore ref={internalRef} {...rest} />;
});

export default ReactEchart;
