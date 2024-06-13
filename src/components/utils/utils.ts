export const restTime = (dateTake: number, t: string) => {

  // const timeDiff = Math.abs(dateTake - (new Date().getTime())) / 1000; // Разница в секундах
  
  const now = new Date();
  const timeDiff = (now.getHours() >= 16) ? Math.abs(dateTake - (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 8, 0, 0, 0).getTime())) / 1000 : Math.abs(dateTake - (new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 0, 0, 0).getTime())) / 1000;// Разница в секундах

  if (t === 'h') {
    return Math.floor(timeDiff / 3600); // часы
  } else if (t === 'm') {
    return Math.floor((timeDiff % 3600) / 60); //минуты
  } else if (t === 's') {
    return Math.floor(timeDiff % 60); //секунды
  }
}


export const ending = (quantity: number) => {
  let end = ''
  switch (quantity) {
    case 1:
      end = 'а'
      break;
    case 2:
      end = 'и'
      break;
    case 3:
      end = 'и'
      break;
    case 4:
      end = 'и'
      break;
    default:
      break;
  }
  return end
}