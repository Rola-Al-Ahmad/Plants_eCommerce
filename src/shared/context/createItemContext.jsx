import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

export const createItemContext = (typeName) => {
  const Context = createContext();
  const STORAGE_KEY = typeName.toLowerCase();

  const useItemLogic = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const [items, setItems] = useState(stored ? JSON.parse(stored) : []);

    useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const existingItem = useCallback(
      (id) => items.find((item) => item.id === id),
      [items]
    );

    const addItem = useCallback(
      (product) => {
        if (existingItem(product.id)) return;
        toast.success(`${product.name} added to ${typeName}`, {
          autoClose: 2500,
        });
        setItems((prev) => [...prev, product]);
      },
      [existingItem]
    );

    const removeItem = useCallback(
      (id) => {
        const product = items.find((item) => item.id === id);
        toast.error(`${product.name} removed from ${typeName}`, {
          autoClose: 2500,
        });
        setItems((prev) => prev.filter((item) => item.id !== id));
      },
      [items]
    );

    const clearItems = useCallback(() => {
      toast.error(`${typeName} cleared`, { autoClose: 2500 });
      setItems([]);
    }, []);

    return {
      items,
      setItems,
      existingItem,
      addItem,
      removeItem,
      clearItems,
    };
  };

  const Provider = ({ children }) => {
    const value = useItemLogic();
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return [Context, Provider, useItemLogic];
};
