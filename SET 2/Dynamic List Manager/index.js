const newItemInput = document.getElementById('newItem');
  const addItemBtn = document.getElementById('addItemBtn');
  const itemList = document.getElementById('itemList');

  addItemBtn.addEventListener('click', () => {
    const newItemText = newItemInput.value;
    if (newItemText.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = newItemText;

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = listItem.textContent;

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', () => {
          listItem.textContent = inputField.value;
          listItem.removeChild(inputField);
          listItem.removeChild(saveBtn);
          listItem.appendChild(editBtn);
        });

        listItem.textContent = '';
        listItem.appendChild(inputField);
        listItem.appendChild(saveBtn);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        itemList.removeChild(listItem);
      });

      listItem.appendChild(editBtn);
      listItem.appendChild(deleteBtn);

      itemList.appendChild(listItem);
      newItemInput.value = '';
    }
  });