interface Props {
  date: Date | string
}

export function formattedDate({ date }: Props): string {
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) {
    return ''
  }
  return d.toISOString().slice(0, 10)
}
