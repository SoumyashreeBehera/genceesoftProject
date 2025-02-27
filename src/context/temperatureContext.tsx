import React, {createContext, useState, useContext} from 'react';

interface ITemperatureContextType {
  unit: 'C' | 'F';
  toggleUnit: () => void;
}

const TemperatureContext = createContext<ITemperatureContextType | undefined>(
  undefined,
);

const TemperatureProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <TemperatureContext.Provider value={{unit, toggleUnit}}>
      {children}
    </TemperatureContext.Provider>
  );
};

const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error('useTemperature must be used within a TemperatureProvider');
  }
  return context;
};

export {TemperatureProvider, useTemperature};
