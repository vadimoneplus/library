export const restTime = (dateTake: number, type: string) => {
  // const timeDiff = Math.abs(dateTake - (new Date().getTime())) / 1000; // Разница в секундах
  const now = new Date();
  const timeDiff = (now.getHours() >= 16) ? Math.abs(dateTake - (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 8, 0, 0, 0).getTime())) / 1000 : Math.abs(dateTake - (new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 0, 0, 0).getTime())) / 1000;// Разница в секундах
  if (type === 'h') {
    return Math.floor(timeDiff / 3600); // часы
  } else if (type === 'm') {
    return Math.floor((timeDiff % 3600) / 60); //минуты
  } else if (type === 's') {
    return Math.floor(timeDiff % 60); //секунды
  }
}

export const ending = (quantity: number) => {
  switch (quantity) {
    case 1:
      return 'а'
    case 2:
      return 'и'
    case 3:
      return 'и'
    case 4:
      return 'и'
    default:
      return ''
  }
}

