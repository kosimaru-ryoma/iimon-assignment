import { useRef, useState } from 'react';

export const useInputWordForm = () => {
  const [inputWordList, setInputWordList] = useState<String[]>([]);
  const inputWordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (inputWordRef.current == null) {
      alert('文字を入力してください');
      return;
    }

    const text = inputWordRef.current.value;
    setInputWordList([...inputWordList, text]);
    inputWordRef.current.value = '';
  };

  const onClickDelete = (key: number) => {
    setInputWordList(inputWordList.filter((_, index) => index != key));
  };

  return {
    inputWordList,
    inputWordRef,
    handleSubmit,
    onClickDelete,
  };
};
