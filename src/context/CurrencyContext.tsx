import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CurrencyContextProps {
  originalPrice: number;       // e.g. 97
  promoPrice: number;          // e.g. 19.90
  totalValue: number;          // e.g. 345
  currencyCode: string;        // 'EUR' | 'CHF' | 'CAD' | 'USD'
  setCurrencyCode: (code: string) => void;
  formattedPromoPrice: string;
  formattedOriginalPrice: string;
  formattedTotalValue: string;
  convertAndFormat: (eurValue: number) => string;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

// Conversion rates relative to EUR
const RATES: Record<string, { rate: number; symbol: string; format: (v: number) => string }> = {
  EUR: {
    rate: 1.0,
    symbol: '€',
    format: (v: number) => `${v.toFixed(2).replace('.', ',')} €`
  },
  CHF: {
    rate: 0.98,
    symbol: 'CHF',
    format: (v: number) => `${(v * 0.98).toFixed(2)} CHF`
  },
  CAD: {
    rate: 1.48,
    symbol: '$ CAD',
    format: (v: number) => `${(v * 1.48).toFixed(2).replace('.', ',')} $ CAD`
  },
  USD: {
    rate: 1.08,
    symbol: '$ USD',
    format: (v: number) => `$${(v * 1.08).toFixed(2)} USD`
  }
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currencyCode, setCurrencyCode] = useState<string>('EUR');
  const originalPrice = 97.00;
  const promoPrice = 8.44;
  const totalValue = 345.00;

  // Always keep in EUR (€) as requested
  const convertAndFormat = (eurValue: number): string => {
    return `${eurValue.toFixed(2).replace('.', ',')} €`;
  };

  const formattedPromoPrice = '8,44 €';
  const formattedOriginalPrice = '97,00 €';
  const formattedTotalValue = '345,00 €';

  return (
    <CurrencyContext.Provider
      value={{
        originalPrice,
        promoPrice,
        totalValue,
        currencyCode,
        setCurrencyCode,
        formattedPromoPrice,
        formattedOriginalPrice,
        formattedTotalValue,
        convertAndFormat
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
