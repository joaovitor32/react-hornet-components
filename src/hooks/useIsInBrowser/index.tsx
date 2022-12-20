const useIsInBrowser = () => (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );

export { useIsInBrowser };
