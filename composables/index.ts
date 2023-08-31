

export const useFoo = () => {
  const nuxtApp = useNuxtApp();

  return (x: string) => {
    return x + "11";
  };
  // return useState('foo', () => 'bar 111')
};

