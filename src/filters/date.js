export default (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-us'], {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})
}
