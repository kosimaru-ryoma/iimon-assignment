import { useRef, useState } from 'react';

export const useInputWordForm = () => {
  const [addedWords, setAddedWords] = useState<String[]>([]);
  const addedWordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (addedWordRef.current == null) {
      alert('文字を入力してください');
      return;
    }

    const text = addedWordRef.current.value;
    setAddedWords([...addedWords, text]);
    addedWordRef.current.value = '';
  };

  const onClickDelete = (key: number) => {
    setAddedWords(addedWords.filter((_, index) => index != key));
  };

  return {
    addedWords,
    addedWordRef,
    handleSubmit,
    onClickDelete,
  };
};
