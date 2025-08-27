interface Props {
  date: Date
}

export function formattedDate({ date }: Props): string {
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
