const findMiddleNode = function (head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  current = head;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    current = current.next;
  }

  return current;
};
