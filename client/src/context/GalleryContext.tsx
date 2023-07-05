"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface GalleryContextValue {
  galleryLayout: string;
  availableLayouts: string[];
  setGalleryLayout: React.Dispatch<React.SetStateAction<string>>;
  handleGalleryLayoutChange: () => void;
}

const GalleryContext = createContext<SearchContextValue>({
  galleryLayout: '',
  setGalleryLayout: () => { },
  availableLayouts: [],
  handleGalleryLayoutChange: () => { },
});

interface GalleryProviderProps {
  children: React.ReactNode;
}

export function GalleryProvider({ children }: GalleryProviderProps) {
  const [galleryLayout, setGalleryLayout] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('galleryLayout') || 'grid_with_random_order';
    }
  });

  useEffect(() => {
    window.localStorage.setItem('galleryLayout', galleryLayout);
  }, [galleryLayout]);

  const availableLayouts = [
    { value: 'grid_with_random_order', label: 'Grid with Random Order' },
    { value: 'grid_grouped_by_source', label: 'Grid Group by Source' },
    { value: 'grid_with_dividers', label: 'Grid with Dividers' },
    { value: 'grid_with_tabs', label: 'Grid with Tabs' },
  ];

  const handleGalleryLayoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGalleryLayout(event.target.value);
  };

  const value: GalleryContextValue = {
    galleryLayout,
    availableLayouts,
    setGalleryLayout,
    handleGalleryLayoutChange,
  };

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}

export function useGallery() {
  return useContext(GalleryContext);
}
