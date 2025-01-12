const textarea = document.getElementById('myTextArea');
  const charCount = document.getElementById('charCount');

  textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    const remainingChars = 200 - currentLength;
    charCount.textContent = `Characters Remaining: ${remainingChars}`;
  });